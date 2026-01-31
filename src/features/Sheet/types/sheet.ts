import minions from "@/features/Form/data/minions.json";
import especiais from "@/features/Form/data/especiais.json";
import solos from "@/features/Form/data/solos.json";
import { FormInput } from "@/features/Form/types/Form.types";

export type Roles = "lacaio" | "solo" | "especial";
export type SavingThrows = "reflex" | "will" | "fortitude";

export interface CharacterSheetProps extends FormInput {}

export type StatisticsTable = {
  [K in Roles]: Statistic[];
};

export const statistics: StatisticsTable = {
  lacaio: minions,
  solo: solos,
  especial: especiais,
};

export interface Statistic {
  patamar: string;
  ND: string;
  bônus_de_ataque: number;
  dano_médio: number;
  defesa: number;
  strong: number;
  medium: number;
  weak: number;
  PV: number;
  efeito: number;
}
