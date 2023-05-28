import { IRGBAColor } from '../../../../object/rgba/rgba-color.type';

export function rgba_number_to_rgba(
  rgba_number: number, // u32
): IRGBAColor {
  return {
    r: ((rgba_number >> 24) & 0xff) / 0xff,
    g: ((rgba_number >> 16) & 0xff) / 0xff,
    b: ((rgba_number >> 8) & 0xff) / 0xff,
    a: ((rgba_number >> 0) & 0xff) / 0xff,
  };
}
