import { use, useMemo } from "react";
import {
  CharacterSheetProps,
  SavingThrows,
  Statistic,
  statistics,
} from "@/features/Sheet/types/sheet";
import { useStaticticSheet } from "./hook/useSheet";
import { useGrimoireSheet } from "./hook/useGrimoireSheet";

function CharacterSheet({
  nd,
  role,
  weak,
  medium,
  strong,
  attacks,
  charisma,
  constitution,
  dexterity,
  intelligence,
  strength,
  wisdom,
}: CharacterSheetProps) {
  const statistic = useStaticticSheet(nd, role);

  function getDamageRoll(
    averageDamage: number = 0,
    attackDamage: string = "",
  ): string {
    if (!averageDamage) return "";
    const diceQuantity = parseInt(attackDamage.split("d")[0]);
    const damageDice = parseInt(attackDamage.split("d")[1]);

    const extraDamage = averageDamage - diceQuantity * damageDice;
    return `${attackDamage}+${isNaN(extraDamage) ? 0 : extraDamage}`;
  }

  function addPlusSign(value: number) {
    return value >= 0 ? `+${value}` : `${value}`;
  }

  function getSavingThrowLabel(savingThrow: SavingThrows): string {
    if (weak === savingThrow) return `${addPlusSign(statistic.weak)}`;
    if (medium === savingThrow) return `${addPlusSign(statistic.medium)}`;
    if (strong === savingThrow) return `${addPlusSign(statistic.strong)}`;
    return "";
  }

  function getSavingThrowValue(savingThrow: SavingThrows): number {
    if (weak === savingThrow) return statistic.weak;
    if (medium === savingThrow) return statistic.medium;
    if (strong === savingThrow) return statistic.strong;
    return 0;
  }

  function handleExportSheet() {
    const sheetData = useGrimoireSheet({
      nd,
      charisma,
      constitution,
      dexterity,
      intelligence,
      strength,
      wisdom,
      statistic,
      getDamageRoll,
      getSavingThrowValue,
      attacks,
    });
    const sheetJson = JSON.stringify(sheetData, null, 2);
    const blob = new Blob([sheetJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `character_sheet_nd${nd}.json`;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    console.log("Sheet exported");
  }

  return (
    <div className="character-sheet">
      <div className="border-b-2 border-primary pb-2 mb-2">
        <div className="flex justify-between border-b-2 border-primary text-primary font-bold font-crimson text-3xl mb-2">
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
      {(attacks[0].damage || attacks[0].type) &&
        attacks.map((attack, index) => (
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
      <button
        onClick={handleExportSheet}
        className="mt-4 p-2 bg-primary text-white rounded-md"
      >
        Exportar
      </button>
    </div>
  );
}

export default CharacterSheet;
