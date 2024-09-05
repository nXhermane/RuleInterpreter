import { FieldReference } from "./expression/FieldReference";

const field = {
  name: "key",
};

type filedType = {
  name: string;
};

const ex = new FieldReference<filedType,string>("name")

console.log(ex.execute(field))
