import { ExpressionConstructor } from "./expression/ExpressionConstructor";
import { FormularParser } from "./parser/FormularParser";
import { Tokeniser } from "./tokeniser/FormularTokeniser";
const data: Data = {
  age: 20,
  sexe: "M",
  poids: 60,
  taille: 1.64,
  niveauActivite: 1.56,
};

type Data = {
  age: number;
  sexe: string;
  poids: number;
  taille: number;
  niveauActivite: number;
};

//

const exp = ExpressionConstructor.addition<Data>(
  ExpressionConstructor.substration<Data>(
    ExpressionConstructor.addition<Data>(
      ExpressionConstructor.multiplication<Data>(
        ExpressionConstructor.literalValue<Data>(10),
        ExpressionConstructor.fieldReference<Data, number>("poids")
      ),
      ExpressionConstructor.multiplication<Data>(
        ExpressionConstructor.literalValue<Data>(6.25),
        ExpressionConstructor.fieldReference<Data, number>("taille")
      )
    ),
    ExpressionConstructor.multiplication<Data>(
      ExpressionConstructor.literalValue<Data>(5),
      ExpressionConstructor.fieldReference<Data, number>("age")
    )
  ),
  ExpressionConstructor.multiplication<Data>(
    ExpressionConstructor.condition<Data, number>(
      ExpressionConstructor.equality<Data, string>(
        ExpressionConstructor.fieldReference<Data, string>("sexe"),
        ExpressionConstructor.literalValue<Data, string>("H")
      ),
      ExpressionConstructor.literalValue(5),
      ExpressionConstructor.literalValue(-161)
    ),
    ExpressionConstructor.fieldReference<Data, number>("niveauActivite")
  )
);
const formula = `(10 * poids) + (6.25 * taille) - (5 * age )+ ((sexe == "H" ? 5 : -161) * niveauActivite)`;

const result: { [key: number]: any[] } = {};

const operator: { [key: number]: any[] } = {};
let counter = 0;
const tokeniser = (formul: string) => {
  counter++;
  let stackCounter = 0;
  let lastIndex = 1;
  formul.split("").forEach((char: string, index: number) => {
    if (char === "(") {
      if (stackCounter === 0) lastIndex = index + 1;
      stackCounter++;
      return;
    } else if (char === ")") {
      stackCounter--;
    }
    if (stackCounter === 0) {
      if (["+", "-", "*", "/"].includes(char.trim())) {
        operator[counter]
          ? operator[counter].push(char)
          : (operator[counter] = [char]);
      } else if (char === ")") {
        const token = formul.slice(lastIndex, index);
        const regex = /\w+\s+[\+\-\/\*]\s+\w+/;
        if (!regex.test(token)) {
          tokeniser(token);
        } else {
          result[counter]
            ? result[counter].push(token)
            : (result[counter] = [token]);
        }
      }
    }
  });
};

const fTokeniser = new Tokeniser()


const fParser = new FormularParser()
fParser.execute(fTokeniser.execute(formula))