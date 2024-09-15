(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ruleinterpreter"] = factory();
	else
		root["ruleinterpreter"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constant.ts":
/*!*********************!*\
  !*** ./constant.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REGEX = void 0;
exports.REGEX = {
    formularOperatorG: /(<=|>=|==|\|\||&&|!=|[+/\-*=()<>?:])/g,
    formularOperator: /(<=|>=|==|\|\||&&|!=|[+/\-*=()<>?!:])/
};


/***/ }),

/***/ "./expression/BinaryOperation.ts":
/*!***************************************!*\
  !*** ./expression/BinaryOperation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BinaryOperation = void 0;
const Expression_1 = __webpack_require__(/*! ./Expression */ "./expression/Expression.ts");
/**
 * Représente une opération binaire sur deux expressions.
 * @template T Le type d'entrée de l'expression.
 * @template R Le type de sortie des expressions.
 * @param {Expression<T, R>} left L'expression de gauche.
 * @param {Expression<T, R>} right L'expression de droite.
 * @param {(a: R, b: R) => number} operator La fonction opérateur qui prend deux valeurs de type R et retourne un nombre.
 
 */
class BinaryOperation extends Expression_1.Expression {
    /**
     * Crée une instance de BinaryOperation.
    */
    constructor(left, right, operator) {
        super();
        this.left = left;
        this.right = right;
        this.operator = operator;
    }
    /**
     * Exécute l'opération binaire sur l'objet donné.
     * @param {T} obj L'objet sur lequel l'opération sera exécutée.
     * @returns {number} Le résultat de l'opération binaire.
     */
    execute(obj) {
        return this.operator(this.left.execute(obj), this.right.execute(obj));
    }
}
exports.BinaryOperation = BinaryOperation;


/***/ }),

/***/ "./expression/ConditionalExpression.ts":
/*!*********************************************!*\
  !*** ./expression/ConditionalExpression.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConditionalExpression = void 0;
const Expression_1 = __webpack_require__(/*! ./Expression */ "./expression/Expression.ts");
/**
 * Représente une expression conditionnelle qui retourne des valeurs basées sur une condition.
 * @template T Le type d'entrée de l'expression.
 * @template R Le type de sortie de l'expression conditionnelle.
 * @param {Expression<T, number>} condition L'expression qui détermine la condition à évaluer.
 * @param {Expression<T, R>} isTrue L'expression à exécuter si la condition est vraie.
 * @param {Expression<T, R>} isFalse L'expression à exécuter si la condition est fausse.
 */
class ConditionalExpression extends Expression_1.Expression {
    constructor(condition, isTrue, isFalse) {
        super();
        this.condition = condition;
        this.isTrue = isTrue;
        this.isFalse = isFalse;
    }
    /**
     * Exécute l'expression conditionnelle sur l'objet donné.
     * @param {T} obj L'objet sur lequel l'expression sera évaluée.
     * @returns {R} La valeur retournée par l'expression conditionnelle, basée sur l'évaluation de la condition.
     */
    execute(obj) {
        return this.condition.execute(obj) != 0 ? this.isTrue.execute(obj) : this.isFalse.execute(obj);
    }
}
exports.ConditionalExpression = ConditionalExpression;


/***/ }),

/***/ "./expression/Expression.ts":
/*!**********************************!*\
  !*** ./expression/Expression.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Expression = void 0;
/**
 * Représente une expression abstraite qui définit une interface pour l'évaluation d'expressions.
 * @template T Le type d'entrée pour l'expression.
 * @template R Le type de résultat produit par l'expression.
 */
class Expression {
}
exports.Expression = Expression;


/***/ }),

/***/ "./expression/ExpressionConstructor.ts":
/*!*********************************************!*\
  !*** ./expression/ExpressionConstructor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpressionConstructor = void 0;
const LiteralValue_1 = __webpack_require__(/*! ./LiteralValue */ "./expression/LiteralValue.ts");
const FieldReference_1 = __webpack_require__(/*! ./FieldReference */ "./expression/FieldReference.ts");
const BinaryOperation_1 = __webpack_require__(/*! ./BinaryOperation */ "./expression/BinaryOperation.ts");
const ConditionalExpression_1 = __webpack_require__(/*! ./ConditionalExpression */ "./expression/ConditionalExpression.ts");
class ExpressionConstructor {
    static literalValue(value) {
        return new LiteralValue_1.LiteralValue(value);
    }
    static fieldReference(fieldName) {
        return new FieldReference_1.FieldReference(fieldName);
    }
    static addition(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => a + b);
    }
    static substration(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => a - b);
    }
    static multiplication(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => a * b);
    }
    static division(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => {
            if (b === 0)
                throw new Error("Division by zero");
            return a / b;
        });
    }
    static condition(condition, isTrue, isFalse) {
        return new ConditionalExpression_1.ConditionalExpression(condition, isTrue, isFalse);
    }
    static equality(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a === b));
    }
    static superior(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a > b));
    }
    static inferior(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a < b));
    }
    static different(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a != b));
    }
    static or(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a || b));
    }
    static and(left, right) {
        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a && b));
    }
}
exports.ExpressionConstructor = ExpressionConstructor;


