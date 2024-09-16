import { FormularParser } from "./parser/FormularParser";
import { FormularTokeniser } from "./tokeniser/FormularTokeniser";
import { FormularInterpreter } from "./interpreter/FormularInterpreter";

export default function SmartCalc<T extends { [key: string]: number | string }>(expression: string, obj: T): number | string {
   const fTokeniser = new FormularTokeniser();
   const fParser = new FormularParser();
   const fInterpreter = new FormularInterpreter();
   return fInterpreter.execute<T>(fParser.execute(fTokeniser.execute(expression)), obj);
}
