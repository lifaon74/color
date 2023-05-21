import { IHSVColor } from '../../hsv/hsv-color.type';
import { IRGBColor } from '../rgb-color.type';

// https://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
// https://gist.github.com/mjackson/5311256

export function rgb_to_hsv(
  {
    r,
    g,
    b,
  }: IRGBColor,
): IHSVColor {
  const max: number = Math.max(r, g, b);
  const min: number = Math.min(r, g, b);

  const d: number = max - min;
  const s: number = (max === 0)
    ? 0
    : (d / max);
  const v: number = max;

  if (max === min) {
    return {
      h: 0,
      s,
      v,
    };
  } else {
    let h!: number;

    switch (max) {
      case r:
        h = ((g - b) / d) + (g < b ? 6 : 0);
        break;
      case g:
        h = ((b - r) / d) + 2;
        break;
      case b:
        h = ((r - g) / d) + 4;
        break;
    }

    h /= 6;

    return {
      h,
      s,
      v,
    };
  }
}
