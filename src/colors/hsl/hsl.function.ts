import { math_clamp } from '@lifaon/math';
import { IHSLColor } from './hsl-color.type';

export function hsl(
  h: number,
  s: number,
  l: number,
): IHSLColor {
  return {
    h: math_clamp(h, 0, 1),
    s: math_clamp(s, 0, 1),
    l: math_clamp(l, 0, 1),
  };
}
