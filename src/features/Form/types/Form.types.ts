import { Roles, SavingThrows } from "@/features/Sheet/types/sheet";

interface Attack {
  damage: string;
  type: string;
}

export interface FormInput {
  nd: string;
  role: Roles;
  strong: SavingThrows | null;
  medium: SavingThrows | null;
  weak: SavingThrows | null;
  attacks: Attack[];
}

export interface FormProps {
  onSubmit: (data: FormInput) => void;
}
