import { REGEX } from "../constant";

export class FormularParser {
  isFormular(tokens: string[]) {
    let notOperatorLastIndex = 0;
    let operatorLastIndex = 0;
    const operatorRegex = REGEX.formularOperator;
    for (let index = 0; index < tokens.length; index++) {
      const token = tokens[index];
      const isOperator = operatorRegex.test(token.trim());
      if (isOperator) {
        operatorLastIndex = index;
      } else {
        if (notOperatorLastIndex == index - 1) {
            console.log(tok)
          return false;
        }
        notOperatorLastIndex = index;
      }
    }
    return true;
  }
  execute(tokens: string[]) {
    console.log(this.isFormular(tokens));
  }
}
