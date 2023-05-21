import { IRGBWorkingSpace } from '../../../../rgb/rgb-working-space.type';
import { IReferenceWhitePoint } from '../../reference-white-point.type';
import { IXYZToRGBMatrix } from './xyz-to-rgb-matrix.type';

export const XYZ_TO_SRGB_D50_MATRIX: IXYZToRGBMatrix = [
  3.1338561, -1.6168667, -0.4906146,
  -0.9787684, 1.9161415, 0.0334540,
  0.0719453, -0.2289914, 1.4052427,
];
export const XYZ_TO_SRGB_D65_MATRIX: IXYZToRGBMatrix = [
  3.2404542, -1.5371385, -0.4985314,
  -0.9692660, 1.8760108, 0.0415560,
  0.0556434, -0.2040259, 1.0572252,
];

export const XYZ_TO_ADOBE_RGB_D50_MATRIX: IXYZToRGBMatrix = [
  1.9624274, -0.6105343, -0.3413404,
  -0.9787684, 1.9161415, 0.0334540,
  0.0286869, -0.1406752, 1.3487655,
];

export const XYZ_TO_ADOBE_RGB_D65_MATRIX: IXYZToRGBMatrix = [
  2.0413690, -0.5649464, -0.3446944,
  -0.9692660, 1.8760108, 0.0415560,
  0.0134474, -0.1183897, 1.0154096,
];

export function get_xyz_to_rgb_matrix(
  rgb_working_space: IRGBWorkingSpace,
  white_point: IReferenceWhitePoint,
): IXYZToRGBMatrix {
  switch (rgb_working_space) {
    case 'sRGB': {
      switch (white_point) {
        case 'd50':
          return XYZ_TO_SRGB_D50_MATRIX;
        case 'd65':
          return XYZ_TO_SRGB_D65_MATRIX;
      }
      break;
    }
    case 'Adobe RGB': {
      switch (white_point) {
        case 'd50':
          return XYZ_TO_ADOBE_RGB_D65_MATRIX;
        case 'd65':
          return XYZ_TO_ADOBE_RGB_D50_MATRIX;
      }
      break;
    }
    default:
      throw new Error(`Invalid working space.`);
  }
  throw new Error(`Invalid combination of working space and white point.`);
}
