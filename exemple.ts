import SmartCalc from "./index"
const data: Data = {
   age: 20,
   sexe: "H",
   poids: 60,
   taille: 1.64,
   niveauActivite: 1.56,
   f_IMC: "10+5",
};

type Data = {
   age: number;
   sexe: string;
   poids: number;
   taille: number;
   niveauActivite: number;
   f_IMC: string;
};
const formular = `(10 * poids) + (6.25 * taille) - (5 * age ) + ((sexe == "H" ? 5 : (-161)) * niveauActivite) * f_IMC`;
const condition = `(10 + ((10 > 5) ? ((11+5)-5) : "false"))`;


console.log(SmartCalc<Data>(formular,data))