#!/usr/bin/env python3
"""Shrink public/og.png in place, after regenerating it from tools/og-card.html.

The card is a dark UI with one small photo, so a 256 colour palette is visually
indistinguishable from the truecolour screenshot and roughly a third of the size.
Needs Pillow, which is not a project dependency: pip install --user Pillow.
"""

from pathlib import Path

from PIL import Image

TARGET = Path(__file__).resolve().parent.parent / 'public' / 'og.png'


def main() -> None:
    before = TARGET.stat().st_size
    image = Image.open(TARGET).convert('RGB')
    image.quantize(colors=256, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG).save(
        TARGET, optimize=True
    )
    after = TARGET.stat().st_size
    print(f'{TARGET.name}: {before // 1024} KB -> {after // 1024} KB')


if __name__ == '__main__':
    main()
