import { REGEX } from "../constant";
export class Tokeniser {
   formatInput(input: string): string {
      const formatedExpression = input.replace(REGEX.formularOperatorG, " $1 ").replace(/\s+/g, " ").trim();
      return formatedExpression;
   }
   filterTokens(tokens: string[]): (string|number)[] {
      const filteredTokens: (string|number)[] = [];
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
                  filteredTokens.push(secondPop as string, firstPop as string, Number(token));
               }
            } else {
               if (!secondPop) {
                  filteredTokens.push(firstPop as string, Number(token));
               } else {
                  filteredTokens.push(Number(token));
               }
            }
         } else if (negativeNumberRegex.test(lastFilteredToken as string) && token === ")" && expectedClosedParenthesix) {
            expectedClosedParenthesix = false;
         } else {
            filteredTokens.push(token);
         }
      });
      return filteredTokens;
   }
   execute(input: string): any[] {
      const formatedInput = this.formatInput(input);
      const tokens = formatedInput.split(" ");
      const filteredTokens = this.filterTokens(tokens);
      return filteredTokens
   }
}
