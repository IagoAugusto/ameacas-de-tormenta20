// TODO: Depende no tipo de criatura
import { useMemo } from "react";
import { Statistics, estatisticaLacaio } from "./tableByTypes";
import { Roles, NívelResistência } from "types/characterSheet";

interface CharacterSheetProps {
  nd: string;
  name: string;
  role: Roles;
  fortitude: NívelResistência;
  reflexos: NívelResistência;
  vontade: NívelResistência;
}

const statistics: { [name: string]: Statistics[] } = {
  lacaio: estatisticaLacaio,
};

function CharacterSheet({
  name,
  nd,
  role,
  fortitude,
  vontade,
  reflexos,
}: CharacterSheetProps) {
  // This is the statistic from the official book
  const statistic = useMemo(
    () => statistics[role]?.find((statistic) => statistic.ND === nd),
    [nd, role]
  );
  console.log("statistic", statistic);

  return (
    <div className="character-sheet">
      <div className="flex justify-between items-baseline font-semibold mb-7">
        <p className="text-red text-7xl">{name}</p>
        <p className="text-red text-5xl">{nd}</p>
      </div>
      <p>Tipo do Monstro</p>
      <div className="resistence flex">
        <span className="highlight">Defesa</span> {statistic?.defesa},
        <span className="highlight">Fort</span> {statistic?.[fortitude]},
        <span className="highlight">Ref</span> {statistic?.[reflexos]},
        <span className="highlight">Von</span> {statistic?.[vontade]},
      </div>
      HP {statistic?.PV}
      <p>
        <span></span>
      </p>
    </div>
  );
}

export default CharacterSheet;
