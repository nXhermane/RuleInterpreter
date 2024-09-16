import { REGEX } from "../constant";

/**
 * Represents the supported operators in the expression.
 */
type Operator = "+" | "-" | "/" | "*" | ">" | "||" | "<" | "&&" | ">=" | "<=" | "==" | "!=";

/**
 * Defines the structure of a Node in the Abstract Syntax Tree (AST).
 */
export interface Node {
   operator?: Operator; // The operator associated with the node.
   left?: Node; // The left child node.
   right?: Node; // The right child node.
   condition?: Node; // The condition for conditional nodes.
   isTrue?: Node; // The node representing the true branch of a conditional.
   isFalse?: Node; // The node representing the false branch of a conditional.
   value?: number | string; // The value of the node, can be a number or a string.
   fieldName?: string; // The name of the field for field nodes.

   /**
    * Checks if the node is conditional.
    * @returns {boolean} True if the node is conditional; otherwise, false.
    */
   isConditional(): boolean;

   /**
    * Checks if the node represents a value.
    * @returns {boolean} True if the node is a value; otherwise, false.
    */
   isValue(): boolean;

   /**
    * Checks if the node is a comparison operator.
    * @returns {boolean} True if the node is a comparison; otherwise, false.
    */
   isComparaison(): boolean;

   /**
    * Checks if the node is a field.
    * @returns {boolean} True if the node is a field; otherwise, false.
    */
   isField(): boolean;

   /**
    * Checks if the node is a generic node.
    * @returns {boolean} True if the node is a node; otherwise, false.
    */
   isNode(): boolean;
}

/**
 * Represents a node in the Abstract Syntax Tree (AST).
 */
export class AstNode implements Node {
   operator?: Operator; // The operator associated with this node.
   left?: Node; // The left child node.
   right?: Node; // The right child node.
   condition?: Node; // The condition for conditional nodes.
   isTrue?: Node; // The node representing the true branch of a conditional.
   isFalse?: Node; // The node representing the false branch of a conditional.
   value?: number | string; // The value of the node, can be a number or a string.
   fieldName?: string; // The name of the field for field nodes.

   /**
    * Determines if this node is conditional.
    * @returns {boolean} True if the node is conditional; otherwise, false.
    */
   isConditional() {
      return !!this.condition && !!this.isFalse && !!this.isTrue;
   }

   /**
    * Determines if this node represents a value.
    * @returns {boolean} True if the node is a value; otherwise, false.
    */
   isValue(): boolean {
      return !!this.value;
   }

   /**
    * Determines if this node is a comparison operator.
    * @returns {boolean} True if the node is a comparison; otherwise, false.
    */
   isComparaison(): boolean {
      return !!this.isComparaisonOperator();
   }

   /**
    * Determines if this node is a field.
    * @returns {boolean} True if the node is a field; otherwise, false.
    */
   isField(): boolean {
      return !!this.fieldName;
   }

   /**
    * Determines if this node is a generic node.
    * @returns {boolean} True if the node is a node; otherwise, false.
    */
   isNode() {
      return !this.isValue() && !this.isField() && !this.isComparaison() && !this.isConditional();
   }

   /**
    * Checks if the operator is a comparison operator.
    * @returns {boolean} True if the operator is a comparison operator; otherwise, false.
    */
   private isComparaisonOperator() {
      if ([">", "||", "<", "&&", ">=", "<=", "==", "!="].includes(this.operator as string)) return true;
      return false;
   }
}

/**
 * Parses formulas and generates an Abstract Syntax Tree (AST).
 */
export class FormularParser {
   /**
    * Checks if the provided tokens represent a valid formula.
    * @param tokens - An array of tokens representing the formula.
    * @returns {boolean} True if the tokens form a valid formula; otherwise, false.
    */
   private isFormular(tokens: (string | number)[]) {
      let notOperatorLastIndex = 1;
      let operatorLastIndex = 1;
      const operatorRegex = REGEX.formularOperator;
      for (let index = 0; index < tokens.length; index++) {
         const token = tokens[index];
         const isOperator = operatorRegex.test(String(token));
         const lastIndex = index - 1;
         if (isOperator) {
            operatorLastIndex = index;
         } else {
            if (notOperatorLastIndex == lastIndex && operatorLastIndex != lastIndex) {
               return false;
            }
            notOperatorLastIndex = index;
         }
      }
      return true;
   }

   /**
    * Checks the syntax of the provided tokens.
    * @param tokens - An array of tokens to check.
    */
   private checkSynthax(tokens: (string | number)[]) {
      this.checkParenthesixSynthax(tokens);
      this.checkOperatorSynthax(tokens);
      this.checkTernaryConditionSynthax(tokens);
   }

