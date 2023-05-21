import { math_clamp } from '@lifaon/math';
import { IHSVColor } from './hsv-color.type';
import { IHSVAColor } from './hsva-color.type';

export function hsva(
  h: number,
  s: number,
  v: number,
  a: number = 1,
): IHSVAColor {
  return {
    h: math_clamp(h, 0, 1),
    s: math_clamp(s, 0, 1),
    v: math_clamp(v, 0, 1),
    a: math_clamp(a, 0, 1),
  };
}
