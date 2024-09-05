import { ExpressionConstructor } from "./expression/ExpressionConstructor";

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

//10 * poids + 6.25 * taille - 5 * age + (sexe == "H" ? 5 : -161) * niveauActivite

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

console.log(exp.execute(data));
