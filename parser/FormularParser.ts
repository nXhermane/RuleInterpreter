import { REGEX } from "../constant";

type Operator =
  | "+"
  | "-"
  | "/"
  | "*"
  | ">"
  | "||"
  | "<"
  | "&&"
  | ">="
  | "<="
  | "=="
  | "!=";
export interface Node {
  operator?: Operator;
  left?: Node;
  right?: Node;
  condition?: Node;
  isTrue?: Node;
  isFalse?: Node;
  value?: number | string;
  fieldName?: string;
  isConditional(): boolean;

  isValue(): boolean;
  isComparaison(): boolean;
  isField(): boolean;
  isNode(): boolean;
}
export class AstNode implements Node {
  operator?: Operator;
  left?: Node;
  right?: Node;
  condition?: Node;
  isTrue?: Node;
  isFalse?: Node;
  value?: number | string;
  fieldName?: string;
  isConditional() {
    return !!this.condition && !!this.isFalse && !!this.isTrue;
  }
  isValue(): boolean {
    return !!this.value;
  }
  isComparaison(): boolean {
    return !!this.isComparaisonOperator();
  }
  isField(): boolean {
    return !!this.fieldName;
  }
  isNode() {
    return (
      !this.isValue() &&
      !this.isField() &&
      !this.isComparaison() &&
      !this.isConditional()
    );
  }
  private isComparaisonOperator() {
    if (
      [">", "||", "<", "&&", ">=", "<=", "==", "!="].includes(
        this.operator as string
      )
    )
      return true;
    return false;
  }
}
export class FormularParser {
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
        if (
          notOperatorLastIndex == lastIndex &&
          operatorLastIndex != lastIndex
        ) {
          return false;
        }
        notOperatorLastIndex = index;
      }
    }
    return true;
  }
  private checkSynthax(tokens: (string | number)[]) {
    this.checkParenthesixSynthax(tokens);
    this.checkOperatorSynthax(tokens);
    this.checkTernaryConditionSynthax(tokens);
  }
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
  execute(tokens: (string | number)[]): Node {
    if (this.isFormular(tokens)) {
      this.checkSynthax(tokens);
      return this.parser(tokens);
    } else {
      throw new Error("is not formular");
    }
  }

  private parser(tokens: (string | number)[]): AstNode {
    const postFixExpression = this.infixToPostFix(tokens);
    console.log(postFixExpression);
    return this.generateAST(postFixExpression);
  }
  private generateAST(tokens: (string | number)[]): AstNode {
    const stack: (string | number)[] = [];
    const tempAst: AstNode[] = [];
    const condition: AstNode[] = [];
    tokens.forEach((token: string | number) => {
      if (!this.isOperatorFirstAndParenthesix(token)) {
        stack.push(token);
      } else {
        if (this.isArithmeticOperator(token)) {
          const node = new AstNode();
          node.operator = token as Operator;
          if (stack.length >= 2) {
            const firstNumberOrVariable = stack.pop()!;
            const lastNumberOrVariable = stack.pop()!;
            node.left = new AstNode();
            node.right = new AstNode();
            if (this.isValue(lastNumberOrVariable))
              node.left.value = lastNumberOrVariable as string | number;
            else node.left.fieldName = lastNumberOrVariable as string;
            if (this.isValue(firstNumberOrVariable))
              node.right.value = firstNumberOrVariable as string | number;
            else node.right.fieldName = firstNumberOrVariable as string;
          } else {
            const rightNode = tempAst.pop();
            const leftNode = tempAst.pop();
            node.left = leftNode;
            node.right = rightNode;
          }
          tempAst.push(node);
        } else if (this.isComparaisonOperator(token)) {
          const node = new AstNode();
          node.operator = token as Operator;

          if (stack.length >= 2) {
            const firstNumberOrVariable = stack.pop()!;
            const lastNumberOrVariable = stack.pop()!;
            node.left = new AstNode();
            node.right = new AstNode();
            if (this.isValue(lastNumberOrVariable))
              (node.left as AstNode).value = lastNumberOrVariable as
                | string
                | number;
            else
              (node.left as AstNode).fieldName = lastNumberOrVariable as string;
            if (this.isValue(firstNumberOrVariable))
              (node.right as AstNode).value = firstNumberOrVariable!;
            else
              (node.right as AstNode).fieldName =
                firstNumberOrVariable! as string;
          } else {
            const rightNode = tempAst.pop();
            const leftNode = tempAst.pop();
            node.left = leftNode!;
            node.right = rightNode!;
          }
          condition.push(node);
        } else if (this.isTernaryOperator(token)) {
          const node = new AstNode();
          if (condition.length > 0) {
            node.condition = condition.pop();
            if (stack.length >= 2) {
              const firstNumberOrVariable = stack.pop()!;
              const lastNumberOrVariable = stack.pop()!;
              node.isFalse = new AstNode();
              node.isTrue = new AstNode();
              if (this.isValue(lastNumberOrVariable))
                (node.isTrue as AstNode).value = lastNumberOrVariable;
              else
                (node.isTrue as AstNode).fieldName =
                  lastNumberOrVariable as string;
              if (this.isValue(firstNumberOrVariable))
                (node.isFalse as AstNode).value = firstNumberOrVariable;
              else
                (node.isFalse as AstNode).fieldName =
                  firstNumberOrVariable as string;
            } else {
              const rightNode = tempAst.pop()!;
              const leftNode = tempAst.pop()!;
              node.isTrue = leftNode;
              node.isFalse = rightNode;
            }
            tempAst.push(node);
          } else {
            return;
          }
        }
      }
    });
    if (stack.length === 1) {
      const lastValue = stack.pop()!;
      const leftNewNode = new AstNode();
      this.isValue(lastValue as string | number)
        ? (leftNewNode.value = lastValue)
        : (leftNewNode.fieldName = lastValue as string);
      (tempAst[tempAst.length - 1] as AstNode).left = leftNewNode as AstNode;
    }

    return tempAst[0];
  }
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
          while (
            operators.length > 0 &&
            operators[operators.length - 1] !== "("
          ) {
            const operator = operators.pop()!;
            if (!(operator.trim() === "(")) {
              output.push(operator);
            }
          }
          operators.pop();
        } else if (operatorAndParentesix === ":") {
          while (
            operators.length > 0 &&
            operators[operators.length - 1] !== "?"
          ) {
            output.push(operators.pop()!);
          }
        } else if (
          [
            "+",
            "-",
            "/",
            "*",
            ">",
            "||",
            "<",
            "&&",
            ">=",
            "<=",
            "==",
            "!=",
            "?",
          ].includes(operatorAndParentesix)
        ) {
          while (
            operators.length > 0 &&
            this.priority(operators[operators.length - 1]) >= priority
          ) {
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
  private priority(operator: string): number {
    if (["+", "-"].includes(operator)) return 1;
    if (["/", "*"].includes(operator)) return 2;
    if ([">", "||", "<", "&&", ">=", "<=", "==", "!=", "?"].includes(operator))
      return 3;
    return 0;
  }

  private isOperatorFirstAndParenthesix(token: string | number): boolean {
    if (
      [
        "+",
        "-",
        "/",
        "*",
        ">",
        "||",
        "<",
        "&&",
        ">=",
        "<=",
        "==",
        "!=",
        "?",
        ":",
        "(",
        ")",
      ].includes(String(token).trim())
    )
      return true;
    return false;
  }
  private isArithmeticOperator(token: string | number): boolean {
    if (["+", "-", "/", "*"].includes(token as string)) return true;
    return false;
  }
  private isComparaisonOperator(token: string | number) {
    if (
      [">", "||", "<", "&&", ">=", "<=", "==", "!="].includes(token as string)
    )
      return true;
    return false;
  }
  private isTernaryOperator(token: string | number): boolean {
    if (["?"].includes(token as string)) return true;
    return false;
  }
  private isValue(token: string | number): boolean {
    const valueRegex = /"[\w]+"/;
    return typeof token === "number" || valueRegex.test(token) ? true : false;
  }
}
