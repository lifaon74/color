import { math_clamp } from '@lifaon/math';
import { IRGBColor } from '../../rgb/object/rgb/rgb-color.type';
import { ICCT } from '../cct.type';

// https://tannerhelland.com/2012/09/18/convert-temperature-rgb-algorithm-code.html

export function cct_to_rgb(
  cct: ICCT,
): IRGBColor {
  cct /= 100;

  return {
    r: (
      (cct <= 66)
        ? 1
        : math_clamp((329.698727446 / 255) * ((cct - 60) ** -0.1332047592), 0, 1)
    ),
    g: (
      (cct <= 66)
        ? math_clamp(((99.4708025861 / 255) * Math.log(cct)) - (161.1195681661 / 255), 0, 1)
        : math_clamp((288.1221695283 / 255) * ((cct - 60) ** -0.0755148492), 0, 1)
    ),
    b: (
      (cct >= 66)
        ? 1
        : (
          (cct <= 19)
            ? 0
            : math_clamp((138.5177312231 / 255) * Math.log(cct - 10) - (305.0447927307 / 255), 0, 1)
        )
    ),
  };
}
