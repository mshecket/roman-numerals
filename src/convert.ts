function convert(input: number): string;
function convert(input: string): number;

function convert(input: any): any {
  if (typeof input == "string") {
    if ((<string>input).length == 0) {
      return 0;
    }
    if (/^I+$/.test(<string>input)) {
      return (<string>input).length;
    } else if (<string>input == "IV") {
      return 4;
    } else if (<string>input.slice(0, 1) == "V") {
      return <number>5 + <number>convert(<string>input.slice(1));
    }
  } else if (typeof input == "number") {
    if (<number>input < 4) return "I".repeat(<number>input);
    else {
      return "II";
    }
  } else {
    return "error";
  }
}

export default convert;
