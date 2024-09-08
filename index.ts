import { ExpressionConstructor } from "./expression/ExpressionConstructor";
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

//

const exp = ExpressionConstructor.addition<Data>(
   ExpressionConstructor.substration<Data>(
      ExpressionConstructor.addition<Data>(
         ExpressionConstructor.multiplication<Data>(
            ExpressionConstructor.literalValue<Data>(10),
            ExpressionConstructor.fieldReference<Data, number>("poids"),
         ),
         ExpressionConstructor.multiplication<Data>(
            ExpressionConstructor.literalValue<Data>(6.25),
            ExpressionConstructor.fieldReference<Data, number>("taille"),
         ),
      ),
      ExpressionConstructor.multiplication<Data>(
         ExpressionConstructor.literalValue<Data>(5),
         ExpressionConstructor.fieldReference<Data, number>("age"),
      ),
   ),
   ExpressionConstructor.multiplication<Data>(
      ExpressionConstructor.condition<Data, number>(
         ExpressionConstructor.equality<Data, string>(
            ExpressionConstructor.fieldReference<Data, string>("sexe"),
            ExpressionConstructor.literalValue<Data, string>("H"),
         ),
         ExpressionConstructor.literalValue(5),
         ExpressionConstructor.literalValue(-161),
      ),
      ExpressionConstructor.fieldReference<Data, number>("niveauActivite"),
   ),
);
const formula = `(10 * poids) + (6.25 * taille) - (5 * age ) + ((sexe == "H" ? 5 : (-161)) * niveauActivite)`;

const fTokeniser = new Tokeniser();
const fParser = new FormularParser();
const fInterpreter = new FormularInterpreter();
const astTree = fParser.execute(fTokeniser.execute(formula))
fInterpreter.execute<Data>(astTree, data);
