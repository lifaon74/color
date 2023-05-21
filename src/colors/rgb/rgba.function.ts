import { math_clamp } from '@lifaon/math';
import { IRGBAColor } from './rgba-color.type';

export function rgba(
  r: number,
  g: number,
  b: number,
  a: number = 1,
): IRGBAColor {
  return {
    r: math_clamp(r, 0, 1),
    g: math_clamp(g, 0, 1),
    b: math_clamp(b, 0, 1),
    a: math_clamp(a, 0, 1),
  };
}
