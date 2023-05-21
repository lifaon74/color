import { IRGBColor } from '../../rgb/rgb-color.type';
import { IHSLColor } from '../hsl-color.type';

function hue2rgb(
  p: number,
  q: number,
  t: number,
): number {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

export function hsl_to_rgb(
  {
    h,
    s,
    l,
  }: IHSLColor,
): IRGBColor {
  if (s === 0) { // achromatic
    return {
      r: l,
      g: l,
      b: l,
    };
  } else {
    const q: number = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p: number = 2 * l - q;
    return {
      r: hue2rgb(p, q, h + 1 / 3),
      g: hue2rgb(p, q, h),
      b: hue2rgb(p, q, h - 1 / 3),
    };
  }
}
