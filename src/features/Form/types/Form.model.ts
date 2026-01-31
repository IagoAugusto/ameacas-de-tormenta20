import { Roles, SavingThrows } from "@/features/Sheet/types/sheet";
import { FormInput } from "./Form.types";

export const roles: Roles[] = ["lacaio", "solo", "especial"];
export const savingThrows: SavingThrows[] = ["fortitude", "reflex", "will"];

export const IntialForm: FormInput = {
  weak: null,
  medium: null,
  strong: null,
  nd: "",
  role: "lacaio",
};
