/**
 * Représente une expression abstraite qui définit une interface pour l'évaluation d'expressions.
 * @template T Le type d'entrée pour l'expression.
 * @template R Le type de résultat produit par l'expression.
 */
export abstract class Expression<T, R> {
  /**
   * Évalue l'expression en fonction de l'objet donné.
   * @param {T} obj L'objet sur lequel l'expression sera évaluée.
   * @returns {R} Le résultat de l'évaluation de l'expression.
   */
  abstract execute(obj: T): R;
}