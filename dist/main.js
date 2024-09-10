/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./constant.ts":
      /*!*********************!*\
  !*** ./constant.ts ***!
  \*********************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.REGEX = void 0;\nexports.REGEX = {\n    formularOperatorG: /(<=|>=|==|\\|\\||&&|!=|[+/\\-*=()<>?:])/g,\n    formularOperator: /(<=|>=|==|\\|\\||&&|!=|[+/\\-*=()<>?!:])/\n};\n\n\n//# sourceURL=webpack://ruleinterpreter/./constant.ts?'
        );

        /***/
      },

    /***/ "./expression/BinaryOperation.ts":
      /*!***************************************!*\
  !*** ./expression/BinaryOperation.ts ***!
  \***************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.BinaryOperation = void 0;\nconst Expression_1 = __webpack_require__(/*! ./Expression */ "./expression/Expression.ts");\nclass BinaryOperation extends Expression_1.Expression {\n    constructor(left, right, operator) {\n        super();\n        this.left = left;\n        this.right = right;\n        this.operator = operator;\n    }\n    execute(obj) {\n        return this.operator(this.left.execute(obj), this.right.execute(obj));\n    }\n}\nexports.BinaryOperation = BinaryOperation;\n\n\n//# sourceURL=webpack://ruleinterpreter/./expression/BinaryOperation.ts?'
        );

        /***/
      },

    /***/ "./expression/ConditionalExpression.ts":
      /*!*********************************************!*\
  !*** ./expression/ConditionalExpression.ts ***!
  \*********************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.ConditionalExpression = void 0;\nconst Expression_1 = __webpack_require__(/*! ./Expression */ "./expression/Expression.ts");\nclass ConditionalExpression extends Expression_1.Expression {\n    constructor(condition, isTrue, isFalse) {\n        super();\n        this.condition = condition;\n        this.isTrue = isTrue;\n        this.isFalse = isFalse;\n    }\n    execute(obj) {\n        return this.condition.execute(obj) != 0\n            ? this.isTrue.execute(obj)\n            : this.isFalse.execute(obj);\n    }\n}\nexports.ConditionalExpression = ConditionalExpression;\n\n\n//# sourceURL=webpack://ruleinterpreter/./expression/ConditionalExpression.ts?'
        );

        /***/
      },

    /***/ "./expression/Expression.ts":
      /*!**********************************!*\
  !*** ./expression/Expression.ts ***!
  \**********************************/
      /***/ (__unused_webpack_module, exports) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.Expression = void 0;\nclass Expression {\n}\nexports.Expression = Expression;\n\n\n//# sourceURL=webpack://ruleinterpreter/./expression/Expression.ts?'
        );

        /***/
      },

    /***/ "./expression/ExpressionConstructor.ts":
      /*!*********************************************!*\
  !*** ./expression/ExpressionConstructor.ts ***!
  \*********************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.ExpressionConstructor = void 0;\nconst LiteralValue_1 = __webpack_require__(/*! ./LiteralValue */ "./expression/LiteralValue.ts");\nconst FieldReference_1 = __webpack_require__(/*! ./FieldReference */ "./expression/FieldReference.ts");\nconst BinaryOperation_1 = __webpack_require__(/*! ./BinaryOperation */ "./expression/BinaryOperation.ts");\nconst ConditionalExpression_1 = __webpack_require__(/*! ./ConditionalExpression */ "./expression/ConditionalExpression.ts");\nclass ExpressionConstructor {\n    static literalValue(value) {\n        return new LiteralValue_1.LiteralValue(value);\n    }\n    static fieldReference(fieldName) {\n        return new FieldReference_1.FieldReference(fieldName);\n    }\n    static addition(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => a + b);\n    }\n    static substration(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => a - b);\n    }\n    static multiplication(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => a * b);\n    }\n    static division(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => {\n            if (b === 0)\n                throw new Error("Division by zero");\n            return a / b;\n        });\n    }\n    static condition(condition, isTrue, isFalse) {\n        return new ConditionalExpression_1.ConditionalExpression(condition, isTrue, isFalse);\n    }\n    static equality(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a === b));\n    }\n    static superior(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a > b));\n    }\n    static inferior(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a < b));\n    }\n    static different(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a != b));\n    }\n    static or(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a || b));\n    }\n    static and(left, right) {\n        return new BinaryOperation_1.BinaryOperation(left, right, (a, b) => Number(a && b));\n    }\n}\nexports.ExpressionConstructor = ExpressionConstructor;\n\n\n//# sourceURL=webpack://ruleinterpreter/./expression/ExpressionConstructor.ts?'
        );

        /***/
      },

    /***/ "./expression/FieldReference.ts":
      /*!**************************************!*\
  !*** ./expression/FieldReference.ts ***!
  \**************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.FieldReference = void 0;\nconst Expression_1 = __webpack_require__(/*! ./Expression */ "./expression/Expression.ts");\nclass FieldReference extends Expression_1.Expression {\n    constructor(filedName) {\n        super();\n        this.filedName = filedName;\n    }\n    execute(obj) {\n        if (obj != null && obj != undefined) {\n            if (obj[this.filedName] != undefined)\n                return obj[this.filedName];\n        }\n        throw new Error(`The fieldName ${this.filedName} not exist or equal to undefined on object ${obj}`);\n    }\n}\nexports.FieldReference = FieldReference;\n\n\n//# sourceURL=webpack://ruleinterpreter/./expression/FieldReference.ts?'
        );

        /***/
      },

    /***/ "./expression/LiteralValue.ts":
      /*!************************************!*\
  !*** ./expression/LiteralValue.ts ***!
  \************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.LiteralValue = void 0;\nconst Expression_1 = __webpack_require__(/*! ./Expression */ "./expression/Expression.ts");\nclass LiteralValue extends Expression_1.Expression {\n    constructor(_value) {\n        super();\n        this._value = _value;\n    }\n    execute(obj) {\n        return this._value;\n    }\n}\nexports.LiteralValue = LiteralValue;\n\n\n//# sourceURL=webpack://ruleinterpreter/./expression/LiteralValue.ts?'
        );

        /***/
      },

    /***/ "./index.ts":
      /*!******************!*\
  !*** ./index.ts ***!
  \******************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nconst FormularParser_1 = __webpack_require__(/*! ./parser/FormularParser */ "./parser/FormularParser.ts");\nconst FormularTokeniser_1 = __webpack_require__(/*! ./tokeniser/FormularTokeniser */ "./tokeniser/FormularTokeniser.ts");\nconst FormularInterpreter_1 = __webpack_require__(/*! ./interpreter/FormularInterpreter */ "./interpreter/FormularInterpreter.ts");\nconst data = {\n    age: 20,\n    sexe: "H",\n    poids: 60,\n    taille: 1.64,\n    niveauActivite: 1.56,\n};\nconst formula = `(10 * poids) + (6.25 * taille) - (5 * age ) + ((sexe == "H" ? 5 : (-161)) * niveauActivite)`;\nconst condition = `(10 + ((10 > 5) ? ((11+5)-5) : "false"))`;\nconst fTokeniser = new FormularTokeniser_1.Tokeniser();\nconst fParser = new FormularParser_1.FormularParser();\nconst fInterpreter = new FormularInterpreter_1.FormularInterpreter();\nconst astTree = fParser.execute(fTokeniser.execute("(-5)-10"));\nconsole.log(fInterpreter.execute(astTree, data));\n\n\n//# sourceURL=webpack://ruleinterpreter/./index.ts?'
        );

        /***/
      },

    /***/ "./interpreter/FormularInterpreter.ts":
      /*!********************************************!*\
  !*** ./interpreter/FormularInterpreter.ts ***!
  \********************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.FormularInterpreter = void 0;\nconst ExpressionConstructor_1 = __webpack_require__(/*! ./../expression/ExpressionConstructor */ "./expression/ExpressionConstructor.ts");\nclass FormularInterpreter {\n    execute(astTree, data) {\n        const result = this.interprete(astTree, data).execute(data);\n        return result;\n    }\n    interprete(astTree, data) {\n        if (astTree.isNode()) {\n            const operator = astTree.operator;\n            const right = this.interprete(astTree.right, data);\n            const left = this.interprete(astTree.left, data);\n            switch (operator) {\n                case "+":\n                    return ExpressionConstructor_1.ExpressionConstructor.addition(left, right);\n                    break;\n                case "-":\n                    return ExpressionConstructor_1.ExpressionConstructor.substration(left, right);\n                    break;\n                case "*":\n                    return ExpressionConstructor_1.ExpressionConstructor.multiplication(left, right);\n                    break;\n                case "/":\n                    return ExpressionConstructor_1.ExpressionConstructor.division(left, right);\n                    break;\n                default:\n                    throw new Error(`This operator ${operator} is not supported.`);\n            }\n        }\n        else if (astTree.isValue()) {\n            const value = astTree.value;\n            if (typeof value === "number") {\n                return ExpressionConstructor_1.ExpressionConstructor.literalValue(Number(astTree.value));\n            }\n            else {\n                const regex = /"([\\w]+)"/;\n                const stringValue = value.match(regex)[1];\n                return ExpressionConstructor_1.ExpressionConstructor.literalValue(stringValue);\n            }\n        }\n        else if (astTree.isField()) {\n            const fieldValue = data[String(astTree.fieldName)];\n            if (fieldValue === undefined)\n                throw new Error(`The variable ${astTree.fieldName} not defined.`);\n            if (typeof fieldValue === "number") {\n                return ExpressionConstructor_1.ExpressionConstructor.fieldReference(astTree.fieldName);\n            }\n            else {\n                return ExpressionConstructor_1.ExpressionConstructor.fieldReference(astTree.fieldName);\n            }\n        }\n        else if (astTree.isComparaison()) {\n            const comparaisonOperator = astTree.operator;\n            const left = this.interprete(astTree.left, data);\n            const right = this.interprete(astTree.right, data);\n            switch (comparaisonOperator) {\n                case ">":\n                    return ExpressionConstructor_1.ExpressionConstructor.superior(left, right);\n                    break;\n                case "<":\n                    return ExpressionConstructor_1.ExpressionConstructor.inferior(left, right);\n                    break;\n                case "==":\n                    return ExpressionConstructor_1.ExpressionConstructor.equality(left, right);\n                    break;\n                case ">=":\n                    return ExpressionConstructor_1.ExpressionConstructor.or(ExpressionConstructor_1.ExpressionConstructor.superior(left, right), ExpressionConstructor_1.ExpressionConstructor.equality(left, right));\n                    break;\n                case "<=":\n                    return ExpressionConstructor_1.ExpressionConstructor.or(ExpressionConstructor_1.ExpressionConstructor.inferior(left, right), ExpressionConstructor_1.ExpressionConstructor.equality(left, right));\n                    break;\n                case "||":\n                    return ExpressionConstructor_1.ExpressionConstructor.or(left, right);\n                    break;\n                case "&&":\n                    return ExpressionConstructor_1.ExpressionConstructor.and(left, right);\n                    break;\n                case "!=":\n                    return ExpressionConstructor_1.ExpressionConstructor.different(left, right);\n                    break;\n                default:\n                    throw new Error(`This comparaison ${comparaisonOperator} methode is not supported`);\n            }\n        }\n        else if (astTree.isConditional()) {\n            const condition = this.interprete(astTree.condition, data);\n            const isTrue = this.interprete(astTree.isTrue, data);\n            const isFalse = this.interprete(astTree.isFalse, data);\n            return ExpressionConstructor_1.ExpressionConstructor.condition(condition, isTrue, isFalse);\n        }\n        else {\n            throw new Error(`This Expression is not Correct. Please verify You expression [Interpreter]:${astTree}`);\n        }\n    }\n}\nexports.FormularInterpreter = FormularInterpreter;\n\n\n//# sourceURL=webpack://ruleinterpreter/./interpreter/FormularInterpreter.ts?'
        );

        /***/
      },

    /***/ "./parser/FormularParser.ts":
      /*!**********************************!*\
  !*** ./parser/FormularParser.ts ***!
  \**********************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.FormularParser = exports.AstNode = void 0;\nconst constant_1 = __webpack_require__(/*! ../constant */ "./constant.ts");\nclass AstNode {\n    isConditional() {\n        return !!this.condition && !!this.isFalse && !!this.isTrue;\n    }\n    isValue() {\n        return !!this.value;\n    }\n    isComparaison() {\n        return !!this.isComparaisonOperator();\n    }\n    isField() {\n        return !!this.fieldName;\n    }\n    isNode() {\n        return (!this.isValue() &&\n            !this.isField() &&\n            !this.isComparaison() &&\n            !this.isConditional());\n    }\n    isComparaisonOperator() {\n        if ([">", "||", "<", "&&", ">=", "<=", "==", "!="].includes(this.operator))\n            return true;\n        return false;\n    }\n}\nexports.AstNode = AstNode;\nclass FormularParser {\n    isFormular(tokens) {\n        let notOperatorLastIndex = 1;\n        let operatorLastIndex = 1;\n        const operatorRegex = constant_1.REGEX.formularOperator;\n        for (let index = 0; index < tokens.length; index++) {\n            const token = tokens[index];\n            const isOperator = operatorRegex.test(String(token));\n            const lastIndex = index - 1;\n            if (isOperator) {\n                operatorLastIndex = index;\n            }\n            else {\n                if (notOperatorLastIndex == lastIndex &&\n                    operatorLastIndex != lastIndex) {\n                    return false;\n                }\n                notOperatorLastIndex = index;\n            }\n        }\n        return true;\n    }\n    checkSynthax(tokens) {\n        this.checkParenthesixSynthax(tokens);\n        this.checkOperatorSynthax(tokens);\n        this.checkTernaryConditionSynthax(tokens);\n    }\n    checkParenthesixSynthax(tokens) {\n        const stack = [];\n        tokens.forEach((token) => {\n            if (token === "(")\n                stack.push("(");\n            if (token === ")") {\n                if (stack.length === 0) {\n                    throw new Error("Parenthesis mismatch");\n                }\n                stack.pop();\n            }\n        });\n        if (stack.length !== 0) {\n            throw new Error("Incorrect parenthesis disposition.");\n        }\n    }\n    checkOperatorSynthax(tokens) {\n        const regex = /[+-\\/*]{2,}/;\n        const expression = tokens.join("");\n        if (regex.test(expression)) {\n            throw new Error("Incorrect Operator error");\n        }\n        const validOperationCheckerRegex = />=|<=|==|!=|&&|\\|\\||[+-\\/*<>][\\w\\(]/;\n        if (!validOperationCheckerRegex.test(expression)) {\n            throw new Error("Incorrect Operator position for Operande");\n        }\n    }\n    checkTernaryConditionSynthax(tokens) {\n        let ternaryQuestionMarkCount = 0;\n        let ternaryColonCount = 0;\n        tokens.forEach((token) => {\n            if (token === "?")\n                ternaryQuestionMarkCount++;\n            if (token === ":")\n                ternaryColonCount++;\n        });\n        if (ternaryQuestionMarkCount !== ternaryColonCount) {\n            throw new Error("Incorrect Ternary syntax: unmatched ? and :");\n        }\n        const ternaryRegex = /[?:]/;\n        let expectingCondition = true;\n        tokens.forEach((token) => {\n            if (ternaryRegex.test(String(token))) {\n                if (expectingCondition && token === ":") {\n                    throw new Error("Ternary syntax error: found \':\' before \'?\'");\n                }\n                expectingCondition = !expectingCondition;\n            }\n        });\n    }\n    execute(tokens) {\n        if (this.isFormular(tokens)) {\n            this.checkSynthax(tokens);\n            return this.parser(tokens);\n        }\n        else {\n            throw new Error("is not formular");\n        }\n    }\n    parser(tokens) {\n        console.log(tokens);\n        const postFixExpression = this.infixToPostFix(tokens);\n        console.log(postFixExpression);\n        const result = this.generateAST(postFixExpression);\n        return result;\n    }\n    generateAST(tokens) {\n        const stack = [];\n        let counter = 0;\n        return this._generateAST(tokens, counter, stack);\n    }\n    _generateAST(tokens, index, stack = []) {\n        const token = tokens[index];\n        if (!token)\n            return stack[0];\n        if (this.isOperatorFirstAndParenthesix(token)) {\n            const node = new AstNode();\n            node.operator = token;\n            if (this.isArithmeticOperator(token)) {\n                node.right = stack.pop();\n                node.left = stack.pop();\n            }\n            else if (this.isComparaisonOperator(token)) {\n                node.right = stack.pop();\n                node.left = stack.pop();\n            }\n            else if (this.isTernaryOperator(token)) {\n                node.isFalse = stack.pop();\n                node.isTrue = stack.pop();\n                node.condition = stack.pop();\n            }\n            stack.push(node);\n        }\n        else {\n            const node = new AstNode();\n            if (this.isValue(token)) {\n                node.value = token;\n            }\n            else {\n                node.fieldName = token;\n            }\n            stack.push(node);\n        }\n        return this._generateAST(tokens, index + 1, stack);\n    }\n    infixToPostFix(tokens) {\n        const output = [];\n        const operators = [];\n        tokens.forEach((token) => {\n            if (!this.isOperatorFirstAndParenthesix(token)) {\n                output.push(token);\n            }\n            else {\n                const operatorAndParentesix = String(token);\n                const priority = this.priority(operatorAndParentesix);\n                if (operatorAndParentesix === "(") {\n                    operators.push(operatorAndParentesix);\n                }\n                else if (operatorAndParentesix === ")") {\n                    while (operators.length > 0 &&\n                        operators[operators.length - 1] !== "(") {\n                        const operator = operators.pop();\n                        if (!(operator.trim() === "(")) {\n                            output.push(operator);\n                        }\n                    }\n                    operators.pop();\n                }\n                else if (operatorAndParentesix === ":") {\n                    while (operators.length > 0 &&\n                        operators[operators.length - 1] !== "?") {\n                        output.push(operators.pop());\n                    }\n                }\n                else if ([\n                    "+",\n                    "-",\n                    "/",\n                    "*",\n                    ">",\n                    "||",\n                    "<",\n                    "&&",\n                    ">=",\n                    "<=",\n                    "==",\n                    "!=",\n                    "?",\n                ].includes(operatorAndParentesix)) {\n                    while (operators.length > 0 &&\n                        this.priority(operators[operators.length - 1]) >= priority) {\n                        output.push(operators.pop());\n                    }\n                    operators.push(operatorAndParentesix);\n                }\n                else {\n                }\n            }\n        });\n        while (operators.length > 0) {\n            output.push(operators.pop());\n        }\n        return output;\n    }\n    priority(operator) {\n        if (["+", "-"].includes(operator))\n            return 1;\n        if (["/", "*"].includes(operator))\n            return 2;\n        if ([">", "||", "<", "&&", ">=", "<=", "==", "!=", "?"].includes(operator))\n            return 3;\n        return 0;\n    }\n    isOperatorFirstAndParenthesix(token) {\n        if ([\n            "+",\n            "-",\n            "/",\n            "*",\n            ">",\n            "||",\n            "<",\n            "&&",\n            ">=",\n            "<=",\n            "==",\n            "!=",\n            "?",\n            ":",\n            "(",\n            ")",\n        ].includes(String(token).trim()))\n            return true;\n        return false;\n    }\n    isArithmeticOperator(token) {\n        if (["+", "-", "/", "*"].includes(token))\n            return true;\n        return false;\n    }\n    isComparaisonOperator(token) {\n        if ([">", "||", "<", "&&", ">=", "<=", "==", "!="].includes(token))\n            return true;\n        return false;\n    }\n    isTernaryOperator(token) {\n        if (["?"].includes(token))\n            return true;\n        return false;\n    }\n    isValue(token) {\n        const valueRegex = /"[\\w]+"/;\n        return typeof token === "number" || valueRegex.test(token) ? true : false;\n    }\n}\nexports.FormularParser = FormularParser;\n\n\n//# sourceURL=webpack://ruleinterpreter/./parser/FormularParser.ts?'
        );

        /***/
      },

    /***/ "./tokeniser/FormularTokeniser.ts":
      /*!****************************************!*\
  !*** ./tokeniser/FormularTokeniser.ts ***!
  \****************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        eval(
          '\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.Tokeniser = void 0;\nconst constant_1 = __webpack_require__(/*! ../constant */ "./constant.ts");\nclass Tokeniser {\n    formatInput(input) {\n        const formatedExpression = input\n            .replace(constant_1.REGEX.formularOperatorG, " $1 ")\n            .replace(/\\s+/g, " ")\n            .trim();\n        return formatedExpression;\n    }\n    filterTokens(tokens) {\n        const filteredTokens = [];\n        let expectedClosedParenthesix = false;\n        tokens.forEach((token) => {\n            const regex = /^\\d+(\\.\\d+)?$/;\n            const negativeNumberRegex = /-\\d+/;\n            const lastFilteredToken = filteredTokens[filteredTokens.length - 1];\n            if (regex.test(token)) {\n                const firstPop = filteredTokens.pop();\n                const secondPop = filteredTokens.pop();\n                if (firstPop && secondPop) {\n                    if (["+", "-"].includes(firstPop) && secondPop === "(") {\n                        filteredTokens.push(Number(firstPop + token));\n                        expectedClosedParenthesix = true;\n                    }\n                    else {\n                        filteredTokens.push(secondPop, firstPop, Number(token));\n                    }\n                }\n                else {\n                    if (!secondPop) {\n                        if (firstPop) {\n                            filteredTokens.push(firstPop, Number(token));\n                        }\n                        else {\n                            filteredTokens.push(Number(token));\n                        }\n                    }\n                    else {\n                        filteredTokens.push(Number(token));\n                    }\n                }\n            }\n            else if (negativeNumberRegex.test(lastFilteredToken) &&\n                token === ")" &&\n                expectedClosedParenthesix) {\n                expectedClosedParenthesix = false;\n            }\n            else {\n                filteredTokens.push(token);\n            }\n        });\n        return filteredTokens;\n    }\n    execute(input) {\n        const formatedInput = this.formatInput(input);\n        const tokens = formatedInput.split(" ");\n        const filteredTokens = this.filterTokens(tokens);\n        return filteredTokens;\n    }\n}\nexports.Tokeniser = Tokeniser;\n\n\n//# sourceURL=webpack://ruleinterpreter/./tokeniser/FormularTokeniser.ts?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./index.ts");
  /******/
  /******/
})();
