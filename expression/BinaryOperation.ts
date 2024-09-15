import { Expression } from "./Expression";

/**
 * Représente une opération binaire sur deux expressions.
 * @template T Le type d'entrée de l'expression.
 * @template R Le type de sortie des expressions.
 * @param {Expression<T, R>} left L'expression de gauche.
 * @param {Expression<T, R>} right L'expression de droite.
 * @param {(a: R, b: R) => number} operator La fonction opérateur qui prend deux valeurs de type R et retourne un nombre.
 
 */
export class BinaryOperation<T, R> extends Expression<T, number> {
  /**
   * Crée une instance de BinaryOperation.
  */
  constructor(
    private left: Expression<T, R>,
    private right: Expression<T, R>,
    private operator: (a: R, b: R) => number
  ) {
    super();
  }

  /**
   * Exécute l'opération binaire sur l'objet donné.
   * @param {T} obj L'objet sur lequel l'opération sera exécutée.
   * @returns {number} Le résultat de l'opération binaire.
   */
  execute(obj: T): number {
    return this.operator(this.left.execute(obj), this.right.execute(obj));
  }
}