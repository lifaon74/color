import { IRGBColor } from '../../../rgb/rgb-color.type';
import { IRGBAColor } from '../../rgba-color.type';

export function rgba_to_rgb(
  {
    a,
    ...rgb
  }: IRGBAColor,
): IRGBColor {
  return rgb;
}
