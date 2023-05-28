import { IRGBANumber } from '../../../number/rgba/rgba-number.type';

export function css_rgb_hex_color_to_rgba_number(
  input: string,
): IRGBANumber {
  if (input.startsWith('#')) {
    input = input.slice(1);
    const length: number = input.length;
    let num: number | undefined;

    if (length === 3) {
      num = Number(
        '0x'
        + input.slice(0, 1).repeat(2)
        + input.slice(1, 2).repeat(2)
        + input.slice(2, 3).repeat(2)
        + 'ff',
      );
    } else if (length === 4) {
      num = Number(
        '0x'
        + input.slice(0, 1).repeat(2)
        + input.slice(1, 2).repeat(2)
        + input.slice(2, 3).repeat(2)
        + input.slice(3, 4).repeat(2),
      );
    } else if (length === 6) {
      num = Number(
        '0x'
        + input
        + 'ff',
      );
    } else if (length === 8) {
      num = Number(
        '0x'
        + input,
      );
    }

    if ((num !== void 0) && !Number.isNaN(num)) {
      return num;
    }
  }

  throw new Error(`Not a valid css rgb hex color`);
}


