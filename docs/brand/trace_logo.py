import numpy as np, subprocess, re, os
from PIL import Image, ImageFilter
from scipy import ndimage as ndi

im = Image.open('logo-src-003.png').convert('RGB')
S = 3
im = im.resize((im.width*S, im.height*S), Image.LANCZOS)
W, H = im.size
a = np.asarray(im).astype(float)/255
hsv = np.asarray(im.convert('HSV')).astype(float)/255
h, s, v = hsv[...,0], hsv[...,1], hsv[...,2]
r, g, b = a[...,0], a[...,1], a[...,2]

red    = (r > 0.55) & (g < 0.35) & (b < 0.35)
yellow = (r > 0.75) & (g > 0.6) & (b < 0.45)
light  = (v > 0.78) & (s < 0.35)
blue   = (b > 0.76) & (g > 0.37) & (r < 0.55) & ~light

# exclude decorative yellow arc at top-left of the art
yellow[:, :int(W*0.12)] = False
light[:, :int(W*0.15)] = False
blue[:, :int(W*0.15)] = False

def clean(m, open_r=1, close_r=1):
    m = ndi.binary_opening(m, iterations=open_r)
    m = ndi.binary_closing(m, iterations=close_r)
    return m

red = clean(red, 1, 2)
# filled ribbon hull (closes text holes)
ribbon_fill = ndi.binary_fill_holes(ndi.binary_closing(red, iterations=12))
ribbon_fill = ndi.binary_dilation(ribbon_fill, iterations=2)
rows = np.where(ribbon_fill.any(axis=1))[0]
rib_top = rows.min()

text    = light & ribbon_fill
outline = light & ~ribbon_fill & (np.arange(H)[:,None] >= rib_top - 40)
snow    = light & ~ribbon_fill & (np.arange(H)[:,None] < rib_top - 40)
# outline vs snow overlap near ribbon top: restrict outline to a band around the ribbon
band = ndi.binary_dilation(ribbon_fill, iterations=30) & ~ribbon_fill
outline = light & band
snow = light & ~ribbon_fill & ~band

sun = yellow & (np.arange(H)[:,None] < rib_top)
accent = yellow & ~sun
mountains = blue & (np.arange(H)[:,None] < rib_top + 10) & ~ribbon_fill
swoosh = blue & (np.arange(H)[:,None] >= rib_top + 10) & ~ribbon_fill

layers = [
 ('swoosh', swoosh, '#0a81ff'),
 ('outline', outline, '#fbfcf8'),
 ('accent', accent, '#e8de6a'),
 ('ribbon', ribbon_fill & ~text, '#f20404'),
 ('mtn', mountains, '#0380fe'),
 ('snow', snow, '#f4fcfd'),
 ('sun', sun, '#fedd0e'),
 ('text', text, '#fdf8f5'),
]

def trace(mask, name):
    m = clean(mask, 1, 1)
    # drop tiny specks
    lab, n = ndi.label(m)
    sizes = ndi.sum(m, lab, range(1, n+1))
    keep = np.isin(lab, [i+1 for i,sz in enumerate(sizes) if sz > 60])
    Image.fromarray((~keep).astype(np.uint8)*255).convert('1').save(f'mask-{name}.pbm')
    out = subprocess.run(['potrace','-s','-a','1.2','-t','8','-O','0.5','-u','10','mask-'+name+'.pbm','-o','-'],capture_output=True,text=True).stdout
    # potrace svg: <g transform="translate(0,H) scale(sx,-sy)"> <path d=.../>
    tr = re.search(r'<g transform="([^"]+)"', out).group(1)
    ds = re.findall(r'<path d="([^"]+)"', out)
    return tr, ds

parts = []
for name, mask, color in layers:
    tr, ds = trace(mask, name)
    if name == 'text':
        # split into subpaths for letter animation
        inner = []
        for d in ds:
            for sp in re.split(r'(?=M)', d.strip()):
                if sp.strip(): inner.append(f'<path d="{sp.strip()}"/>')
        body = "\n".join(inner)
    else:
        body = "\n".join(f'<path d="{d}"/>' for d in ds)
    parts.append(f'<g id="gds-{name}" fill="{color}" transform="{tr}">\n{body}\n</g>')
    print(name, len(ds), 'paths', mask.sum())

union = np.zeros((H,W),bool)
for _,m,_ in layers: union |= m
ys,xs=np.where(union); x0,x1,y0,y1=xs.min()-6,xs.max()+6,ys.min()-6,ys.max()+6
vb=f'{x0} {y0} {x1-x0} {y1-y0}'
print('viewBox',vb)
svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">\n' + "\n".join(parts) + '\n</svg>'
open('logo-traced.svg','w').write(svg)
print('W,H',W,H, len(svg)//1024,'KB')
