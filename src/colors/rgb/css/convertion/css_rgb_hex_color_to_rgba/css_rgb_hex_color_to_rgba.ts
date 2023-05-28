import { rgba_number_to_rgba } from '../../../number/rgba/convertion/rgba_number_to_rgba/rgba_number_to_rgba';
import { IRGBAColor } from '../../../object/rgba/rgba-color.type';
import { css_rgb_hex_color_to_rgba_number } from '../css_rgb_hex_color_to_rgba_number/css_rgb_hex_color_to_rgba_number';

export function css_rgb_hex_color_to_rgba(
  input: string,
): IRGBAColor {
  return rgba_number_to_rgba(css_rgb_hex_color_to_rgba_number(input));
}


