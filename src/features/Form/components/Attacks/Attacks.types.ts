export enum AttackType {
  MELEE = "melee",
  RANGE = "range",
}

export interface Attack {
  id?: string;
  name: string;
  damage: string;
  type: AttackType;
}
