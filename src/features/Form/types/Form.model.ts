import { Roles, SavingThrows } from "@/features/Sheet/types/sheet";
import { FormInput } from "./Form.types";
import { AttackType } from "../components/Attacks/Attacks.types";

export const roles: Roles[] = ["lacaio", "solo", "especial"];
export const savingThrows: SavingThrows[] = ["fortitude", "reflex", "will"];

export const IntialForm: FormInput = {
  weak: null,
  medium: null,
  strong: null,
  nd: "1/4",
  role: "lacaio",
  attacks: [{ damage: "1d4", type: AttackType.MELEE, name: "" }],
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
};
