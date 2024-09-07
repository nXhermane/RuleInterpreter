import { REGEX } from "../constant";
export class Tokeniser {
  formatInput(input: string): string {
    const formatedExpression = input
      .replace(REGEX.formularOperatorG, " $1 ")
      .replace(/\s+/g, " ")
      .trim();
    return formatedExpression;
  }
  execute(input: string): string[] {
    const formatedInput = this.formatInput(input);
    const tokens = formatedInput.split(" ");
    return tokens;
  }
}
