import { LiteralValue } from "./LiteralValue";
import { Expression } from "./Expression";
import { FieldReference } from "./FieldReference";
import { BinaryOperation } from "./BinaryOperation";
import { ConditionalExpression } from "./ConditionalExpression";

export class ExpressionConstructor {
  static literalValue<T,R=number>(value: R): Expression<T, R> {
    return new LiteralValue<T,R>(value);
  }
  static fieldReference<T extends { [key: string]: any }, R>(
    fieldName: string
  ): Expression<T, R> {
    return new FieldReference<T, R>(fieldName);
  }
  static addition<T>(
    left: Expression<T, number>,
    right: Expression<T, number>
  ): Expression<T, number> {
    return new BinaryOperation<T, number>(left, right, (a, b) => a + b);
  }
  static substration<T>(
    left: Expression<T, number>,
    right: Expression<T, number>
  ): Expression<T, number> {
    return new BinaryOperation<T, number>(left, right, (a, b) => a - b);
  }
  static multiplication<T>(
    left: Expression<T, number>,
    right: Expression<T, number>
  ): Expression<T, number> {
    return new BinaryOperation<T, number>(left, right, (a, b) => a * b);
  }
  static division<T>(
    left: Expression<T, number>,
    right: Expression<T, number>
  ): Expression<T, number> {
    return new BinaryOperation<T, number>(left, right, (a, b) => {
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    });
  }
  static condition<T, R>(
    condition: Expression<T, number>,
    isTrue: Expression<T, R>,
    isFalse: Expression<T, R>
  ): Expression<T, R> {
    return new ConditionalExpression(condition, isTrue, isFalse);
  }
  static equality<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a === b)
    );
  }

  static superior<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a > b)
    );
  }
  static inferior<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a < b)
    );
  }
  static different<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a != b)
    );
  }
  static or<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a || b)
    );
  }
  static and<T, R>(
    left: Expression<T, R>,
    right: Expression<T, R>
  ): Expression<T, number> {
    return new BinaryOperation<T, R>(left, right, (a: R, b: R) =>
      Number(a && b)
    );
  }
}
