import { IXYZColor } from '../../xyz-color.type';

/*
doc:
https://dsp.stackexchange.com/questions/8949/how-to-calculate-the-color-temperature-tint-of-the-colors-in-an-image
https://ams.com/documents/20143/80162/TCS34xx_AN000517_1-00.pdf

McCamy's approximation paper: https://www.usna.edu/Users/oceano/raylee/papers/RLee_AO_CCTpaper.pdf

others:
https://www.waveformlighting.com/tech/calculate-color-temperature-cct-from-cie-1931-xy-coordinates
 */


export function xyz_to_cct(
  {
    x,
    y,
    z,
  }: IXYZColor,
): number {
  const _x: number = x / (x + y + z);
  const _y: number = y / (x + y + z);

  // McCamy's approximation
  const n: number = (_x - 0.3320) / (0.1858 - _y);
  return 437 * (n ** 3) + 3601 * (n ** 2) + 6861 * n + 5517;
}
