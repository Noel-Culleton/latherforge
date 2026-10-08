import sys
from PIL import Image, ImageDraw, ImageFont
W,H=1080,1350
BG=(62,40,32); BG2=(92,61,46); CREAM=(250,247,242); GOLD=(201,168,76); MUTED=(201,180,154)
F='/usr/share/fonts/truetype/'
serifB=F+'liberation/LiberationSerif-Bold.ttf'; serifI=F+'liberation/LiberationSerif-Italic.ttf'
sans=F+'liberation/LiberationSans-Regular.ttf'; sansB=F+'liberation/LiberationSans-Bold.ttf'
def wrap(d,text,font,maxw):
    words=text.split(); lines=[]; cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if d.textlength(t,font=font)<=maxw: cur=t
        else: lines.append(cur); cur=w
    lines.append(cur); return lines
def make(path,chip,hook,sub,accent):
    im=Image.new('RGB',(W,H),BG); d=ImageDraw.Draw(im)
    for y in range(H):  # vertical gradient
        t=y/H; c=tuple(int(BG[i]*(1-t)+BG2[i]*t) for i in range(3)); d.line([(0,y),(W,y)],fill=c)
    d.rectangle([40,40,W-40,H-40],outline=GOLD,width=3)
    # chip
    cf=ImageFont.truetype(sansB,34); tw=d.textlength(chip,font=cf)
    d.rounded_rectangle([90,120,90+tw+56,190],radius=35,fill=GOLD); d.text((118,134),chip,font=cf,fill=BG)
    # hook
    size=118
    while True:
        hf=ImageFont.truetype(serifB,size); lines=wrap(d,hook,hf,W-180)
        if len(lines)<=4 or size<70: break
        size-=8
    y=300
    for i,l in enumerate(lines):
        col=GOLD if accent and accent.lower() in l.lower() else CREAM
        d.text((90,y),l,font=hf,fill=col); y+=int(size*1.15)
    # gold rule
    y+=30; d.rectangle([90,y,250,y+6],fill=GOLD); y+=50
    sf=ImageFont.truetype(sans,48)
    for l in wrap(d,sub,sf,W-180):
        d.text((90,y),l,font=sf,fill=MUTED); y+=62
    # footer
    bf=ImageFont.truetype(serifB,54); d.text((90,H-200),'LatherForge',font=bf,fill=CREAM)
    uf=ImageFont.truetype(sans,36); d.text((90,H-130),'Free soap calculator · latherforge.com',font=uf,fill=GOLD)
    im.save(path,optimize=True)
posts=[
 ('2026-10-09-ireland.png','IRELAND','Christmas markets are 10 weeks away','Make your soap now. Cold process needs 4–6 weeks to cure.','10 weeks'),
 ('2026-10-10-us-canada.png','US & CANADA','Stop measuring soap in cups','Weigh everything. Grams beat guesswork.','cups'),
 ('2026-10-11-australia.png','AUSTRALIA','Is your caustic soda soap-safe?','Check for 99%+ sodium hydroxide, nothing added.','soap-safe'),
 ('2026-10-12-canada.png','CANADA','Soaping in a cold house?','Why your bars look different in winter, and what to do.','cold'),
 ('2026-10-13-uk.png','UNITED KINGDOM','Selling soap in the UK this Christmas?','4 things you need before your first sale.','Christmas'),
 ('2026-10-14-new-zealand.png','NEW ZEALAND','Summer makes soap misbehave','4 tips for soaping in the heat.','Summer'),
 ('2026-10-15-us-canada.png','US & CANADA','Your holiday soap deadline is October','The craft-fair timeline, week by week.','October'),
]
out=sys.argv[1]
for p in posts: make(out+'/'+p[0],*p[1:])
print('ok')
