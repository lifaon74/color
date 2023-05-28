import { css_rgb_hex_color_to_rgba_number } from './css_rgb_hex_color_to_rgba_number';

describe('css_rgb_hex_color_to_rgba_number', () => {
  /* VALID */

  test('#fff', () => {
    expect(css_rgb_hex_color_to_rgba_number('#fff')).toEqual(0xffffffff);
  });

  test('#ffff', () => {
    expect(css_rgb_hex_color_to_rgba_number('#ffff')).toEqual(0xffffffff);
  });

  test('#ffffff', () => {
    expect(css_rgb_hex_color_to_rgba_number('#ffffff')).toEqual(0xffffffff);
  });

  test('#ffffffff', () => {
    expect(css_rgb_hex_color_to_rgba_number('#ffffffff')).toEqual(0xffffffff);
  });

  test('#FFCc99', () => {
    expect(css_rgb_hex_color_to_rgba_number('#FFCc99')).toEqual(0xffcc99ff);
  });

  test('#369', () => {
    expect(css_rgb_hex_color_to_rgba_number('#369')).toEqual(0x336699ff);
  });

  /* INVALID */

  test('#', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#')).toThrow();
  });

  test('#f', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#f')).toThrow();
  });

  test('#ff', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#ff')).toThrow();
  });

  test('#ffg', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#ffg')).toThrow();
  });

  test('#fffg', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#fffg')).toThrow();
  });

  test('#fffff', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#fffff')).toThrow();
  });

  test('#fffffg', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#fffffg')).toThrow();
  });

  test('#fffffff', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#fffffff')).toThrow();
  });

  test('#fffffffg', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#fffffffg')).toThrow();
  });

  test('#fffffffff', () => {
    expect(() => css_rgb_hex_color_to_rgba_number('#fffffffff')).toThrow();
  });
});

