"""LatherForge country lane: one JSON batch -> Facebook hook images + TikTok carousels + Metricool payloads.

Usage:
  python3 social/country_lane.py render  social/batches/<batch>.json
  python3 social/country_lane.py payloads social/batches/<batch>.json <commit-sha>   # prints JSONL to stdout
  python3 social/country_lane.py check    social/batches/<batch>.json <commit-sha>   # HTTP 200 check of every image
  python3 social/country_lane.py used                                              # hooks already used (avoid repeats)

Batch item fields:
  id        "2026-11-01-australia" (date = local posting day, then country)
  chip      "AUSTRALIA" | "CANADA" | "US & CANADA" | "UNITED KINGDOM" | "NEW ZEALAND" | "IRELAND" | special e.g. "HALLOWEEN"
  fb_when   ISO time with Dublin offset, e.g. "2026-11-01T08:00:00+00:00"
  tt_when   usually fb_when + 30 min
  hook      3-8 words, the line on the image
  sub       one short subhead line
  accent    word(s) in the hook to colour gold on the Facebook image
  points    [[headline, one-line detail], x3]   (carousel slides 2-4)
  fb_text   full Facebook caption. NO URLs. End with "Free soap calculator on our profile 👆" (or "Free pricing calculator ...") + question + 5 hashtags
  pricing   true for cost/Etsy/business topics (switches CTA wording)
"""
import json, os, sys, glob, subprocess
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FB_DIR = os.path.join(ROOT, 'social', 'country-lane')
TT_DIR = os.path.join(ROOT, 'social', 'tiktok')
RAW = 'https://raw.githubusercontent.com/Noel-Culleton/latherforge/{sha}/{path}'
BG = (62, 40, 32); BG2 = (92, 61, 46); CREAM = (250, 247, 242); GOLD = (201, 168, 76)
MUTED_FB = (201, 180, 154); MUTED = (214, 196, 170)
F = '/usr/share/fonts/truetype/liberation/'
SERIF = F + 'LiberationSerif-Bold.ttf'; SANS = F + 'LiberationSans-Regular.ttf'; SANSB = F + 'LiberationSans-Bold.ttf'
TAGS = {'IRELAND': '#soapmakingireland', 'US & CANADA': '#soapmakingcanada', 'CANADA': '#soapmakingcanada',
        'AUSTRALIA': '#soapmakingaustralia', 'UNITED KINGDOM': '#soapmakinguk', 'NEW ZEALAND': '#soapmakingnz'}

def font(p, s): return ImageFont.truetype(p, s)
def canvas(w, h):
    im = Image.new('RGB', (w, h)); d = ImageDraw.Draw(im)
    for y in range(h):
        t = y / h; d.line([(0, y), (w, y)], fill=tuple(int(BG[i] * (1 - t) + BG2[i] * t) for i in range(3)))
    d.rectangle([40, 40, w - 40, h - 40], outline=GOLD, width=3); return im, d
def wrap(d, text, f, maxw):
    out, cur = [], ''
    for w in text.split():
        t = (cur + ' ' + w).strip()
        if d.textlength(t, font=f) <= maxw: cur = t
        else: out.append(cur); cur = w
    out.append(cur); return out
def fit(d, text, path, size, maxw, minsize, maxlines):
    while True:
        f = font(path, size); ls = wrap(d, text, f, maxw)
        if len(ls) <= maxlines or size <= minsize: return f, ls, size
        size -= 6
