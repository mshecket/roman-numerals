function convert(input: number): string;
function convert(input: string): number;

function convert(input: any): any {
  if (typeof input == "string") {
    if ((<string>input).length == 0) {
      return 0;
    } else if (/^I+$/.test(<string>input)) {
      return (<string>input).length;
    } else if (<string>input == "IV") {
      return 4;
    } else if (<string>input.slice(0, 1) == "V") {
      return 5 + <number>convert(<string>input.slice(1));
    } else if (<string>input == "IX") {
      return 9;
    } else if (<string>input.slice(0, 2) == "XL") {
      return 40 + <number>convert(<string>input.slice(2));
    } else if (<string>input.slice(0, 2) == "XC") {
      return 90 + <number>convert(<string>input.slice(2));
    } else if (<string>input.slice(0, 1) == "X") {
      return 10 + <number>convert(<string>input.slice(1));
    } else if (<string>input.slice(0, 1) == "L") {
      return 50 + <number>convert(<string>input.slice(1));
    } else if (<string>input.slice(0, 1) == "C") {
      return 100 + <number>convert(<string>input.slice(1));
    } else {
      return "error";
    }
  } else if (typeof input == "number") {
    if (<number>input == 0) {
      return "";
    } else if (<number>input < 4) {
      return "I".repeat(<number>input);
    } else if (<number>input == 4) {
      return "IV";
    } else if (<number>input < 9) {
      return "V" + <string>convert(<number>input - 5);
    } else if (<number>input == 9) {
      return "IX";
    } else if (<number>input < 40) {
      return "X" + <string>convert(<number>input - 10);
    } else if (<number>input < 50) {
      return "XL" + <string>convert(<number>input - 40);
    } else if (<number>input < 90) {
      return "L" + <string>convert(<number>input - 50);
    } else if (<number>input < 100) {
      return "XC" + <string>convert(<number>input - 90);
    } else if (<number>input < 400) {
      return "C" + <string>convert(<number>input - 100);
    } else {
      return "error";
    }
  } else {
    return "error";
  }
}

export default convert;
