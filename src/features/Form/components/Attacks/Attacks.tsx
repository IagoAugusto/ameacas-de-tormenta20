import Select from "@/components/Select";
import weaponDamage from "@/features/Form/data/weapon-damage.json";
import { useStaticticSheet } from "@/features/Sheet/hook/useSheet";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../../types/Form.types";
import { Fragment, useState } from "react";
import uuid from "react-uuid";

const initialAttack = { id: uuid(), damage: "", type: "" };

interface Attacks {
  id: string;
  damage: string;
  type: string;
}

export default function Attacks() {
  const [attacks, setAttacks] = useState<Attacks[]>([initialAttack]);
  const { register, watch } = useFormContext<FormInput>();
  const nd = watch("nd");
  const role = watch("role");
  const formAttacks = watch("attacks");
  const statistic = useStaticticSheet(nd, role);

  function getDiceAndDamage(attackDamage: string): number {
    const diceQuantity = parseInt(attackDamage.split("d")[0]);
    const damageDice = parseInt(attackDamage.split("d")[1]);
    return diceQuantity * damageDice;
  }

  function addAttack(index: number) {
    setAttacks((prev) => [
      ...prev,
      {
        id: uuid(),
        damage: formAttacks[index].damage,
        type: formAttacks[index].type,
      },
    ]);
  }

  return (
    <fieldset className="attacks grid grid-cols-1 md:grid-cols-3 gap-3">
      {attacks.map((attack, index) => (
        <Fragment key={attack.id}>
          <Select
            className="md:col-end-2"
            {...register(`attacks.${index}.type`)}
            label="Tipo de Ataque"
          >
            <option value="melee">Corpo a Corpo</option>
            <option value="range">À Distância</option>
          </Select>

          <Select
            {...register(`attacks.${index}.damage`)}
            label="Dano do Ataque"
            tooltip="Valores de dano inferiores ao padrão para ND selecionada ficam desabilitados."
          >
            {weaponDamage.map((weapon) => (
              <option
                key={weapon.normal}
                value={weapon.normal}
                disabled={
                  statistic.dano_médio < getDiceAndDamage(weapon.normal)
                }
              >
                {weapon.normal}
              </option>
            ))}
          </Select>

          {index === attacks.length - 1 && (
            <button
              type="button"
              className="w-max mt-6 px-3 py-0 border font-semibold rounded-full bg-primary text-white hover:bg-primary-dark"
              onClick={() => addAttack(index)}
            >
              +
            </button>
          )}
        </Fragment>
      ))}
    </fieldset>
  );
}
