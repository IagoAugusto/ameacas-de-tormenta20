import { Roles, SavingThrows } from "@/features/Sheet/types/sheet";
import * as yup from "yup";
import { FormInput } from "../types/Form.types";
import { roles, savingThrows } from "../types/Form.model";

export const validationSchema: yup.ObjectSchema<FormInput> = yup.object({
  role: yup.mixed<Roles>().oneOf(roles, "Invalid value").required("Required"),
  nd: yup.string().required("Required"),
  strong: yup
    .mixed<SavingThrows>()
    .oneOf(savingThrows, "Invalid value")
    .notOneOf(
      [yup.ref("medium"), yup.ref("weak")],
      "Must be different from other saving throws",
    )
    .required("required"),
  medium: yup
    .mixed<SavingThrows>()
    .oneOf(savingThrows, "Invalid value")
    .notOneOf(
      [yup.ref("strong"), yup.ref("weak")],
      "Must be different from other saving throws",
    )
    .required("Required"),
  weak: yup
    .mixed<SavingThrows>()
    .oneOf(savingThrows, "Invalid value")
    .notOneOf(
      [yup.ref("strong"), yup.ref("medium")],
      "Must be different from other saving throws",
    )
    .required("Required"),
});
