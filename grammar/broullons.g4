grammar NutriXnapDSL;

// Le script principal qui contient plusieurs déclarations
script: statement* EOF;

// Déclaration (soit une définition de variable, d'objet, un appel de fonction ou une instruction de retour)
statement: definition | globalDefinition | functionCall | returnStatement;

// Définition d'une variable (simple ou objet)
definition: DEFINE variable '=' expression;

// Définition d'une variable globale (simple ou objet)
globalDefinition: GLOB variable '=' expression;

// Appel à une fonction
functionCall: ID '(' (expression (',' expression)*)? ')';

// Retourner une expression
returnStatement: RETURN expression;

// Instruction conditionnelle if, else if, else
ifConditionStatement: IF '(' condition ')' THEM '{' statement*
'}'
                     (ElIF '(' condition ')' THEM '{' statement* '}')*
                     (ELSE '{' statement* '}')?;

// Instruction conditionnelle ternaire
ternaryConditionalStatement: condition '?' expression ':' expression;

// Condition
condition: expression COMPARAISONOPERATOR expression 
         | condition LOGICCONNECTOR condition;

// Expression arithmétique
arithmeticExpression: arithTerm ('+' arithTerm | '-' arithTerm)*;

arithTerm: arithFactor ('*' arithFactor | '/' arithFactor)*;

arithFactor: NUMBER | variable | functionCall | '(' arithmeticExpression ')';

// Expression (peut être un nombre, une chaîne, un objet, une variable ou une autre expression)
expression: NUMBER | STRING | object | variable | functionCall | arithmeticExpression | '(' expression ')';

// Variable ou accès à une propriété
variable: ID;

// Définition d'un objet avec des paires clé-valeur
object: '(' pair (',' pair)* ')';

// Une paire clé-valeur dans un objet
pair: ID '=' expression;

// Mot-clé pour définir une variable
DEFINE: 'define';

// Mot-clé pour définir une variable dans une session globale
GLOB: 'glob';

// Mots-clés pour les conditions
IF: 'if';
THEM: 'then';
ELSE: 'else';
ElIF: 'else if';

// Mot-clé pour retourner une valeur
RETURN: 'return';

// Opérateurs de comparaison
COMPARAISONOPERATOR: ('>' | '<' | '<=' | '>=' | '==' | '!=');

// Connecteurs logiques
LOGICCONNECTOR: ('||' | '&&');

// Identifiants (noms de variables et propriétés)
ID: [a-zA-Z_] [a-zA-Z_0-9]*;

// Nombres (entiers ou à virgule flottante)
NUMBER: [0-9]+ ('.' [0-9]+)?;

// Chaînes de caractères
STRING: '"' (~["])* '"';

// Ignorer les espaces et les retours à la ligne
WS: [\t\r\n]+ -> skip;

// Commentaires (ligne unique)
COMMENT: '//' ~[\r\n]* -> skip;