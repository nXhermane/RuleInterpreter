import { Expression } from "./Expression";

export class LiteralValue<T> extends Expression<T, number> {
  constructor(private _value: number) {
    super();
  }
  execute(obj: T): number {
    return this._value;
  }
}
