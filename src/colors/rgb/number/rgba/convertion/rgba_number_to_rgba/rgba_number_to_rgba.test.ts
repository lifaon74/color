import { rgba_number_to_rgba } from './rgba_number_to_rgba';

describe('rgba_number_to_rgba', () => {
  test('0xff0000ff', () => {
    expect(rgba_number_to_rgba(0xff0000ff)).toEqual({ r: 1, g: 0, b: 0, a: 1 });
  });

  test('0x00ff0000', () => {
    expect(rgba_number_to_rgba(0x00ff0000)).toEqual({ r: 0, g: 1, b: 0, a: 0 });
  });
});
