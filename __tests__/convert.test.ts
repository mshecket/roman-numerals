import convert from "../src/convert"

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
})

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
})