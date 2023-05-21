
import { IRGBColor } from '../../../../rgb/rgb-color.type';
import { IXYZColor } from '../../../xyz-color.type';
import { SRGB_D65_TO_XYZ_MATRIX } from './get_rgb_to_xyz_matrix';
import { IRGBToXYZMatrix } from './rgb-to-xyz-matrix.type';

export function rgb_to_xyz(
  {
    r,
    g,
    b,
  }: IRGBColor,
  matrix: IRGBToXYZMatrix = SRGB_D65_TO_XYZ_MATRIX,
): IXYZColor {
  return {
    x: matrix[0] * r + matrix[1] * g + matrix[2] * b,
    y: matrix[3] * r + matrix[4] * g + matrix[5] * b,
    z: matrix[6] * r + matrix[7] * g + matrix[8] * b,
  };
}
