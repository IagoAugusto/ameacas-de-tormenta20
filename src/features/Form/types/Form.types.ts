import { Roles, SavingThrows } from "@/features/Sheet/types/sheet";

interface Attack {
  damage: string;
  type: "melee" | "range";
}

export interface FormInput {
  nd: string;
  role: Roles;
  strong: SavingThrows | null;
  medium: SavingThrows | null;
  weak: SavingThrows | null;
  attacks: Attack[];
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface FormProps {
  onSubmit: (data: FormInput) => void;
}
