import { math_clamp } from '@lifaon/math';
import { IHSVColor } from './hsv-color.type';

export function hsv(
  h: number,
  s: number,
  v: number,
): IHSVColor {
  return {
    h: math_clamp(h, 0, 1),
    s: math_clamp(s, 0, 1),
    v: math_clamp(v, 0, 1),
  };
}
