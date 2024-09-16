import { AstNode, Node } from "./../parser/FormularParser";
import { Expression } from "./../expression/Expression";
import { ExpressionConstructor } from "./../expression/ExpressionConstructor";

type VariableContainer = { [key: string]: string | number };

/**
 * The FormularInterpreter class is responsible for interpreting an abstract syntax tree (AST) 
 * representing a mathematical or logical expression. It evaluates expressions based on provided 
 * variable data and constructs appropriate expression objects for processing.
 */
export class FormularInterpreter {
  /**
   * Executes the interpretation of the AST tree and returns the evaluated result.
   * @param {Node} astTree The abstract syntax tree to be interpreted.
   * @param {T} data The variable data to use for evaluation.
   * @returns {number | string} The result of the expression evaluation.
   */
  execute<T extends VariableContainer>(
    astTree: Node,
    data: T
  ): number | string {
    const result = this.interprete<T>(astTree, data).execute(data);
    return result;
  }

  /**
   * Interprets the AST tree recursively and constructs expression objects based on the node types.
   * @param {Node} astTree The abstract syntax tree to interpret.
   * @param {T} data The variable data to use for evaluation.
   * @returns {Expression<T, string | number>} The constructed expression object.
   */
  interprete<T extends VariableContainer>(
    astTree: Node,
    data: T
  ): Expression<T, string | number> {
    if (astTree.isNode()) {
      const operator = astTree.operator;
      const right = this.interprete<T>(astTree.right!, data);
      const left = this.interprete<T>(astTree.left!, data);
      switch (operator) {
        case "+":
          return ExpressionConstructor.addition<T>(
            left as Expression<T, number>,
            right as Expression<T, number>
          );
        case "-":
          return ExpressionConstructor.substration<T>(
            left as Expression<T, number>,
            right as Expression<T, number>
          );
        case "*":
          return ExpressionConstructor.multiplication<T>(
            left as Expression<T, number>,
            right as Expression<T, number>
          );
        case "/":
          return ExpressionConstructor.division<T>(
            left as Expression<T, number>,
            right as Expression<T, number>
          );
        default:
          throw new Error(`This operator ${operator} is not supported.`);
      }
    } else if (astTree.isValue()) {
      const value = astTree.value!;
      if (typeof value === "number") {
        return ExpressionConstructor.literalValue<T>(Number(astTree.value));
      } else {
        const regex = /"([\w]+)"/;
        const stringValue = value.match(regex)![1];
        return ExpressionConstructor.literalValue<T, string>(
          stringValue as string
        );
      }
    } else if (astTree.isField()) {
      const fieldValue = data[String(astTree.fieldName!)];
      if (fieldValue === undefined)
        throw new Error(`The variable ${astTree.fieldName} not defined.`);
      if (typeof fieldValue === "number") {
        return ExpressionConstructor.fieldReference<T, number>(
          astTree.fieldName!
        );
      } else {
        return ExpressionConstructor.fieldReference<T, string>(
          astTree.fieldName!
        );
      }
    } else if (astTree.isComparaison()) {
      const comparaisonOperator = astTree.operator;
      const left = this.interprete<T>(astTree.left!, data);
      const right = this.interprete<T>(astTree.right!, data);
      switch (comparaisonOperator) {
        case ">":
          return ExpressionConstructor.superior<T, string | number>(
            left,
            right
          );
        case "<":
          return ExpressionConstructor.inferior<T, string | number>(
            left,
            right
          );
        case "==":
          return ExpressionConstructor.equality<T, string | number>(
            left,
            right
          );
        case ">=":
          return ExpressionConstructor.or<T, string | number>(
            ExpressionConstructor.superior<T, string | number>(left, right),
            ExpressionConstructor.equality<T, string | number>(left, right)
          );
        case "<=":
          return ExpressionConstructor.or<T, string | number>(
            ExpressionConstructor.inferior<T, string | number>(left, right),
            ExpressionConstructor.equality<T, string | number>(left, right)
          );
        case "||":
          return ExpressionConstructor.or<T, string | number>(left, right);
        case "&&":
          return ExpressionConstructor.and<T, string | number>(left, right);
        case "!=":
          return ExpressionConstructor.different<T, string | number>(
            left,
            right
          );
        default:
          throw new Error(
            `This comparaison ${comparaisonOperator} method is not supported`
          );
      }
    } else if (astTree.isConditional()) {
      const condition = this.interprete<T>(astTree.condition!, data);
      const isTrue = this.interprete<T>(astTree.isTrue!, data);
      const isFalse = this.interprete<T>(astTree.isFalse!, data);
      return ExpressionConstructor.condition<T, string | number>(
        condition as Expression<T, number>,
        isTrue,
        isFalse
      );
    } else {
      throw new Error(
        `This Expression is not Correct. Please verify Your expression [Interpreter]:${astTree}`
      );
    }
  }
}
