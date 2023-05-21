import { IRGBColor } from '../../../../rgb/rgb-color.type';
import { IXYZColor } from '../../../xyz-color.type';
import { XYZ_TO_SRGB_D65_MATRIX } from './get_xyz_to_rgb_matrix';
import { IXYZToRGBMatrix } from './xyz-to-rgb-matrix.type';

export function xyz_to_rgb(
  {
    x,
    y,
    z,
  }: IXYZColor,
  matrix: IXYZToRGBMatrix = XYZ_TO_SRGB_D65_MATRIX,
): IRGBColor {
  return {
    r: matrix[0] * x + matrix[1] * y + matrix[2] * z, // TODO clamp ?
    g: matrix[3] * x + matrix[4] * y + matrix[5] * z,
    b: matrix[6] * x + matrix[7] * y + matrix[8] * z,
  };
}