/***/ }),

/***/ "./expression/FieldReference.ts":
/*!**************************************!*\
  !*** ./expression/FieldReference.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FieldReference = void 0;
const Expression_1 = __webpack_require__(/*! ./Expression */ "./expression/Expression.ts");
class FieldReference extends Expression_1.Expression {
    constructor(filedName) {
        super();
        this.filedName = filedName;
    }
    execute(obj) {
        if (obj != null && obj != undefined) {
            if (obj[this.filedName] != undefined)
                return obj[this.filedName];
        }
        throw new Error(`The fieldName ${this.filedName} not exist or equal to undefined on object ${obj}`);
    }
}
exports.FieldReference = FieldReference;


/***/ }),

/***/ "./expression/LiteralValue.ts":
/*!************************************!*\
  !*** ./expression/LiteralValue.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LiteralValue = void 0;
const Expression_1 = __webpack_require__(/*! ./Expression */ "./expression/Expression.ts");
class LiteralValue extends Expression_1.Expression {
    constructor(_value) {
        super();
        this._value = _value;
    }
    execute(obj) {
        return this._value;
    }
}
exports.LiteralValue = LiteralValue;


/***/ }),

/***/ "./interpreter/FormularInterpreter.ts":
/*!********************************************!*\
  !*** ./interpreter/FormularInterpreter.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormularInterpreter = void 0;
const ExpressionConstructor_1 = __webpack_require__(/*! ./../expression/ExpressionConstructor */ "./expression/ExpressionConstructor.ts");
class FormularInterpreter {
    execute(astTree, data) {
        const result = this.interprete(astTree, data).execute(data);
        return result;
    }
    interprete(astTree, data) {
        if (astTree.isNode()) {
            const operator = astTree.operator;
            const right = this.interprete(astTree.right, data);
            const left = this.interprete(astTree.left, data);
            switch (operator) {
                case "+":
                    return ExpressionConstructor_1.ExpressionConstructor.addition(left, right);
                    break;
                case "-":
                    return ExpressionConstructor_1.ExpressionConstructor.substration(left, right);
                    break;
                case "*":
                    return ExpressionConstructor_1.ExpressionConstructor.multiplication(left, right);
                    break;
                case "/":
                    return ExpressionConstructor_1.ExpressionConstructor.division(left, right);
                    break;
                default:
                    throw new Error(`This operator ${operator} is not supported.`);
            }
        }
        else if (astTree.isValue()) {
            const value = astTree.value;
            if (typeof value === "number") {
                return ExpressionConstructor_1.ExpressionConstructor.literalValue(Number(astTree.value));
            }
            else {
                const regex = /"([\w]+)"/;
                const stringValue = value.match(regex)[1];
                return ExpressionConstructor_1.ExpressionConstructor.literalValue(stringValue);
            }
        }
        else if (astTree.isField()) {
            const fieldValue = data[String(astTree.fieldName)];
            if (fieldValue === undefined)
                throw new Error(`The variable ${astTree.fieldName} not defined.`);
            if (typeof fieldValue === "number") {
                return ExpressionConstructor_1.ExpressionConstructor.fieldReference(astTree.fieldName);
            }
            else {
                return ExpressionConstructor_1.ExpressionConstructor.fieldReference(astTree.fieldName);
            }
        }
        else if (astTree.isComparaison()) {
            const comparaisonOperator = astTree.operator;
            const left = this.interprete(astTree.left, data);
            const right = this.interprete(astTree.right, data);
            switch (comparaisonOperator) {
                case ">":
                    return ExpressionConstructor_1.ExpressionConstructor.superior(left, right);
                    break;
                case "<":
                    return ExpressionConstructor_1.ExpressionConstructor.inferior(left, right);
                    break;
                case "==":
                    return ExpressionConstructor_1.ExpressionConstructor.equality(left, right);
                    break;
                case ">=":
                    return ExpressionConstructor_1.ExpressionConstructor.or(ExpressionConstructor_1.ExpressionConstructor.superior(left, right), ExpressionConstructor_1.ExpressionConstructor.equality(left, right));
                    break;
                case "<=":
                    return ExpressionConstructor_1.ExpressionConstructor.or(ExpressionConstructor_1.ExpressionConstructor.inferior(left, right), ExpressionConstructor_1.ExpressionConstructor.equality(left, right));
                    break;
                case "||":
                    return ExpressionConstructor_1.ExpressionConstructor.or(left, right);
                    break;
                case "&&":
                    return ExpressionConstructor_1.ExpressionConstructor.and(left, right);
                    break;
                case "!=":
                    return ExpressionConstructor_1.ExpressionConstructor.different(left, right);
                    break;
                default:
                    throw new Error(`This comparaison ${comparaisonOperator} methode is not supported`);
            }
        }
        else if (astTree.isConditional()) {
            const condition = this.interprete(astTree.condition, data);
            const isTrue = this.interprete(astTree.isTrue, data);
            const isFalse = this.interprete(astTree.isFalse, data);
            return ExpressionConstructor_1.ExpressionConstructor.condition(condition, isTrue, isFalse);
        }
        else {
            throw new Error(`This Expression is not Correct. Please verify You expression [Interpreter]:${astTree}`);
        }
    }
}
exports.FormularInterpreter = FormularInterpreter;


