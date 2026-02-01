import { Roles, SavingThrows } from "@/features/Sheet/types/sheet";
import { FormInput } from "./Form.types";

export const roles: Roles[] = ["lacaio", "solo", "especial"];
export const savingThrows: SavingThrows[] = ["fortitude", "reflex", "will"];

export const IntialForm: FormInput = {
  weak: null,
  medium: null,
  strong: null,
  nd: "1/4",
  role: "lacaio",
  attacks: [{ damage: "", type: "melee" }],
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
};
