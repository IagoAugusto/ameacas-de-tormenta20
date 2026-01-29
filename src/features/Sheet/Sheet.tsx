// TODO: Depende no tipo de criatura
import { useMemo } from "react";
// import { Statistics, estatisticaLacaio } from "./tableByTypes";
import { Roles, NívelResistência } from "@/features/Sheet/types/sheet";
import minions from "./data/minions-table";

interface CharacterSheetProps {
  nd: string;
  name: string;
  role: Roles;
  fortitude: NívelResistência;
  reflexos: NívelResistência;
  vontade: NívelResistência;
}

const statistics: { [name: string]: Array<(typeof minions)[0]> } = {
  lacaio: minions,
};

function CharacterSheet({
  name,
  nd,
  role,
  fortitude,
  vontade,
  reflexos,
}: CharacterSheetProps) {
  function findStatisticByND(nd: string) {
    return statistics[role]?.find((statistic) => statistic.ND === nd);
  }

  const statistic = useMemo(() => findStatisticByND(nd), [nd, role]);

  //TODO: Calcular dano médio baseado no tipo de criatura
  function getDamageRoll(damage: number | undefined) {
    if (!damage) return "";

    const averageDamage = Math.floor(damage / 2);
    return `1D${averageDamage}+${averageDamage}`;
  }

  return (
    <div className="character-sheet">
      <div className="border-b-2 border-primary pb-2 mb-2">
        <div className="flex justify-between border-b-2 border-primary text-primary font-bold text-2xl mb-2">
          <span>Criatura</span>
          <span>ND {nd}</span>
        </div>
        <p className="flex">
          <div>
            <span className="text-primary font-bold">Defesa: </span>
            <span>{statistic?.defesa},&nbsp;</span>
          </div>
          <div>
            <span className="text-primary font-bold">Resistência Forte: </span>
            <span>{statistic?.resistência_forte},&nbsp;</span>
          </div>
          <div>
            <span className="text-primary font-bold">Resistência Média: </span>
            <span>{statistic?.resistência_média},&nbsp;</span>
          </div>
          <div>
            <span className="text-primary font-bold">Resistência Fraca:</span>
            <span>{statistic?.resistência_fraca}</span>
          </div>
        </p>
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
