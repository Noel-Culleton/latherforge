"""TikTok photo carousels, 1080x1920, LatherForge brown/gold. Usage: python3 make_carousels.py data.json outdir"""
import json, sys, os
from PIL import Image, ImageDraw, ImageFont
W,H=1080,1920
BG=(62,40,32); BG2=(92,61,46); CREAM=(250,247,242); GOLD=(201,168,76); MUTED=(214,196,170)
F='/usr/share/fonts/truetype/liberation/'
SB=F+'LiberationSerif-Bold.ttf'; S=F+'LiberationSans-Regular.ttf'; SBd=F+'LiberationSans-Bold.ttf'
def base():
    im=Image.new('RGB',(W,H)); d=ImageDraw.Draw(im)
    for y in range(H):
        t=y/H; d.line([(0,y),(W,y)],fill=tuple(int(BG[i]*(1-t)+BG2[i]*t) for i in range(3)))
    d.rectangle([40,40,W-40,H-40],outline=GOLD,width=3); return im,d
def wrap(d,text,font,maxw):
    out=[];cur=''
    for w in text.split():
        t=(cur+' '+w).strip()
        if d.textlength(t,font=font)<=maxw: cur=t
        else: out.append(cur);cur=w
    out.append(cur);return out
def block(d,text,fontpath,size,maxw,minsize,maxlines):
    while True:
        f=ImageFont.truetype(fontpath,size);ls=wrap(d,text,f,maxw)
        if len(ls)<=maxlines or size<=minsize: return f,ls,size
        size-=6
def footer(d,i,n):
    d.text((90,H-190),'LatherForge',font=ImageFont.truetype(SB,56),fill=CREAM)
    d.text((90,H-120),'latherforge.com',font=ImageFont.truetype(S,38),fill=GOLD)
    pf=ImageFont.truetype(SBd,34); t=f'{i}/{n}'; d.text((W-90-d.textlength(t,font=pf),H-115),t,font=pf,fill=MUTED)
def chip(d,txt,y=150):
    f=ImageFont.truetype(SBd,38); w=d.textlength(txt,font=f)
    d.rounded_rectangle([90,y,90+w+60,y+78],radius=39,fill=GOLD); d.text((120,y+16),txt,font=f,fill=BG)
def make(p,out):
    n=len(p['points'])+2; files=[]
    im,d=base(); chip(d,p['chip'])
    f,ls,sz=block(d,p['hook'],SB,140,W-180,90,5); y=520
    for k,l in enumerate(ls):
        d.text((90,y),l,font=f,fill=GOLD if k==len(ls)-1 else CREAM); y+=int(sz*1.15)
    y+=40; d.rectangle([90,y,260,y+7],fill=GOLD); y+=60
    sf=ImageFont.truetype(S,56)
    for l in wrap(d,p['sub'],sf,W-180): d.text((90,y),l,font=sf,fill=MUTED); y+=72
    d.text((90,y+60),'Swipe  →',font=ImageFont.truetype(SBd,50),fill=GOLD)
    footer(d,1,n); files.append(im)
    for k,(h,s) in enumerate(p['points'],1):
        im,d=base(); chip(d,p['chip'])
        d.text((90,380),str(k),font=ImageFont.truetype(SB,260),fill=GOLD)
        f,ls,sz=block(d,h,SB,110,W-180,72,4); y=740
        for l in ls: d.text((90,y),l,font=f,fill=CREAM); y+=int(sz*1.15)
        y+=50; sf=ImageFont.truetype(S,54)
        for l in wrap(d,s,sf,W-180): d.text((90,y),l,font=sf,fill=MUTED); y+=70
        footer(d,k+1,n); files.append(im)
    im,d=base()
    f,ls,sz=block(d,p.get('cta','Free soap calculator'),SB,120,W-180,80,3); y=640
    for l in ls: d.text((90,y),l,font=f,fill=CREAM); y+=int(sz*1.15)
    y+=50; d.rectangle([90,y,260,y+7],fill=GOLD); y+=70
    d.text((90,y),'LATHERFORGE.COM',font=ImageFont.truetype(SBd,78),fill=GOLD); y+=120
    sf=ImageFont.truetype(S,54); d.text((90,y),'No signup. Follow for daily soap tips.',font=sf,fill=MUTED)
    footer(d,n,n); files.append(im)
    paths=[]
    for k,im in enumerate(files,1):
        fp=os.path.join(out,f"{p['id']}-{k}.jpg"); im.save(fp,quality=88,optimize=True); paths.append(fp)
    return paths
if __name__=='__main__':
    data=json.load(open(sys.argv[1])); os.makedirs(sys.argv[2],exist_ok=True)
    for p in data: make(p,sys.argv[2])
    print('ok',len(data))
