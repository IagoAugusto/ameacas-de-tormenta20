import { useMemo } from "react";
import { statistics, Statistic } from "@/features/Sheet/types/sheet";
import { Roles } from "@/features/Sheet/types/sheet";

function findStatisticByND(nd: string, role: Roles): Statistic {
  return (
    statistics[role]?.find((statistic) => statistic.ND === nd) ??
    statistics[role][0]
  );
}

export const useStaticticSheet = (nd: string, role: Roles) => {
  return useMemo(() => findStatisticByND(nd, role), [nd, role]);
};
