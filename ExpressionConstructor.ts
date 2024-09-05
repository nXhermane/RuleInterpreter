import { LiteralValue } from "./expression/LiteralValue";
import { Expression } from "./expression/Expression";
import { FieldReference } from "./expression/FieldReference";
import { BinaryOperation } from "./expression/BinaryOperation";
import { ConditionalExpression } from "./expression/ConditionalExpression";

export class ExpressionConstructor {
  literalValue<T>(value: number): Expression<T, number> {
    return new LiteralValue<T>(value);
  }
  fieldReference<T extends { [key: string]: any }, R>(
    fieldName: string
  ): Expression<T, R> {
    return new FieldReference<T, R>(fieldName);
  }
  addition<T>(
    left: Expression<T, number>,
    right: Expression<T, number>
  ): Expression<T, number> {
    return new BinaryOperation<T, number>(left, right, (a, b) => a + b);
  }
  substration<T>(
    left: Expression<T, number>,
    right: Expression<T, number>
  ): Expression<T, number> {
    return new BinaryOperation<T, number>(left, right, (a, b) => a - b);
  }
  multiplication<T>(
    left: Expression<T, number>,
    right: Expression<T, number>
  ): Expression<T, number> {
    return new BinaryOperation<T, number>(left, right, (a, b) => a * b);
  }
  division<T>(
    left: Expression<T, number>,
    right: Expression<T, number>
  ): Expression<T, number> {
    return new BinaryOperation<T, number>(left, right, (a, b) => {
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    });
  }
  condition<T, R>(
    condition: Expression<T, number>,
    isTrue: Expression<T, R>,
    isFalse: Expression<T, R>
  ): Expression<T, R> {
    return new ConditionalExpression(condition, isTrue, isFalse);
  }
  equality<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a === b)
    );
  }

  superior<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a > b)
    );
  }
  inferior<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a < b)
    );
  }
  different<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a != b)
    );
  }
  or<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a || b)
    );
  }
  and<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a && b)
    );
  }
}
