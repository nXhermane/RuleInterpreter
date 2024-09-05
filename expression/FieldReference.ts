import { Expression } from "./Expression";

export class FieldReference<
  T extends { [kex: string]: any },
  R
> extends Expression<T, R> {
  constructor(private filedName: string) {
    super();
  }
  execute(obj: T): R {
    if (obj != null && obj != undefined) {
      if (obj[this.filedName] != undefined) return obj[this.filedName];
    }
    throw new Error(
      `The fieldName ${this.filedName} not exist or equal to undefined on object ${obj}`
    );
  }
}
