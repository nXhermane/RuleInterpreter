export abstract class Expression<T, R> {
  abstract execute(obj: T): R;
}
