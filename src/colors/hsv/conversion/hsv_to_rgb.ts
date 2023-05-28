import { IRGBColor } from '../../rgb/object/rgb/rgb-color.type';
import { IHSVColor } from '../hsv-color.type';

export function hsv_to_rgb(
  {
    h,
    s,
    v,
  }: IHSVColor,
): IRGBColor {
  const i: number = Math.floor(h * 6);
  const f: number = (h * 6) - i;

  const p: number = v * (1 - s);
  const q: number = v * (1 - (f * s));
  const t: number = v * (1 - ((1 - f) * s));

  switch (i % 6) {
    case 0:
      return {
        r: v,
        g: t,
        b: p,
      };
    case 1:
      return {
        r: q,
        g: v,
        b: p,
      };
    case 2:
      return {
        r: p,
        g: v,
        b: t,
      };
    case 3:
      return {
        r: p,
        g: q,
        b: v,
      };
    case 4:
      return {
        r: t,
        g: p,
        b: v,
      };
    case 5:
      return {
        r: v,
        g: p,
        b: q,
      };
    default:
      throw void 0;
  }
}
