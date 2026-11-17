import { IRGBColor } from '../../../object/rgb/rgb-color.type';
import { rgba_to_rgb } from '../../../object/rgba/conversion/rgba_to_rgb/rgba_to_rgba_number';
import { css_rgb_hex_color_to_rgba } from '../css_rgb_hex_color_to_rgba/css_rgb_hex_color_to_rgba';

export function css_rgb_hex_color_to_rgb(
  input: string,
): IRGBColor {
  return rgba_to_rgb(css_rgb_hex_color_to_rgba(input));
}


