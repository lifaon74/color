import { math_clamp } from '@lifaon/math';
import { IRGBColor } from './rgb-color.type';

export function rgb(
  r: number,
  g: number,
  b: number,
): IRGBColor {
  return {
    r: math_clamp(r, 0, 1),
    g: math_clamp(g, 0, 1),
    b: math_clamp(b, 0, 1),
  };
}
