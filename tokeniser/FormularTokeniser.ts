import { REGEX } from "../constant";

/**
 * The FormularTokeniser class is responsible for tokenizing and formatting 
 * mathematical expressions for further evaluation. It handles the input 
 * string by formatting it, filtering tokens, and preparing them for processing.
 */
export class FormularTokeniser {
  /**
   * Formats the input string by replacing operators and trimming whitespace.
   * @param {string} input The input string to be formatted.
   * @returns {string} The formatted expression.
   */
  formatInput(input: string): string {
    const formatedExpression = input
      .replace(REGEX.formularOperatorG, " $1 ")
      .replace(/\s+/g, " ")
      .trim();
    return formatedExpression;
  }

  /**
   * Filters the tokens to handle numbers and operators appropriately.
   * This method processes the tokens to ensure that numbers and operators
   * are in the correct format for evaluation.
   * @param {string[]} tokens The array of tokens to be filtered.
   * @returns {(string | number)[]} The filtered tokens as an array of strings and numbers.
   */
  filterTokens(tokens: string[]): (string | number)[] {
    const filteredTokens: (string | number)[] = [];
    let expectedClosedParenthesix = false;
    tokens.forEach((token: string) => {
      const regex = /^\d+(\.\d+)?$/;
      const negativeNumberRegex = /-\d+/;
      const lastFilteredToken = filteredTokens[filteredTokens.length - 1];
      if (regex.test(token)) {
        const firstPop = filteredTokens.pop();
        const secondPop = filteredTokens.pop();
        if (firstPop && secondPop) {
          if (["+", "-"].includes(firstPop as string) && secondPop === "(") {
            filteredTokens.push(Number(firstPop + token));
            expectedClosedParenthesix = true;
          } else {
            filteredTokens.push(
              secondPop as string,
              firstPop as string,
              Number(token)
            );
          }
        } else {
          if (!secondPop) {
            if (firstPop) {
              filteredTokens.push(firstPop as string, Number(token));
            } else {
              filteredTokens.push(Number(token));
            }
          } else {
            filteredTokens.push(Number(token));
          }
        }
      } else if (
        negativeNumberRegex.test(lastFilteredToken as string) &&
        token === ")" &&
        expectedClosedParenthesix
      ) {
        expectedClosedParenthesix = false;
      } else {
        filteredTokens.push(token);
      }
    });
    return filteredTokens;
  }

  /**
   * Executes the tokenization process for the given input string.
   * This method formats the input, splits it into tokens,
   * and filters the tokens to produce a final result.
   * @param {string} input The input string to be tokenized.
   * @returns {any[]} The array of filtered tokens resulting from the tokenization process.
   */
  execute(input: string): any[] {
    const formatedInput = this.formatInput(input);
    const tokens = formatedInput.split(" ");
    const filteredTokens = this.filterTokens(tokens);
    return filteredTokens;
  }
}
