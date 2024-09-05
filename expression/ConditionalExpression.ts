import { Expression } from "./Expression";

export class ConditionalExpression<T, R> extends Expression<T, R> {
  constructor(
    private condition: Expression<T, number>,
    private isTrue: Expression<T, R>,
    private isFalse: Expression<T, R>
  ) {
    super();
  }
  execute(obj: T): R {
    return this.condition.execute(obj) != 0
      ? this.isTrue.execute(obj)
      : this.isFalse.execute(obj);
  }
}
