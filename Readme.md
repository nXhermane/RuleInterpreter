# Rules Interpreter

Rules interpreter est une modules integré du projet [NutriXnap](https://github.com/nXhermane/NUTRIXNAP_PRO.git)

## Aperçu

Cette module est chargé de l'interpretation des regles et formules nutritionnelle .
Ce processus d'interpretation est composé principalemente de trois etapes:
1. **Tokeniseur**

    Le Tokeniseur est chargé du decoupage des regles ecrites en des tokens.
2. **Parser**

    Le parser ou l'analyseur se charge de la verification synthasic et de la generation du Abstract Synthasic Tree (AST)
3. **L'interpreteur** 

    L'interpreteur se charge de l'interpretation de l'AST pour executer les actions voulues.
4. **Variable Getters** 

Cette partie n'est pas necessairement integrée au module mais c'est quelque chose de complementaire qui va permattre la recupperation et le traitement des variables identifiées.