def chip(d, txt, y=120, size=34, h=70):
    f = font(SANSB, size); w = d.textlength(txt, font=f)
    d.rounded_rectangle([90, y, 90 + w + 56, y + h], radius=h // 2, fill=GOLD); d.text((118, y + (h - size) // 2 - 2), txt, font=f, fill=BG)

def fb_image(p, path):
    W, H = 1080, 1350; im, d = canvas(W, H); chip(d, p['chip'])
    f, ls, sz = fit(d, p['hook'], SERIF, 118, W - 180, 70, 4); y = 300
    for l in ls:
        d.text((90, y), l, font=f, fill=GOLD if p.get('accent') and p['accent'].lower() in l.lower() else CREAM); y += int(sz * 1.15)
    y += 30; d.rectangle([90, y, 250, y + 6], fill=GOLD); y += 50; sf = font(SANS, 48)
    for l in wrap(d, p['sub'], sf, W - 180): d.text((90, y), l, font=sf, fill=MUTED_FB); y += 62
    d.text((90, H - 200), 'LatherForge', font=font(SERIF, 54), fill=CREAM)
    d.text((90, H - 130), 'Free soap calculator · latherforge.com', font=font(SANS, 36), fill=GOLD)
    im.save(path, optimize=True)

def tt_slides(p, outdir):
    W, H = 1080, 1920; n = len(p['points']) + 2; paths = []
    def footer(d, i):
        d.text((90, H - 190), 'LatherForge', font=font(SERIF, 56), fill=CREAM)
        d.text((90, H - 120), 'latherforge.com', font=font(SANS, 38), fill=GOLD)
        pf = font(SANSB, 34); t = f'{i}/{n}'; d.text((W - 90 - d.textlength(t, font=pf), H - 115), t, font=pf, fill=MUTED)
    im, d = canvas(W, H); chip(d, p['chip'], 150, 38, 78)
    f, ls, sz = fit(d, p['hook'], SERIF, 140, W - 180, 90, 5); y = 520
    for k, l in enumerate(ls): d.text((90, y), l, font=f, fill=GOLD if k == len(ls) - 1 else CREAM); y += int(sz * 1.15)
    y += 40; d.rectangle([90, y, 260, y + 7], fill=GOLD); y += 60; sf = font(SANS, 56)
    for l in wrap(d, p['sub'], sf, W - 180): d.text((90, y), l, font=sf, fill=MUTED); y += 72
    d.text((90, y + 60), 'Swipe  →', font=font(SANSB, 50), fill=GOLD); footer(d, 1); slides = [im]
    for k, (h, s) in enumerate(p['points'], 1):
        im, d = canvas(W, H); chip(d, p['chip'], 150, 38, 78)
        d.text((90, 380), str(k), font=font(SERIF, 260), fill=GOLD)
        f, ls, sz = fit(d, h, SERIF, 110, W - 180, 72, 4); y = 740
        for l in ls: d.text((90, y), l, font=f, fill=CREAM); y += int(sz * 1.15)
        y += 50; sf = font(SANS, 54)
        for l in wrap(d, s, sf, W - 180): d.text((90, y), l, font=sf, fill=MUTED); y += 70
        footer(d, k + 1); slides.append(im)
    im, d = canvas(W, H)
    f, ls, sz = fit(d, 'Free pricing calculator' if p.get('pricing') else 'Free soap calculator', SERIF, 120, W - 180, 80, 3); y = 640
    for l in ls: d.text((90, y), l, font=f, fill=CREAM); y += int(sz * 1.15)
    y += 50; d.rectangle([90, y, 260, y + 7], fill=GOLD); y += 70
    d.text((90, y), 'LATHERFORGE.COM', font=font(SANSB, 78), fill=GOLD); y += 120
    d.text((90, y), 'No signup. Follow for daily soap tips.', font=font(SANS, 54), fill=MUTED); footer(d, n); slides.append(im)
    for k, s in enumerate(slides, 1):
        fp = os.path.join(outdir, f"{p['id']}-{k}.jpg"); s.save(fp, quality=88, optimize=True); paths.append(fp)
    return paths

def month_dir(p): return os.path.join(TT_DIR, p['id'][:7])
def rel(path): return os.path.relpath(path, ROOT)
def fb_path(p): return os.path.join(FB_DIR, p['id'] + '.png')
def tt_paths(p): return [os.path.join(month_dir(p), f"{p['id']}-{k}.jpg") for k in range(1, len(p['points']) + 3)]

def check_item(p):
    probs = []
    if 'http' in p['fb_text'] or 'latherforge.com' in p['fb_text']: probs.append('URL in fb_text (Facebook cuts reach)')
    if len(p['points']) != 3: probs.append('needs exactly 3 points')
    for word in ('4 ', 'four '):
        if word in p['sub'].lower() or word in p['hook'].lower(): probs.append('hook/sub promises 4 items but there are 3 slides')
    return probs

def render(batch):
    data = json.load(open(batch)); bad = False
    for p in data:
        for pr in check_item(p): print('PROBLEM', p['id'], pr); bad = True
    if bad: sys.exit(1)
    os.makedirs(FB_DIR, exist_ok=True)
    for p in data:
        os.makedirs(month_dir(p), exist_ok=True); fb_image(p, fb_path(p)); tt_slides(p, month_dir(p))
    print('rendered', len(data), 'posts')

def payloads(batch, sha):
    for p in json.load(open(batch)):
        fb = {"autoPublish": True, "draft": False, "descendants": [], "firstCommentText": "", "hasNotReadNotes": False,
              "media": [RAW.format(sha=sha, path=rel(fb_path(p)))], "mediaAltText": [(p['hook'] if p['hook'][-1] in '?!.' else p['hook'] + '.') + ' ' + p['sub']],
              "providers": [{"network": "facebook"}], "publicationDate": {"dateTime": p['fb_when'][:19], "timezone": "Europe/Dublin"},
              "shortener": False, "smartLinkData": {"ids": []}, "text": p['fb_text'], "facebookData": {"type": "POST"}}
        pts = '\n'.join(f"{i}. {h} – {s}" for i, (h, s) in enumerate(p['points'], 1))
        calc = 'Free pricing calculator' if p.get('pricing') else 'Free soap calculator'
        tag = TAGS.get(p['chip'], '#soapmakingtips')
        tt = {"autoPublish": True, "draft": False, "descendants": [], "firstCommentText": "", "hasNotReadNotes": False,
              "media": [RAW.format(sha=sha, path=rel(x)) for x in tt_paths(p)], "mediaAltText": [],
              "providers": [{"network": "tiktok"}], "publicationDate": {"dateTime": p['tt_when'][:19], "timezone": "Europe/Dublin"},
              "shortener": False, "smartLinkData": {"ids": []},
              "text": f"{p['hook']} 👉 swipe\n\n{pts}\n\n{calc}, no signup: latherforge.com\n\n#soapmaking #coldprocesssoap #handmadesoap {tag} #soaptok",
              "tiktokData": {"privacyOption": "PUBLIC_TO_EVERYONE", "title": p['hook'][:90], "autoAddMusic": True, "photoCoverIndex": 0}}
        print(json.dumps({"id": p['id'], "network": "facebook", "date": p['fb_when'], "info": json.dumps(fb, ensure_ascii=False)}, ensure_ascii=False))
        print(json.dumps({"id": p['id'], "network": "tiktok", "date": p['tt_when'], "info": json.dumps(tt, ensure_ascii=False)}, ensure_ascii=False))

def check(batch, sha):
    ok = True
    for p in json.load(open(batch)):
        for x in [fb_path(p)] + tt_paths(p):
            url = RAW.format(sha=sha, path=rel(x))
            code = subprocess.run(['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', url], capture_output=True, text=True).stdout
            if code != '200': print('NOT LIVE', code, url); ok = False
    print('all images live' if ok else 'some images missing'); sys.exit(0 if ok else 1)

def used():
    seen = []
    for f in sorted(glob.glob(os.path.join(ROOT, 'social', 'batches', '*.json')) + glob.glob(os.path.join(TT_DIR, '*.json'))):
        for p in json.load(open(f)): seen.append(f"{p['id']}: {p['hook']}")
    print('\n'.join(seen))

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'render': render(sys.argv[2])
    elif cmd == 'payloads': payloads(sys.argv[2], sys.argv[3])
    elif cmd == 'check': check(sys.argv[2], sys.argv[3])
    elif cmd == 'used': used()
