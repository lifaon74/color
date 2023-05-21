import { IRGBColor } from '../colors/rgb/rgb-color.type';
import { IRGBAColor } from '../colors/rgb/rgba-color.type';

export function parse_css_hex_color(
  input: string,
): IRGBColor | IRGBAColor {
  const hasAlpha: boolean = (input.length === 9);
  if (
    input.startsWith('#')
    && ((input.length === 7) || hasAlpha)
  ) {
    const color: number = Number(`0x${input.slice(1).padEnd(8, 'ff')}`);
    const r: number = ((color >> 24) & 0xff) / 255;
    const g: number = ((color >> 16) & 0xff) / 255;
    const b: number = ((color >> 8) & 0xff) / 255;
    const a: number = ((color >> 0) & 0xff) / 255;

    return hasAlpha
      ? {
        r,
        g,
        b,
        a,
      }
      : {
        r,
        g,
        b,
      };
  } else {
    throw new Error(`Not a valid css #rrggbbaa color`);
  }
}
