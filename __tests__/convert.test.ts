import convert from "../src/convert";

describe("Converting Roman numerals to Arabic numerals", () => {
  test("I is converted to 1", () => {
    expect(convert("I")).toBe(1);
  });
  test("II is converted to 2", () => {
    expect(convert("II")).toBe(2);
  });
  test("IV is converted to 4", () => {
    expect(convert("IV")).toBe(4);
  });
  test("V is converted to 5", () => {
    expect(convert("V")).toBe(5);
  });
  test("VIII is converted to 8", () => {
    expect(convert("VIII")).toBe(8);
  });
  test("IX is converted to 9", () => {
    expect(convert("IX")).toBe(9);
  });
  test("X is converted to 10", () => {
    expect(convert("X")).toBe(10);
  });
  test("XIII is converted to 13", () => {
    expect(convert("XIII")).toBe(13);
  });
  test("IIIX returns an error", () => {
    expect(convert("IIIX")).toBe("error");
  });
  test("XX is converted to 20", () => {
    expect(convert("XX")).toBe(20);
  });
  test("XXXIX is converted to 39", () => {
    expect(convert("XXXIX")).toBe(39);
  });
  test("XL is converted to 40", () => {
    expect(convert("XL")).toBe(40);
  });
  test("LV is converted to 55", () => {
    expect(convert("LV")).toBe(55);
  });
  test("LXXXVIII is converted to 88", () => {
    expect(convert("LXXXVIII")).toBe(88);
  });
  test("LXXXIX is converted to 89", () => {
    expect(convert("LXXXIX")).toBe(89);
  });
  test("XCII is converted to 92", () => {
    expect(convert("XCII")).toBe(92);
  });
  test("XCIX is converted to 99", () => {
    expect(convert("XCIX")).toBe(99);
  });
  test("C is converted to 100", () => {
    expect(convert("C")).toBe(100);
  });
  test("CCCLXXXVIII is converted to 388", () => {
    expect(convert("CCCLXXXVIII")).toBe(388);
  });
});

describe("Converting Arabic numerals to Roman numerals", () => {
  test("1 is converted to I", () => {
    expect(convert(1)).toBe("I");
  });
  test("2 is converted to II", () => {
    expect(convert(2)).toBe("II");
  });
  test("3 is converted to III", () => {
    expect(convert(3)).toBe("III");
  });
  test("5 is converted to V", () => {
    expect(convert(5)).toBe("V");
  });
  test("8 is converted to VIII", () => {
    expect(convert(8)).toBe("VIII");
  });
  test("9 is converted to IX", () => {
    expect(convert(9)).toBe("IX");
  });
  test("10 is converted to X", () => {
    expect(convert(10)).toBe("X");
  });
  test("30 is converted to XXX", () => {
    expect(convert(30)).toBe("XXX");
  });
  test("39 is converted to XIX", () => {
    expect(convert(39)).toBe("XXXIX");
  });
  test("40 is converted to XL", () => {
    expect(convert(40)).toBe("XL");
  });
  test("45 is converted to XLV", () => {
    expect(convert(45)).toBe("XLV");
  });
  test("50 is converted to L", () => {
    expect(convert(50)).toBe("L");
  });
  test("94 is converted to XCIV", () => {
    expect(convert(94)).toBe("XCIV");
  });
  test("145 is converted to CXLV", () => {
    expect(convert(145)).toBe("CXLV");
  });
  test("398 is converted to CCCXCVIII", () => {
    expect(convert(398)).toBe("CCCXCVIII");
  });
});
