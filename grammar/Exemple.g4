/*
BSD License

Copyright (c) 2024, Tom Everett
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. Neither the name of Tom Everett nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
grammar action;

file_
   : program? EOF
   ;

program
   : ('MODULE'? progmodule+)+
   ;

progmodule
   : systemdecls* routinelist
   ;

systemdecls
   : definedecl
   | typedecl
   | vardecl
   ;

definedecl
   : 'DEFINE' deflist
   ;

deflist
   : def (',' def)*
   ;

def
   : IDENTIFIER EQ STRCONST
   ;

typedecl
   : 'TYPE' typeerecidentlist
   ;

typeerecidentlist
   : typerecident+
   ;

typerecident
   : recname EQ fieldinit+
   ;

recname
   : IDENTIFIER
   ;

fieldinit
   : funddecl
   ;

vardecl
   : basevardecl+
   ;

basevardecl
   : funddecl
   | pointerdecl
   | arraydecl
   | recorddecl
   ;

funddecl
   : basefunddecl+
   ;

basefunddecl
   : fundtype fundidentlist
   ;

fundtype
   : 'CARD'
   | 'CHAR'
   | 'BYTE'
   | 'INT'
   ;

fundidentlist
   : fundident (',' fundident)*
   ;

fundident
   : IDENTIFIER (EQ initopts)?
   ;

initopts
   : addr
   | value+
   ;

addr
   : compconst
   ;

value
   : NUMCONST
   ;

pointerdecl
   : ptrtype 'POINTER' ptridentlist
   ;

ptrtype
   : fundtype
   | recname
   ;

ptridentlist
   : ptrident (',' ptrident)*
   ;

ptrident
   : IDENTIFIER (EQ value)?
   ;

arraydecl
   : fundtype 'ARRAY' arridentlist
   ;

arridentlist
   : arrident (',' arrident)*
   ;

arrident
   : IDENTIFIER ('(' dim ')')? (EQ arrinitopts)?
   ;

dim
   : arithexp
   ;

arrinitopts
   : addr
   | arrayvalue+
   | STRCONST
   ;
   //arrayvaluelist  : arrayvalue+;

arrayvalue
   : compconst
   ;

recorddecl
   : IDENTIFIER recidentlist
   ;

recidentlist
   : recident (',' recident)*
   ;

recident
   : IDENTIFIER (EQ address)?
   ;

address
   : compconst
   ;

memreference
   : memcontents
   | '@' IDENTIFIER
   ;

memcontents
   : fundref
   | arrref
   | ptrref
   | recref
   ;

fundref
   : IDENTIFIER
   ;

arrref
   : IDENTIFIER '(' arithexp ')'
   ;

ptrref
   : IDENTIFIER '^'
   ;

recref
   : IDENTIFIER '.' IDENTIFIER
   ;

routinelist
   : routine+
   ;

routine
   : procroutine
   | funcroutine
   ;

procroutine
   : procdecl systemdecls? stmtlist? 'RETURN'?
   ;

procdecl
   : 'PROC' IDENTIFIER (EQ addr)? '(' paramdecl? ')'
   ;

funcroutine
   : funcdecl systemdecls? stmtlist? ('RETURN' '(' arithexp ')')?
   ;

funcdecl
   : fundtype 'FUNC' IDENTIFIER ('.' addr)? '(' paramdecl? ')'
   ;

routinecall
   : IDENTIFIER '(' params? ')'
   ;

params
   : param (',' param)*
   ;

param
   : IDENTIFIER
   | compconst
   | STRCONST
   | NUMCONST
   | arithexp
   ;

paramdecl
   : vardecl
   ;

stmtlist
   : stmt+
   ;

stmt
   : simpstmt
   | strucstmt
   | codeblock
   ;

simpstmt
   : assignstmt
   | exitstmt
   | routinecall
   ;

strucstmt
   : ifstmt
   | doloop
   | whileloop
   | forloop
   ;

assignstmt
   : memcontents (EQ | '==+' | '==-') arithexp
   ;

exitstmt
   : 'EXIT'
   ;

ifstmt
   : 'IF' condexp 'THEN' stmtlist? elseifexten* elseexten? 'FI'
   ;

elseifexten
   : 'ELSEIF' condexp 'THEN' stmtlist?
   ;

elseexten
   : 'ELSE' stmtlist?
   ;

doloop
   : 'DO' stmtlist? untilstmt? 'OD'
   ;

untilstmt
   : 'UNTIL' condexp
   ;

whileloop
   : 'WHILE' condexp doloop
   ;

forloop
   : 'FOR' IDENTIFIER EQ start_ 'TO' finish_ ('STEP' inc)? doloop
   ;

start_
   : arithexp
   ;

finish_
   : arithexp
   ;

inc
   : arithexp
   ;

codeblock
   : compconstlist+
   ;

compconstlist
   : compconst+
   ;

condexp
   : complexrel
   | simprelexp
   | arithexp
   | multexp
   ;

complexrel
   : complexrel SPECIALOP simprelexp
   | simprelexp SPECIALOP simprelexp
   ;

simprelexp
   : arithexp RELOP arithexp
   ;

arithexp
   : arithexp ADDOP arithexp
   | multexp
   ;

multexp
   : multexp MULTOP arithexp
   | valuevalue
   ;

valuevalue
   : NUMCONST
   | memreference
   | '(' arithexp ')'
   ;

compconst
   : basecompconst+
   ;

basecompconst
   : IDENTIFIER
   | NUMCONST
   | '^'
   | MUL
   ;

MULTOP
   : MUL
   | '/'
   | 'MOD'
   | 'LSH'
   | 'RSH'
   ;

EQ
   : '='
   ;

FUNDTYPE
   : 'CARD'
   | 'CHAR'
   | 'BYTE'
   | 'INT'
   ;

SPECIALOP
   : 'AND'
   | 'OR'
   | '&'
   | '%'
   ;

RELOP
   : 'XOR'
   | '!'
   | EQ
   | '#'
   | '<>'
   | '<'
   | '<='
   | '>'
   | '>='
   ;

ADDOP
   : '+'
   | '-'
   ;

UNARYOP
   : '@'
   | '-'
   ;

IDENTIFIER
   : [a-zA-Z] [a-zA-Z0-9]*
   ;

NUMCONST
   : DECNUM
   | HEXNUM
   | CHAR
   ;

STRCONST
   : '"' ~ '"'* '"'
   ;

fragment DECNUM
   : DIGIT+
   ;

fragment HEXNUM
   : HEXDIGIT+
   | '$' HEXNUM
   ;
   // extend this

fragment CHAR
   : [a-zA-Z0-9]
   ;

fragment HEXDIGIT
   : [0-9A-F]
   ;

fragment DIGIT
   : [0-9]
   ;

MUL
   : '*'
   ;

COMMENT
   : ';' ~ ('\r' | '\n')* -> skip
   ;

WS
   : [ \r\n\t]+ -> skip
   ;

.....>.
/*
BSD License

Copyright (c) 2013, Tom Everett
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. Neither the name of Tom Everett nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

grammar arithmetic;

file_
    : equation* EOF
    ;

equation
    : expression relop expression
    ;

expression
    : expression POW expression
    | expression (TIMES | DIV) expression
    | expression (PLUS | MINUS) expression
    | LPAREN expression RPAREN
    | (PLUS | MINUS)* atom
    ;

atom
    : scientific
    | variable
    ;

scientific
    : SCIENTIFIC_NUMBER
    ;

variable
    : VARIABLE
    ;

relop
    : EQ
    | GT
    | LT
    ;

VARIABLE
    : VALID_ID_START VALID_ID_CHAR*
    ;

fragment VALID_ID_START
    : 'a' .. 'z'
    | 'A' .. 'Z'
    | '_'
    ;

fragment VALID_ID_CHAR
    : VALID_ID_START
    | '0' .. '9'
    ;

//The NUMBER part gets its potential sign from "(PLUS | MINUS)* atom" in the expression rule
SCIENTIFIC_NUMBER
    : NUMBER (E SIGN? UNSIGNED_INTEGER)?
    ;

fragment NUMBER
    : ('0' .. '9')+ ('.' ('0' .. '9')+)?
    ;

fragment UNSIGNED_INTEGER
    : ('0' .. '9')+
    ;

fragment E
    : 'E'
    | 'e'
    ;

fragment SIGN
    : '+'
    | '-'
    ;

LPAREN
    : '('
    ;

RPAREN
    : ')'
    ;

PLUS
    : '+'
    ;

MINUS
    : '-'
    ;

TIMES
    : '*'
    ;

DIV
    : '/'
    ;

GT
    : '>'
    ;

LT
    : '<'
    ;

EQ
    : '='
    ;

POINT
    : '.'
    ;

POW
    : '^'
    ;

WS
    : [ \r\n\t]+ -> skip
    ;
    
    
    .....
    /*
BSD License

Copyright (c) 2013, Tom Everett
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. Neither the name of Tom Everett nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

grammar calculator;

equation
    : expression relop expression EOF
    ;

expression
    : multiplyingExpression ((PLUS | MINUS) multiplyingExpression)*
    ;

multiplyingExpression
    : powExpression ((TIMES | DIV) powExpression)*
    ;

powExpression
    : signedAtom (POW signedAtom)*
    ;

signedAtom
    : PLUS signedAtom
    | MINUS signedAtom
    | func_
    | atom
    ;

atom
    : scientific
    | variable
    | constant
    | LPAREN expression RPAREN
    ;

scientific
    : SCIENTIFIC_NUMBER
    ;

constant
    : PI
    | EULER
    | I
    ;

variable
    : VARIABLE
    ;

func_
    : funcname LPAREN expression (COMMA expression)* RPAREN
    ;

funcname
    : COS
    | TAN
    | SIN
    | ACOS
    | ATAN
    | ASIN
    | LOG
    | LN
    | SQRT
    ;

relop
    : EQ
    | GT
    | LT
    ;

COS
    : 'cos'
    ;

SIN
    : 'sin'
    ;

TAN
    : 'tan'
    ;

ACOS
    : 'acos'
    ;

ASIN
    : 'asin'
    ;

ATAN
    : 'atan'
    ;

LN
    : 'ln'
    ;

LOG
    : 'log'
    ;

SQRT
    : 'sqrt'
    ;

LPAREN
    : '('
    ;

RPAREN
    : ')'
    ;

PLUS
    : '+'
    ;

MINUS
    : '-'
    ;

TIMES
    : '*'
    ;

DIV
    : '/'
    ;

GT
    : '>'
    ;

LT
    : '<'
    ;

EQ
    : '='
    ;

COMMA
    : ','
    ;

POINT
    : '.'
    ;

POW
    : '^'
    ;

PI
    : 'pi'
    ;

EULER
    : E2
    ;

I
    : 'i'
    ;

VARIABLE
    : VALID_ID_START VALID_ID_CHAR*
    ;

fragment VALID_ID_START
    : 'a' .. 'z'
    | 'A' .. 'Z'
    | '_'
    ;

fragment VALID_ID_CHAR
    : VALID_ID_START
    | '0' .. '9'
    ;

SCIENTIFIC_NUMBER
    : NUMBER ((E1 | E2) SIGN? NUMBER)?
    ;

fragment NUMBER
    : '0' ..'9'+ ('.' '0' ..'9'+)?
    ;

fragment E1
    : 'E'
    ;

fragment E2
    : 'e'
    ;

fragment SIGN
    : '+'
    | '-'
    ;

WS
    : [ \r\n\t]+ -> skip
    ;