/***/ }),

/***/ "./parser/FormularParser.ts":
/*!**********************************!*\
  !*** ./parser/FormularParser.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormularParser = exports.AstNode = void 0;
const constant_1 = __webpack_require__(/*! ../constant */ "./constant.ts");
class AstNode {
    isConditional() {
        return !!this.condition && !!this.isFalse && !!this.isTrue;
    }
    isValue() {
        return !!this.value;
    }
    isComparaison() {
        return !!this.isComparaisonOperator();
    }
    isField() {
        return !!this.fieldName;
    }
    isNode() {
        return (!this.isValue() &&
            !this.isField() &&
            !this.isComparaison() &&
            !this.isConditional());
    }
    isComparaisonOperator() {
        if ([">", "||", "<", "&&", ">=", "<=", "==", "!="].includes(this.operator))
            return true;
        return false;
    }
}
exports.AstNode = AstNode;
class FormularParser {
    isFormular(tokens) {
        let notOperatorLastIndex = 1;
        let operatorLastIndex = 1;
        const operatorRegex = constant_1.REGEX.formularOperator;
        for (let index = 0; index < tokens.length; index++) {
            const token = tokens[index];
            const isOperator = operatorRegex.test(String(token));
            const lastIndex = index - 1;
            if (isOperator) {
                operatorLastIndex = index;
            }
            else {
                if (notOperatorLastIndex == lastIndex &&
                    operatorLastIndex != lastIndex) {
                    return false;
                }
                notOperatorLastIndex = index;
            }
        }
        return true;
    }
    checkSynthax(tokens) {
        this.checkParenthesixSynthax(tokens);
        this.checkOperatorSynthax(tokens);
        this.checkTernaryConditionSynthax(tokens);
    }
    checkParenthesixSynthax(tokens) {
        const stack = [];
        tokens.forEach((token) => {
            if (token === "(")
                stack.push("(");
            if (token === ")") {
                if (stack.length === 0) {
                    throw new Error("Parenthesis mismatch");
                }
                stack.pop();
            }
        });
        if (stack.length !== 0) {
            throw new Error("Incorrect parenthesis disposition.");
        }
    }
    checkOperatorSynthax(tokens) {
        const regex = /[+-\/*]{2,}/;
        const expression = tokens.join("");
        if (regex.test(expression)) {
            throw new Error("Incorrect Operator error");
        }
        const validOperationCheckerRegex = />=|<=|==|!=|&&|\|\||[+-\/*<>][\w\(]/;
        if (!validOperationCheckerRegex.test(expression)) {
            throw new Error("Incorrect Operator position for Operande");
        }
    }
    checkTernaryConditionSynthax(tokens) {
        let ternaryQuestionMarkCount = 0;
        let ternaryColonCount = 0;
        tokens.forEach((token) => {
            if (token === "?")
                ternaryQuestionMarkCount++;
            if (token === ":")
                ternaryColonCount++;
        });
        if (ternaryQuestionMarkCount !== ternaryColonCount) {
            throw new Error("Incorrect Ternary syntax: unmatched ? and :");
        }
        const ternaryRegex = /[?:]/;
        let expectingCondition = true;
        tokens.forEach((token) => {
            if (ternaryRegex.test(String(token))) {
                if (expectingCondition && token === ":") {
                    throw new Error("Ternary syntax error: found ':' before '?'");
                }
                expectingCondition = !expectingCondition;
            }
        });
    }
    execute(tokens) {
        if (this.isFormular(tokens)) {
            this.checkSynthax(tokens);
            return this.parser(tokens);
        }
        else {
            throw new Error("is not formular");
        }
    }
    parser(tokens) {
        console.log(tokens);
        const postFixExpression = this.infixToPostFix(tokens);
        console.log(postFixExpression);
        const result = this.generateAST(postFixExpression);
        return result;
    }
    generateAST(tokens) {
        const stack = [];
        let counter = 0;
        return this._generateAST(tokens, counter, stack);
    }
    _generateAST(tokens, index, stack = []) {
        const token = tokens[index];
        if (!token)
            return stack[0];
        if (this.isOperatorFirstAndParenthesix(token)) {
            const node = new AstNode();
            node.operator = token;
            if (this.isArithmeticOperator(token)) {
                node.right = stack.pop();
                node.left = stack.pop();
            }
            else if (this.isComparaisonOperator(token)) {
                node.right = stack.pop();
                node.left = stack.pop();
            }
            else if (this.isTernaryOperator(token)) {
                node.isFalse = stack.pop();
                node.isTrue = stack.pop();
                node.condition = stack.pop();
            }
            stack.push(node);
        }
        else {
            const node = new AstNode();
            if (this.isValue(token)) {
                node.value = token;
            }
            else {
                node.fieldName = token;
            }
            stack.push(node);
        }
        return this._generateAST(tokens, index + 1, stack);
    }
    infixToPostFix(tokens) {
        const output = [];
        const operators = [];
        tokens.forEach((token) => {
            if (!this.isOperatorFirstAndParenthesix(token)) {
                output.push(token);
            }
            else {
                const operatorAndParentesix = String(token);
                const priority = this.priority(operatorAndParentesix);
                if (operatorAndParentesix === "(") {
                    operators.push(operatorAndParentesix);
                }
                else if (operatorAndParentesix === ")") {
                    while (operators.length > 0 &&
                        operators[operators.length - 1] !== "(") {
                        const operator = operators.pop();
                        if (!(operator.trim() === "(")) {
                            output.push(operator);
                        }
                    }
                    operators.pop();
                }
                else if (operatorAndParentesix === ":") {
                    while (operators.length > 0 &&
                        operators[operators.length - 1] !== "?") {
                        output.push(operators.pop());
                    }
                }
                else if ([
                    "+",
                    "-",
                    "/",
                    "*",
                    ">",
                    "||",
                    "<",
                    "&&",
                    ">=",
                    "<=",
                    "==",
                    "!=",
                    "?",
                ].includes(operatorAndParentesix)) {
                    while (operators.length > 0 &&
                        this.priority(operators[operators.length - 1]) >= priority) {
                        output.push(operators.pop());
                    }
                    operators.push(operatorAndParentesix);
                }
                else {
                }
            }
        });
        while (operators.length > 0) {
            output.push(operators.pop());
        }
        return output;
    }
    priority(operator) {
        if (["+", "-"].includes(operator))
            return 1;
        if (["/", "*"].includes(operator))
            return 2;
        if ([">", "||", "<", "&&", ">=", "<=", "==", "!=", "?"].includes(operator))
            return 3;
        return 0;
    }
    isOperatorFirstAndParenthesix(token) {
        if ([
            "+",
            "-",
            "/",
            "*",
            ">",
            "||",
            "<",
            "&&",
            ">=",
            "<=",
            "==",
            "!=",
            "?",
            ":",
            "(",
            ")",
        ].includes(String(token).trim()))
            return true;
        return false;
    }
    isArithmeticOperator(token) {
        if (["+", "-", "/", "*"].includes(token))
            return true;
        return false;
    }
    isComparaisonOperator(token) {
        if ([">", "||", "<", "&&", ">=", "<=", "==", "!="].includes(token))
            return true;
        return false;
    }
    isTernaryOperator(token) {
        if (["?"].includes(token))
            return true;
        return false;
    }
    isValue(token) {
        const valueRegex = /"[\w]+"/;
        return typeof token === "number" || valueRegex.test(token) ? true : false;
    }
}
exports.FormularParser = FormularParser;


/***/ }),

/***/ "./tokeniser/FormularTokeniser.ts":
/*!****************************************!*\
  !*** ./tokeniser/FormularTokeniser.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormularTokeniser = void 0;
const constant_1 = __webpack_require__(/*! ../constant */ "./constant.ts");
class FormularTokeniser {
    formatInput(input) {
        const formatedExpression = input
            .replace(constant_1.REGEX.formularOperatorG, " $1 ")
            .replace(/\s+/g, " ")
            .trim();
        return formatedExpression;
    }
    filterTokens(tokens) {
        const filteredTokens = [];
        let expectedClosedParenthesix = false;
        tokens.forEach((token) => {
            const regex = /^\d+(\.\d+)?$/;
            const negativeNumberRegex = /-\d+/;
            const lastFilteredToken = filteredTokens[filteredTokens.length - 1];
            if (regex.test(token)) {
                const firstPop = filteredTokens.pop();
                const secondPop = filteredTokens.pop();
                if (firstPop && secondPop) {
                    if (["+", "-"].includes(firstPop) && secondPop === "(") {
                        filteredTokens.push(Number(firstPop + token));
                        expectedClosedParenthesix = true;
                    }
                    else {
                        filteredTokens.push(secondPop, firstPop, Number(token));
                    }
                }
                else {
                    if (!secondPop) {
                        if (firstPop) {
                            filteredTokens.push(firstPop, Number(token));
                        }
                        else {
                            filteredTokens.push(Number(token));
                        }
                    }
                    else {
                        filteredTokens.push(Number(token));
                    }
                }
            }
            else if (negativeNumberRegex.test(lastFilteredToken) &&
                token === ")" &&
                expectedClosedParenthesix) {
                expectedClosedParenthesix = false;
            }
            else {
                filteredTokens.push(token);
            }
        });
        return filteredTokens;
    }
    execute(input) {
        const formatedInput = this.formatInput(input);
        const tokens = formatedInput.split(" ");
        const filteredTokens = this.filterTokens(tokens);
        return filteredTokens;
    }
}
exports.FormularTokeniser = FormularTokeniser;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const BinaryOperation_1 = __webpack_require__(/*! ./expression/BinaryOperation */ "./expression/BinaryOperation.ts");
const ConditionalExpression_1 = __webpack_require__(/*! ./expression/ConditionalExpression */ "./expression/ConditionalExpression.ts");
const Expression_1 = __webpack_require__(/*! ./expression/Expression */ "./expression/Expression.ts");
const ExpressionConstructor_1 = __webpack_require__(/*! ./expression/ExpressionConstructor */ "./expression/ExpressionConstructor.ts");
const FieldReference_1 = __webpack_require__(/*! ./expression/FieldReference */ "./expression/FieldReference.ts");
const LiteralValue_1 = __webpack_require__(/*! ./expression/LiteralValue */ "./expression/LiteralValue.ts");
const FormularInterpreter_1 = __webpack_require__(/*! ./interpreter/FormularInterpreter */ "./interpreter/FormularInterpreter.ts");
const FormularParser_1 = __webpack_require__(/*! ./parser/FormularParser */ "./parser/FormularParser.ts");
const FormularTokeniser_1 = __webpack_require__(/*! ./tokeniser/FormularTokeniser */ "./tokeniser/FormularTokeniser.ts");
exports["default"] = {
    BinaryOperation: BinaryOperation_1.BinaryOperation,
    ConditionalExpression: ConditionalExpression_1.ConditionalExpression,
    Expression: Expression_1.Expression,
    ExpressionConstructor: ExpressionConstructor_1.ExpressionConstructor,
    FieldReference: FieldReference_1.FieldReference,
    LiteralValue: LiteralValue_1.LiteralValue,
    FormularInterpreter: FormularInterpreter_1.FormularInterpreter,
    FormularParser: FormularParser_1.FormularParser,
    AstNode: FormularParser_1.AstNode,
    FormularTokeniser: FormularTokeniser_1.FormularTokeniser,
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map