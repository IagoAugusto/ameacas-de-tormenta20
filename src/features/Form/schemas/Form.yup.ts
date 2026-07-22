import { Roles, SavingThrows } from "@/features/Sheet/types/sheet";
import * as yup from "yup";
import { FormInput } from "../types/Form.types";
import { roles, savingThrows } from "../types/Form.model";
import { AttackType } from "../components/Attacks/Attacks.types";

export const validationSchema: yup.ObjectSchema<FormInput> = yup.object({
  role: yup.mixed<Roles>().oneOf(roles, "Invalid value").required("Required"),
  nd: yup.string().required("Required"),
  strong: yup
    .mixed<SavingThrows>()
    .oneOf(savingThrows, "Obrigatório")
    .notOneOf(
      [yup.ref("medium"), yup.ref("weak")],
      "Precisa ser diferente dos outros testes de resistência",
    )
    .required("Obrigatório"),
  medium: yup
    .mixed<SavingThrows>()
    .oneOf(savingThrows, "Obrigatório")
    .notOneOf(
      [yup.ref("strong"), yup.ref("weak")],
      "Precisa ser diferente dos outros testes de resistência",
    )
    .required("Obrigatório"),
  weak: yup
    .mixed<SavingThrows>()
    .oneOf(savingThrows, "Obrigatório")
    .notOneOf(
      [yup.ref("strong"), yup.ref("medium")],
      "Precisa ser diferente dos outros testes de resistência",
    )
    .required("Obrigatório"),
  attacks: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        type: yup
          .string()
          .oneOf(Object.values(AttackType), "Tipo inválido")
          .required(),
        damage: yup.string().required(),
      }),
    )
    .required(),
  strength: yup.number().min(0, "Mínimo 0").required(),
  dexterity: yup.number().min(0, "Mínimo 0").required(),
  constitution: yup.number().min(0, "Mínimo 0").required(),
  intelligence: yup.number().min(0, "Mínimo 0").required(),
  wisdom: yup.number().min(0, "Mínimo 0").required(),
  charisma: yup.number().min(0, "Mínimo 0").required(),
});
