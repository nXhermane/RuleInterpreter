grammar NutriXnap;

script: (statement SEMICOLON)* EOF;

statement
    : definition
    | globalDefinition
    | functionCall
    | returnStatement
    | ifConditionStatement
    ;

definition: DEFINE ID ASSIGN (value | functionCall);
globalDefinition: GLOB ID ASSIGN (value | functionCall);
functionCall: ID LPAREN (value (COMMA value)*)? RPAREN;
returnStatement: RETURN (value | functionCall);
ifConditionStatement
    : IF LPAREN condition RPAREN THEN LBRACE (statement SEMICOLON)* RBRACE
      (ELIF LPAREN condition RPAREN LBRACE (statement SEMICOLON)* RBRACE)*
      (ELSE LBRACE (statement SEMICOLON)* RBRACE)?
    ;
ternaryConditionalStatement: condition QUESTIONMARK value COLON value;
condition: (comparison | (logicalComparison)+)?;
comparison: value ComparisonOperator value;
logicalComparison: (value | comparison) LogicOperator (value | comparison);
value: expression | object;
expression: Number | ID | STRING;
arithmeticExpression: arithmeticTerm ((PLUS | MINUS) arithmeticTerm)*;
arithmeticTerm: arithmeticFactor ((DIVIDE | MULTIPLY) arithmeticFactor)*;
arithmeticFactor: Number | LPAREN arithmeticExpression RPAREN;
object: LPAREN keyValue (COMMA keyValue)* RPAREN;
keyValue: ID ASSIGN expression;

ComparisonOperator: LESSTHAN | MORETHAN | LESSTHANEQUAL | MORETHANEQUAL | EQUALS | NOTEQUAL;
LogicOperator: AND | OR;
Number: FLOAT | INT;

// Lexer rules
DEFINE: 'define';
GLOB: 'global';
RETURN: 'return';
ASSIGN: '=';
IF: 'if';
THEN: 'then';
ELIF: 'else if';
ELSE: 'else';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COLON: ':';
SEMICOLON: ';';
COMMA: ',';
PLUS: '+';
MINUS: '-';
QUESTIONMARK: '?';
MULTIPLY: '*';
DIVIDE: '/';
LESSTHAN: '<';
MORETHAN: '>';
LESSTHANEQUAL: '<=';
MORETHANEQUAL: '>=';
EQUALS: '==';
NOTEQUAL: '!=';
AND: '&&';
OR: '||';

ID: [a-zA-Z_] [a-zA-Z_0-9]*;
INT: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]* EXPONENT?
     | '.' [0-9]+ EXPONENT?
     | [0-9]+ EXPONENT;

COMMENT: '//' ~[\r\n]* -> skip
       | '/*' .*? '*/' -> skip;
WS: [ \t\r\n]+ -> skip;
STRING: '"' (ESC_SEQ | ~[\\"])* '"';
CHAR: '\'' (ESC_SEQ | ~[\\']) '\'';

fragment EXPONENT: [eE] [+-]? [0-9]+;
fragment HEX_DIGIT: [0-9a-fA-F];
fragment ESC_SEQ
    : '\\' [btnfr"'\\]
    | UNICODE_ESC
    | OCTAL_ESC
    ;
fragment OCTAL_ESC
    : '\\' [0-3] [0-7] [0-7]
    | '\\' [0-7] [0-7]
    | '\\' [0-7]
    ;
fragment UNICODE_ESC
    : '\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    ;