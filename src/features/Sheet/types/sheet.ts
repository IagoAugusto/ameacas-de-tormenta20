import minions from "../data/minions-table";

export type Roles = "lacaio" | "solo" | "especialista";
export type SavingThrows = "reflex" | "will" | "fortitude";

export interface CharacterSheetProps {
  nd: string;
  role: Roles;
  weak: SavingThrows | null;
  medium: SavingThrows | null;
  strong: SavingThrows | null;
}

export interface StatisticsTable {
  [name: string]: Array<(typeof minions)[0]>;
}

export const statistics: StatisticsTable = {
  lacaio: minions,
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
