import { IHSLColor } from '../../hsl/hsl-color.type';
import { IRGBColor } from '../rgb-color.type';

export function rgb_to_hsl(
  {
    r,
    g,
    b,
  }: IRGBColor,
): IHSLColor {
  const max: number = Math.max(r, g, b);
  const min: number = Math.min(r, g, b);
  const l: number = (max + min) / 2;

  if (max === min) {
    return {
      h: 0,
      s: 0,
      l,
    };
  } else {
    const d: number = max - min;
    const e: number = max + min;
    const s: number = (l > 0.5)
      ? d / (2 - e)
      : d / e;
    let h!: number;

    switch (max) {
      case r:
        h = ((g - b) / d) + ((g < b) ? 6 : 0);
        break;
      case g:
        h = ((b - r) / d) + 2;
        break;
      case b:
        h = ((r - g) / d) + 4;
        break;
    }

    h /= 6;

    return {
      h,
      s,
      l,
    };
  }
}
