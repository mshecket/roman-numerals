function convert(input: number): string;
function convert(input: string): number;

function convert(input: any): any {
  if (typeof input == "string") {
    const str: string = input.toUpperCase();
    let output: number | string = "error";
    if (str.length == 0) return 0;
    else if (/^I+$/.test(str)) return str.length;
    else if (str == "IV") return 4;
    else if (str.slice(0, 1) == "V") output = 5 + convert(str.slice(1));
    else if (str == "IX") return 9;
    else if (str.slice(0, 2) == "XL") output = 40 + convert(str.slice(2));
    else if (str.slice(0, 2) == "XC") output = 90 + convert(str.slice(2));
    else if (str.slice(0, 1) == "X") output = 10 + convert(str.slice(1));
    else if (str.slice(0, 1) == "L") output = 50 + convert(str.slice(1));
    else if (str.slice(0, 2) == "CD") output = 400 + convert(str.slice(2));
    else if (str.slice(0, 1) == "D") output = 500 + convert(str.slice(1));
    else if (str.slice(0, 2) == "CM") output = 900 + convert(str.slice(2));
    else if (str.slice(0, 1) == "C") output = 100 + convert(str.slice(1));
    else if (str.slice(0, 1) == "M") output = 1000 + convert(str.slice(1));
    return typeof output == "string" ? "error" : output; // A final sanity check before returning a converted number
  } else if (
    typeof input == "number" &&
    Number.isInteger(input) &&
    input >= 0
  ) {
    const num: number = <number>input;
    if (num == 0) return "";
    else if (num < 4) return "I".repeat(num);
    else if (num == 4) return "IV";
    else if (num < 9) return "V" + convert(num - 5);
    else if (num == 9) return "IX";
    else if (num < 40) return "X" + convert(num - 10);
    else if (num < 50) return "XL" + convert(num - 40);
    else if (num < 90) return "L" + convert(num - 50);
    else if (num < 100) return "XC" + convert(num - 90);
    else if (num < 400) return "C" + convert(num - 100);
    else if (num < 500) return "CD" + convert(num - 400);
    else if (num < 900) return "D" + convert(num - 500);
    else if (num < 1000) return "CM" + convert(num - 900);
    else return "M" + convert(num - 1000);
  } else return "error";
}

export default convert;
