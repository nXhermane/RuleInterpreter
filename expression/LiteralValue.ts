import { Expression } from "./Expression";

export class LiteralValue<T,R=number> extends Expression<T, R> {
  constructor(private _value: R) {
    super();
  }
  execute(obj: T): R {
    return this._value;
  }
}