   /**
    * Checks the parenthesis syntax of the provided tokens.
    * @param tokens - An array of tokens to check.
    * @throws {Error} Throws an error if there is a parenthesis mismatch.
    */
   private checkParenthesixSynthax(tokens: (string | number)[]) {
      const stack: (string | number)[] = [];
      tokens.forEach((token: string | number) => {
         if (token === "(") stack.push("(");
         if (token === ")") {
            if (stack.length === 0) {
               throw new Error("Parenthesis mismatch");
            }
            stack.pop();
         }
      });
      if (stack.length !== 0) {
         throw new Error("Incorrect parenthesis disposition.");
      }
   }

   /**
    * Checks the operator syntax of the provided tokens.
    * @param tokens - An array of tokens to check.
    * @throws {Error} Throws an error if there is an operator syntax error.
    */
   private checkOperatorSynthax(tokens: (string | number)[]) {
      const regex = /[+-\/*]{2,}/;
      const expression = tokens.join("");
      if (regex.test(expression)) {
         throw new Error("Incorrect Operator error");
      }
      const validOperationCheckerRegex = />=|<=|==|!=|&&|\|\||[+-\/*<>][\w\(]/;
      if (!validOperationCheckerRegex.test(expression)) {
         throw new Error("Incorrect Operator position for Operande");
      }
   }

   /**
    * Checks the ternary condition syntax of the provided tokens.
    * @param tokens - An array of tokens to check.
    * @throws {Error} Throws an error if there is a ternary syntax error.
    */
   private checkTernaryConditionSynthax(tokens: (string | number)[]) {
      let ternaryQuestionMarkCount = 0;
      let ternaryColonCount = 0;
      tokens.forEach((token: string | number) => {
         if (token === "?") ternaryQuestionMarkCount++;
         if (token === ":") ternaryColonCount++;
      });

      if (ternaryQuestionMarkCount !== ternaryColonCount) {
         throw new Error("Incorrect Ternary syntax: unmatched ? and :");
      }
      const ternaryRegex = /[?:]/;
      let expectingCondition = true;
      tokens.forEach((token: string | number) => {
         if (ternaryRegex.test(String(token))) {
            if (expectingCondition && token === ":") {
               throw new Error("Ternary syntax error: found ':' before '?'");
            }
            expectingCondition = !expectingCondition;
         }
      });
   }

   /**
    * Executes the parsing of the provided tokens and generates an AST.
    * @param tokens - An array of tokens to parse.
    * @returns {Node} The root node of the generated AST.
    * @throws {Error} Throws an error if the tokens are not a valid formula.
    */
   execute(tokens: (string | number)[]): Node {
      if (this.isFormular(tokens)) {
         this.checkSynthax(tokens);
         return this.parser(tokens);
      } else {
         throw new Error("is not formular");
      }
   }

   /**
    * Parses the provided tokens and generates an AST.
    * @param tokens - An array of tokens to parse.
    * @returns {AstNode} The root node of the generated AST.
    */
   private parser(tokens: (string | number)[]): AstNode {
      const postFixExpression = this.infixToPostFix(tokens);
      const result = this.generateAST(postFixExpression);
      return result;
   }

   /**
    * Generates an Abstract Syntax Tree (AST) from the given tokens.
    * @param tokens - An array of tokens to generate the AST from.
    * @returns {AstNode} The root node of the generated AST.
    */

   private generateAST(tokens: (string | number)[]): AstNode {
      const stack: AstNode[] = [];
      let counter = 0;
      return this._generateAST(tokens, counter, stack);
   }

   /**
    * Recursively generates the AST based on the provided tokens and the current index.
    * @param tokens - An array of tokens to generate the AST from.
    * @param index - The current index in the tokens array.
    * @param stack - The stack of nodes being built for the AST.
    * @returns {AstNode} The root node of the generated AST.
    */
   private _generateAST(tokens: (string | number)[], index: number, stack: AstNode[] = []): AstNode {
      const token = tokens[index];
      if (!token) return stack[0];
      if (this.isOperatorFirstAndParenthesix(token)) {
         const node = new AstNode();
         node.operator = token as Operator;
         if (this.isArithmeticOperator(token)) {
            node.right = stack.pop()!;
            node.left = stack.pop()!;
         } else if (this.isComparaisonOperator(token)) {
            node.right = stack.pop()!;
            node.left = stack.pop()!;
         } else if (this.isTernaryOperator(token)) {
            node.isFalse = stack.pop()!;
            node.isTrue = stack.pop()!;
            node.condition = stack.pop()!;
         }
         stack.push(node);
      } else {
         const node = new AstNode();
         if (this.isValue(token)) {
            node.value = token as number;
         } else {
            node.fieldName = token as string;
         }
         stack.push(node);
      }
      return this._generateAST(tokens, index + 1, stack);
   }

   /**
    * Converts infix tokens to postfix notation.
    * @param tokens - An array of tokens in infix notation.
    * @returns {(string | number)[]} An array of tokens in postfix notation.
    */
   private infixToPostFix(tokens: (string | number)[]): (string | number)[] {
      const output: (string | number)[] = [];
      const operators: string[] = [];
      tokens.forEach((token: string | number) => {
         if (!this.isOperatorFirstAndParenthesix(token)) {
            output.push(token);
         } else {
            const operatorAndParentesix = String(token);
            const priority = this.priority(operatorAndParentesix);
            if (operatorAndParentesix === "(") {
               operators.push(operatorAndParentesix);
            } else if (operatorAndParentesix === ")") {
               while (operators.length > 0 && operators[operators.length - 1] !== "(") {
                  const operator = operators.pop()!;
                  if (!(operator.trim() === "(")) {
                     output.push(operator);
                  }
               }
               operators.pop();
            } else if (operatorAndParentesix === ":") {
               while (operators.length > 0 && operators[operators.length - 1] !== "?") {
                  output.push(operators.pop()!);
               }
            } else if (["+", "-", "/", "*", ">", "||", "<", "&&", ">=", "<=", "==", "!=", "?"].includes(operatorAndParentesix)) {
               while (operators.length > 0 && this.priority(operators[operators.length - 1]) >= priority) {
                  output.push(operators.pop()!);
               }
               operators.push(operatorAndParentesix);
            } else {
            }
         }
      });
      while (operators.length > 0) {
         output.push(operators.pop()!);
      }
      return output;
   }
   /**
    * Determines the priority level of the given operator.
    *
    * Operators are assigned the following priority levels:
    * 1 - Addition and Subtraction
    * 2 - Multiplication and Division
    * 3 - Comparison and Logical operators
    *
    * @param operator - The operator to evaluate.
    * @returns {number} The priority level of the operator, where higher numbers indicate higher priority.
    */
   private priority(operator: string): number {
      if (["+", "-"].includes(operator)) return 1;
      if (["/", "*"].includes(operator)) return 2;
      if ([">", "||", "<", "&&", ">=", "<=", "==", "!=", "?"].includes(operator)) return 3;
      return 0;
   }
   /**
    * Checks if the provided token is an operator or parenthesis.
    *
    * This method considers the following tokens as valid operators:
    * Arithmetic operators: +, -, *, /
    * Comparison operators: >, <, >=, <=, ==, !=
    * Logical operators: ||, &&
    * Ternary operator: ?
    * Parentheses: (, )
    *
    * @param token - The token to evaluate.
    * @returns  {boolean} -True if the token is an operator or parenthesis; otherwise, false.
    */
   private isOperatorFirstAndParenthesix(token: string | number): boolean {
      if (["+", "-", "/", "*", ">", "||", "<", "&&", ">=", "<=", "==", "!=", "?", ":", "(", ")"].includes(String(token).trim())) return true;
      return false;
   }
   /**
    * Checks if the provided token is an arithmetic operator.
    *
    * The valid arithmetic operators are: +, -, *, /
    *
    * @param token - The token to evaluate.
    * @returns {boolean} -True if the token is an arithmetic operator; otherwise, false.
    */
   private isArithmeticOperator(token: string | number): boolean {
      if (["+", "-", "/", "*"].includes(token as string)) return true;
      return false;
   }
   /**
    * Checks if the provided token is a comparison operator.
    *
    * The valid comparison operators are: >, <, >=, <=, ==, !=, ||, &&
    *
    * @param token - The token to evaluate.
    * @returns {boolean} -  True if the token is a comparison operator; otherwise, false.
    */
   private isComparaisonOperator(token: string | number) {
      if ([">", "||", "<", "&&", ">=", "<=", "==", "!="].includes(token as string)) return true;
      return false;
   }
   /**
    * Checks if the provided token is a ternary operator.
    *
    * The valid ternary operator is: ?
    *
    * @param token - The token to evaluate.
    * @returns {boolean} - True if the token is a ternary operator; otherwise, false.
    */

   private isTernaryOperator(token: string | number): boolean {
      if (["?"].includes(token as string)) return true;
      return false;
   }
   /**
    * Checks if the provided token is a valid value.
    *
    * A valid value can be a number or a string matching the regex pattern for quoted words.
    *
    * @param token - The token to evaluate.
    * @returns {boolean} - True if the token is a valid value; otherwise, false.
    */
   private isValue(token: string | number): boolean {
      const valueRegex = /"[\w]+"/;
      return typeof token === "number" || valueRegex.test(token) ? true : false;
   }
}
