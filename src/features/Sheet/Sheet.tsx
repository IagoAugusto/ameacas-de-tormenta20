import { useMemo } from "react";
import {
  CharacterSheetProps,
  SavingThrows,
  Statistic,
  statistics,
} from "@/features/Sheet/types/sheet";
import { useStaticticSheet } from "./hook/useSheet";

function CharacterSheet({
  nd,
  role,
  weak,
  medium,
  strong,
  attacks,
}: CharacterSheetProps) {
  console.log(attacks);
  const statistic = useStaticticSheet(nd, role);

  function getDamageRoll(
    averageDamage: number | undefined,
    attackDamage: string,
  ): string {
    if (!averageDamage) return "";
    const diceQuantity = parseInt(attackDamage.split("d")[0]);
    const damageDice = parseInt(attackDamage.split("d")[1]);

    const extraDamage = averageDamage - diceQuantity * damageDice;
    return `${attackDamage}+${extraDamage}`;
  }

  function addPlusSign(value: number) {
    return value >= 0 ? `+${value}` : `${value}`;
  }

  function getSavingThrowLabel(savingThrow: SavingThrows): string {
    if (weak === savingThrow) return `${addPlusSign(statistic.weak)}`;
    if (medium === savingThrow) return `${addPlusSign(statistic.medium || 0)}`;
    if (strong === savingThrow) return `${addPlusSign(statistic.strong || 0)}`;
    return "";
  }

  return (
    <div className="character-sheet">
      <div className="border-b-2 border-primary pb-2 mb-2">
        <div className="flex justify-between border-b-2 border-primary text-primary font-bold text-2xl mb-2">
          <span>Criatura</span>
          <span>ND {nd}</span>
        </div>
        <div className="flex">
          <div>
            <span className="text-primary font-bold">Defesa: </span>
            <span>{statistic?.defesa},&nbsp;</span>
          </div>
          <div>
            <span className="text-primary font-bold">Fort </span>
            <span>{getSavingThrowLabel("fortitude")},&nbsp;</span>
          </div>
          <div>
            <span className="text-primary font-bold">Ref </span>
            <span>{getSavingThrowLabel("reflex")},&nbsp;</span>
          </div>
          <div>
            <span className="text-primary font-bold">Von </span>
            <span>{getSavingThrowLabel("will")}</span>
          </div>
        </div>
        <div>
          <span className="text-primary font-bold">Pontos de Vida: </span>
          <span>{statistic?.PV}</span>
        </div>
      </div>
      {attacks.map((attack, index) => (
        <div key={index}>
          <span className="text-primary font-bold">
            {attack.type === "melee" ? "Corpo a Corpo" : "Distância"}{" "}
          </span>
          <span>+{statistic?.bônus_de_ataque} </span>
          <span>
            ({getDamageRoll(statistic?.dano_médio, attack.damage)}, 19).
          </span>
        </div>
      ))}
      <div>
        <span className="text-primary font-bold">CD de Resistência </span>
        <span>{statistic?.efeito}</span>
      </div>
    </div>
  );
}

export default CharacterSheet;
