grammar Claud;

script: statement* EOF;

statement: definition 
         | globalDefinition 
         | functionCall 
         | returnStatement
         | ifConditionStatement
         ;

definition: DEFINE variable '=' expression;

globalDefinition: GLOB variable '=' expression;

functionCall: ID '(' (expression (',' expression)*)? ')';

returnStatement: RETURN expression;

ifConditionStatement: IF '(' condition ')' THEN ':' 
                      statement*
                      (ELIF '(' condition ')' THEN ':' statement*)*
                      (ELSE ':' statement*)?;

condition: logicalExpression;

logicalExpression
    : comparisonExpression (LOGICCONNECTOR comparisonExpression)*
    ;

comparisonExpression
    : additiveExpression (COMPARISONOPERATOR additiveExpression)?
    ;

additiveExpression
    : multiplicativeExpression (('+' | '-') multiplicativeExpression)*
    ;

multiplicativeExpression
    : primaryExpression (('*' | '/') primaryExpression)*
    ;

primaryExpression
    : NUMBER
    | STRING
    | object
    | variable
    | functionCall
    | '(' expression ')'
    | ternaryExpression
    ;

ternaryExpression
    : logicalExpression '?' expression ':' expression
    ;

expression
    : logicalExpression
    ;

variable: ID ('.' ID)*;

object: '(' pair (',' pair)* ')';

pair: ID '=' expression;

DEFINE: 'define';
GLOB: 'glob';
IF: 'if';
THEN: 'then:';
ELSE: 'else:';
ELIF: 'else if';
RETURN: 'return';

COMPARISONOPERATOR: ('>' | '<' | '<=' | '>=' | '==' | '!=');
LOGICCONNECTOR: ('||' | '&&');

ID: [a-zA-Z_] [a-zA-Z_0-9]*;
NUMBER: '-'? [0-9]+ ('.' [0-9]+)?;
STRING: '"' (~["\r\n] | '\\"')* '"';

WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;