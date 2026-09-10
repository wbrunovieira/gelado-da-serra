"""Extrai montanhas, sol, fita e risco do public/logo.svg como componentes React (src/components/LogoParts.tsx).
Rode a partir da raiz do projeto com o venv que tem numpy/scipy/pillow."""
import re, os, numpy as np
os.chdir(os.path.dirname(os.path.abspath(__file__)))
full = open('trace_logo.py').read()
exec(full.split("layers = [")[0])
# reaproveita a função trace() definida depois da lista de camadas
exec("def trace" + full.split("def trace")[1].split("parts = []")[0])
import subprocess
def bbox(m):
    ys, xs = np.where(m); return xs.min(), ys.min(), xs.max(), ys.max()
svg = open('../../public/logo.svg').read()
def grp(id_):
    return re.search(rf'<g id="gds-{id_}"[^>]*>.*?</g></g>', svg, re.S).group(0)
col_top = np.where(ribbon_fill.any(axis=0), ribbon_fill.argmax(axis=0), H)
above = (np.arange(H)[:, None] < col_top[None, :] - 4) & (np.arange(H)[:, None] < rib_top + 140)
mtn_mask = (mountains | snow) & above
# fita preenchida (sem os buracos do texto)
tr_r, ds_r = trace(ribbon_fill, 'ribbonfull')
ribbon_full_grp = f'<g data-part="ribbon" fill="var(--ribbon-fill, #f20404)"><g transform="{tr_r}">' + "".join(f'<path d="{d}"/>' for d in ds_r) + '</g></g>'
sx0, sy0, sx1, sy1 = bbox(sun); scx, scy, sr = (sx0+sx1)/2, (sy0+sy1)/2, (sx1-sx0)/2
sun_grp = f'<g data-part="sun"><circle cx="{scx:.0f}" cy="{scy:.0f}" r="{sr:.0f}" fill="var(--sun-fill, #fedd0e)"/></g>'
parts = [('MountainRange', ['mtn', 'snow'], mtn_mask, None),
         ('Sun', ['sun'], sun, sun_grp),
         ('RibbonBand', ['outline', 'accent'], ribbon_fill | outline | accent, ribbon_full_grp),
         ('Swoosh', ['swoosh'], swoosh, None)]
code = '''/* Elementos do logo isolados. Gerado por docs/brand/logo_parts.py a partir de public/logo.svg.
   Recolorir via CSS vars: --mtn-fill, --snow-fill, --sun-fill, --ribbon-fill, --outline-fill, --swoosh-fill. */
type PartProps = { className?: string; style?: React.CSSProperties };
'''
for name, ids, mask, extra in parts:
    x0, y0, x1, y1 = bbox(mask); pad = 6
    vb = f"{x0-pad} {y0-pad} {x1-x0+2*pad} {y1-y0+2*pad}"
    inner = "\n".join(grp(i) for i in ids if not (name == 'Sun'))
    if extra: inner = (inner + "\n" + extra).strip()
    inner = re.sub(r'id="gds-([a-z]+)"', r'data-part="\1"', inner)
    inner = re.sub(r'data-part="([a-z]+)" fill="(#[0-9a-f]{6})"', lambda m: f'data-part="{m.group(1)}" fill="var(--{m.group(1)}-fill, {m.group(2)})"', inner)
    code += f'''
export function {name}({{ className = "", style }}: PartProps) {{
  return (
    <svg viewBox="{vb}" className={{className}} style={{style}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
{inner}
    </svg>
  );
}}
'''
    print(name, vb)
open('../../src/components/LogoParts.tsx', 'w').write(code)
print(len(code)//1024, 'KB')
