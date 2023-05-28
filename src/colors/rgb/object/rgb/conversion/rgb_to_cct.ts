import { ICCT } from '../../../../cct/cct.type';
import { xyz_to_cct } from '../../../../xyz/conversion/cct/xyz_to_cct';
import { rgb_to_xyz } from '../../../../xyz/conversion/rgb/rgb-to-xyz/rgb_to_xyz';
import { IRGBColor } from '../rgb-color.type';

/*
doc:
https://dsp.stackexchange.com/questions/8949/how-to-calculate-the-color-temperature-tint-of-the-colors-in-an-image
https://ams.com/documents/20143/80162/TCS34xx_AN000517_1-00.pdf

McCamy's approximation paper: https://www.usna.edu/Users/oceano/raylee/papers/RLee_AO_CCTpaper.pdf

others:
https://www.waveformlighting.com/tech/calculate-color-temperature-cct-from-cie-1931-xy-coordinates
 */

export function rgb_to_cct(
  color: IRGBColor,
): ICCT {
  return xyz_to_cct(rgb_to_xyz(color));
}
