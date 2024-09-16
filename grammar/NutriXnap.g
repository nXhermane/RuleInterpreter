grammar NutriXnap;

script: (statement SEMICOLON)* EOF;

statement:
	definition
	| globalDefinition
	| functionCall
	| returnSatement
	| ifCoditionStatement;

definition: DEFINE ID ASSIGN (value | functionCall);

globalDefinition: GLOB ID ASSIGN (value | functionCall);

functionCall: ID LPAREN (value (COMMA value)*)? RPAREN;

returnSatement: RETURN (value | functionCall);

ifCoditionStatement:
	IF LPAREN condition RPAREN THEM LBRACE (statement SEMICOLON)* RBRACE (
		ELIF LPAREN condition RPAREN LBRACE (statement SEMICOLON)* RBRACE
	)* (ELSE LBRACE (statement SEMICOLON)* RBRACE)?;

ternaryConditionalStatement:
	condition QUESTIONMARK value COLON value;

condition: (comparaison | (logicalComparaison)+)?;

comparaison: value ComparraisonOperator value;

logicalComparaison: (value | comparaison) LogicOperator (
		value
		| comparaison
	);

value: expression | object;

expression: Number | ID | STRING;

arithMeticExpression: arithTerm ( (PLUS | MINUS) arithTerm)*;

arithTerm: arithFactor ( (DIVIDE | MULTIPLY) arithFactor)*;
arithFactor: Number | LPAREN arithMeticExpression RPAREN;

object: LPAREN keyValue (COMMA keyValue)* RPAREN;

keyValue: ID ASSIGN expression;

ComparraisonOperator: (
		LESSTHAN
		| MORETHAN
		| LESSTHANEQUAL
		| MORETHANEQUAL
		| EQUALS
		| NOTEQUAL
	);

LogicOperator: (AND | OR);
Number: (FLOAT | INT);

DEFINE: 'define';
GLOB: 'global';
RETURN: 'return';
ASSIGN: '=';
IF: 'if';
THEM: 'then';
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

ID: ('a' ..'z' | 'A' ..'Z' | '_') ('a' ..'z' | 'A' ..'Z' | '_')*;

INT: '0' ..'9'+;

FLOAT: ('0' ..'9')+ '.' ('0' ..'9')* EXPONENT?
	| '.' ('0' ..'9')+ EXPONENT?
	| ('0' ..'9')+ EXPONENT;

COMMENT:
	'//' ~('\n' | '\r')* '\r'? '\n' {$channel=HIDDEN;}
	| '/*' ( options {greedy = false;
	}: .
	)* '*/' {$channel=HIDDEN;};

WS: ( ' ' | '\t' | '\r' | '\n') {$channel=HIDDEN;};

STRING: '"' ( ESC_SEQ | ~('\\' | '"'))* '"';

CHAR: '\'' ( ESC_SEQ | ~('\'' | '\\')) '\'';

fragment EXPONENT: ('e' | 'E') ('+' | '-')? ('0' ..'9')+;

fragment HEX_DIGIT: ('0' ..'9' | 'a' ..'f' | 'A' ..'F');

fragment ESC_SEQ:
	'\\' ('b' | 't' | 'n' | 'f' | 'r' | '\"' | '\'' | '\\')
	| UNICODE_ESC
	| OCTAL_ESC;

fragment OCTAL_ESC:
	'\\' ('0' ..'3') ('0' ..'7') ('0' ..'7')
	| '\\' ('0' ..'7') ('0' ..'7')
	| '\\' ('0' ..'7');

fragment UNICODE_ESC:
	'\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT;