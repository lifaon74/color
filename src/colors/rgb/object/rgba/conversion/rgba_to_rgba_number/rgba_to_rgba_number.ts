import { IRGBANumber } from '../../../../number/rgba/rgba-number.type';
import { IRGBAColor } from '../../rgba-color.type';

export function rgba_to_rgba_number(
  {
    r,
    g,
    b,
    a,
  }: IRGBAColor,
): IRGBANumber {
  return (
    ((r * 0xff) << 24)
    | ((g * 0xff) << 16)
    | ((b * 0xff) << 8)
    | ((a * 0xff) << 0)
  ) >>> 0;
}
