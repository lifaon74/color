import { rgba_to_rgba_number } from './rgba_to_rgba_number';

describe('rgba_to_rgba_number', () => {
  test('0xff0000ff', () => {
    expect(rgba_to_rgba_number({ r: 1, g: 0, b: 0, a: 1 })).toBe(0xff0000ff);
  });

  test('0x00ff0000', () => {
    expect(rgba_to_rgba_number({ r: 0, g: 1, b: 0, a: 0 })).toBe(0x00ff0000);
  });
});
