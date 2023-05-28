import { IReferenceWhitePoint } from '../../reference-white-point.type';
import { IRGBColorSpace } from '../../../../rgb/object/rgb-color-space/rgb-color-space.type';
import { IRGBToXYZMatrix } from './rgb-to-xyz-matrix.type';

// http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html

export const SRGB_D50_TO_XYZ_MATRIX: IRGBToXYZMatrix = [
  0.4360747, 0.3850649, 0.1430804,
  0.2225045, 0.7168786, 0.0606169,
  0.0139322, 0.0971045, 0.7141733,
];

export const SRGB_D65_TO_XYZ_MATRIX: IRGBToXYZMatrix = [
  0.4124564, 0.3575761, 0.1804375,
  0.2126729, 0.7151522, 0.0721750,
  0.0193339, 0.1191920, 0.9503041,
];

export const ADOBE_RGB_D50_TO_XYZ_MATRIX: IRGBToXYZMatrix = [
  0.6097559, 0.2052401, 0.1492240,
  0.3111242, 0.6256560, 0.0632197,
  0.0194811, 0.0608902, 0.7448387,
];

export const ADOBE_RGB_D65_TO_XYZ_MATRIX: IRGBToXYZMatrix = [
  0.5767309, 0.1855540, 0.1881852,
  0.2973769, 0.6273491, 0.0752741,
  0.0270343, 0.0706872, 0.9911085,
];

export function get_rgb_to_xyz_matrix(
  rgb_color_space: IRGBColorSpace,
  white_point: IReferenceWhitePoint,
): IRGBToXYZMatrix {
  switch (rgb_color_space) {
    case 'sRGB': {
      switch (white_point) {
        case 'd50':
          return SRGB_D50_TO_XYZ_MATRIX;
        case 'd65':
          return SRGB_D65_TO_XYZ_MATRIX;
      }
      break;
    }
    case 'Adobe RGB': {
      switch (white_point) {
        case 'd50':
          return ADOBE_RGB_D50_TO_XYZ_MATRIX;
        case 'd65':
          return ADOBE_RGB_D65_TO_XYZ_MATRIX;
      }
      break;
    }
    default:
      throw new Error(`Invalid working space.`);
  }
  throw new Error(`Invalid combination of working space and white point.`);
}

/* RGB => XYZ */

