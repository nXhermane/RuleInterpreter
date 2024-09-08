import { Expression } from "./Expression";

export class BinaryOperation<T, R> extends Expression<T, number> {
  constructor(
    private left: Expression<T, R>,
    private right: Expression<T, R>,
    private operator: (a: R, b: R) => number
  ) {
    super();
  }
  execute(obj: T): number {
    return this.operator(this.left.execute(obj), this.right.execute(obj));
  }
}
