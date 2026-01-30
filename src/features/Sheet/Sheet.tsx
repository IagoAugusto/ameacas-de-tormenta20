import { useMemo } from "react";
import {
  CharacterSheetProps,
  SavingThrows,
  Statistic,
  statistics,
} from "@/features/Sheet/types/sheet";

function CharacterSheet({
  nd,
  role,
  weak,
  medium,
  strong,
}: CharacterSheetProps) {
  function findStatisticByND(nd: string) {
    return (
      statistics[role]?.find((statistic) => statistic.ND === nd) ??
      statistics[role][0]
    );
  }

  const statistic: Statistic = useMemo(() => findStatisticByND(nd), [nd, role]);

  //TODO: Calcular dano médio baseado no tipo de criatura
  function getDamageRoll(damage: number | undefined) {
    if (!damage) return "";

    const averageDamage = Math.floor(damage / 2);
    return `1D${averageDamage}+${averageDamage}`;
  }

  function addPlusSign(value: number) {
    return value >= 0 ? `+${value}` : `${value}`;
  }

  function getSavingThrowLabel(savingThrow: SavingThrows): string {
    if (weak === savingThrow) return `${addPlusSign(statistic?.weak)}`;
    if (medium === savingThrow) return `${addPlusSign(statistic?.medium || 0)}`;
    if (strong === savingThrow) return `${addPlusSign(statistic?.strong || 0)}`;
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
      <div>
        <span className="text-primary font-bold">Ataque </span>
        <span>+{statistic?.bônus_de_ataque} </span>
        <span>({getDamageRoll(statistic?.dano_médio)}, 19).</span>
      </div>
      <div>
        <span className="text-primary font-bold">CD de Resistência </span>
        <span>{statistic?.efeito}</span>
      </div>
    </div>
  );
}

export default CharacterSheet;
