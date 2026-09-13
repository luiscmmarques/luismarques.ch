#!/usr/bin/env python3
"""Derive the whole app icon set from one render of tools/icon-card.html.

Run after the screenshot step in that file's header comment:

    npx playwright@latest screenshot --viewport-size=512,512 \
      tools/icon-card.html public/icon-512.png
    python3 tools/icons.py

Everything a browser asks for comes out of here, so the sizes cannot drift apart:
the two "any" tiles, the two maskable ones, the iOS home screen icon and
favicon.ico. Only public/logo.svg stays hand-drawn, and it stays the SVG favicon.

Needs Pillow, which is deliberately not a project dependency (nothing in the site
build needs it): pip install --user Pillow.
"""

from pathlib import Path

from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / 'public'
SOURCE = PUBLIC / 'icon-512.png'

# The tile's ground, which has to match tools/icon-card.html or the maskable
# inset below shows a seam.
GROUND = (5, 7, 13)

# Android guarantees only the centre 80% of a maskable icon: a circle of 0.4 x
# size, so the largest square that always survives has a side of 0.8 / sqrt(2),
# about 57% of the canvas. The tile already carries 12% padding of its own, so
# insetting the whole render to 75% of the canvas puts the artwork at 57%.
MASKABLE_INSET = 0.75


def palette(image: Image.Image) -> Image.Image:
    """Flat artwork in three colours does not need 24 bits per pixel."""
    return image.quantize(colors=256, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG)


def write(image: Image.Image, name: str) -> None:
    target = PUBLIC / name
    palette(image).save(target, optimize=True)
    print(f'{name}: {image.width}x{image.height}, {target.stat().st_size // 1024} KB')


def main() -> None:
    tile = Image.open(SOURCE).convert('RGBA')
    if tile.size != (512, 512):
        raise SystemExit(f'{SOURCE.name} is {tile.size}, expected 512x512')
    # An icon that lands on a launcher, a wallpaper or iOS's black must carry its
    # own background. A transparent render means icon-card.html lost its ground.
    if tile.getchannel('A').getextrema()[0] != 255:
        raise SystemExit(f'{SOURCE.name} has transparent pixels; it must be a filled tile')

    tile = tile.convert('RGB')
    write(tile, 'icon-512.png')
    write(tile.resize((192, 192), Image.LANCZOS), 'icon-192.png')
    # iOS ignores the manifest and uses this one, at 180px, never masked.
    write(tile.resize((180, 180), Image.LANCZOS), 'apple-touch-icon.png')

    inset = round(512 * MASKABLE_INSET)
    maskable = Image.new('RGB', (512, 512), GROUND)
    maskable.paste(tile.resize((inset, inset), Image.LANCZOS), ((512 - inset) // 2,) * 2)
    write(maskable, 'icon-512-maskable.png')
    write(maskable.resize((192, 192), Image.LANCZOS), 'icon-192-maskable.png')

    # Requested unconditionally by every browser, whatever the icon links say, so
    # without this file every visit logs a 404. It is also what bookmark lists and
    # some feed readers use, none of which read the SVG.
    # Cropped tighter than the tile before it is packed. At 16px the icon's own
    # padding costs about two pixels a side, which is the difference between a
    # cloud with a hole in it and a blue smudge. Cropping a flat ground is still
    # flat ground, so nothing but the margin is lost.
    ico = PUBLIC / 'favicon.ico'
    sizes = [(16, 16), (32, 32), (48, 48)]
    margin = round(512 * 0.06)
    tight = tile.crop((margin, margin, 512 - margin, 512 - margin))
    tight.save(ico, format='ICO', sizes=sizes, bitmap_format='png')
    print(f'favicon.ico: {", ".join(str(s[0]) for s in sizes)}px, {ico.stat().st_size // 1024} KB')


if __name__ == '__main__':
    main()
