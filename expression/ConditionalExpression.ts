import { Expression } from "./Expression";

/**
 * Représente une expression conditionnelle qui retourne des valeurs basées sur une condition.
 * @template T Le type d'entrée de l'expression.
 * @template R Le type de sortie de l'expression conditionnelle.
 * @param {Expression<T, number>} condition L'expression qui détermine la condition à évaluer.
 * @param {Expression<T, R>} isTrue L'expression à exécuter si la condition est vraie.
 * @param {Expression<T, R>} isFalse L'expression à exécuter si la condition est fausse.
 */
export class ConditionalExpression<T, R> extends Expression<T, R> {
   constructor(
      private condition: Expression<T, number>,
      private isTrue: Expression<T, R>,
      private isFalse: Expression<T, R>,
   ) {
      super();
   }

   /**
    * Exécute l'expression conditionnelle sur l'objet donné.
    * @param {T} obj L'objet sur lequel l'expression sera évaluée.
    * @returns {R} La valeur retournée par l'expression conditionnelle, basée sur l'évaluation de la condition.
    */
   execute(obj: T): R {
      return this.condition.execute(obj) != 0 ? this.isTrue.execute(obj) : this.isFalse.execute(obj);
   }
}
