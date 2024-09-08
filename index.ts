import { FormularParser } from "./parser/FormularParser";
import { Tokeniser } from "./tokeniser/FormularTokeniser";
import { FormularInterpreter } from "./interpreter/FormularInterpreter";
const data: Data = {
   age: 20,
   sexe: "H",
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
const formula = `(10 * poids) + (6.25 * taille) - (5 * age ) + ((sexe == "H" ? 5 : (-161)) * niveauActivite)`;

const fTokeniser = new Tokeniser();
const fParser = new FormularParser();
const fInterpreter = new FormularInterpreter();
const astTree = fParser.execute(fTokeniser.execute(formula))
console.log(fInterpreter.execute<Data>(astTree, data))
