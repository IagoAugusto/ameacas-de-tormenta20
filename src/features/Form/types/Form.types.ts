import { Roles, SavingThrows } from "@/features/Sheet/types/sheet";

export interface FormInput {
  nd: string;
  role: Roles;
  strong: SavingThrows | null;
  medium: SavingThrows | null;
  weak: SavingThrows | null;
}

export interface FormProps {
  onSubmit: (data: FormInput) => void;
}
