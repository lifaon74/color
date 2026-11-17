import { math_round } from '@lifaon/math';
import { IRGBColor } from '../../rgb-color.type';

export function rgb_to_css_rgb_hex_color(
  {
    r,
    g,
    b,
  }: IRGBColor,
): string {
  return '#'
    + math_round(r * 255).toString(16).padStart(2, '0')
    + math_round(g * 255).toString(16).padStart(2, '0')
    + math_round(b * 255).toString(16).padStart(2, '0')
    ;
}
