import Select from "@/components/Select";
import weaponDamage from "@/features/Form/data/weapon-damage.json";
import { useStaticticSheet } from "@/features/Sheet/hook/useSheet";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../../types/Form.types";
import { Fragment, useState } from "react";
import uuid from "react-uuid";
import Input from "@/components/Input";
import { Attack, AttackType } from "./Attacks.types";
import Autocomplete from "@/components/Autocomplete/Autocomplete";

const initialAttack = {
  id: uuid(),
  name: "",
  damage: "",
  type: AttackType.MELEE,
};

export default function Attacks() {
  const [attacks, setAttacks] = useState<Attack[]>([initialAttack]);
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
        name: formAttacks[index].name,
        damage: formAttacks[index].damage,
        type: formAttacks[index].type,
      },
    ]);
  }

  return (
    <fieldset className="attacks grid grid-cols-1 lg:grid-cols-6 gap-3">
      <legend className="text-primary text-xl font-bold mb-2">
        <h2>Ataques</h2>
      </legend>
      {attacks.map((attack, index) => (
        <Fragment key={attack.id}>
          <Autocomplete
            className="md:col-span-2"
            name={`attacks.${index}.name`}
            label="Nome do Ataque"
            placeholder="Comece a digitar..."
            options={[
              "Faro",
              "Visão no Escuro",
              "Presença Aterradora",
              "Agarrar Aprimorado",
              "Imunidade a Fogo",
            ]}
          />
          <Select
            className="md:col-span-2"
            {...register(`attacks.${index}.type`)}
            label="Tipo de Ataque"
          >
            <option value={AttackType.MELEE}>Corpo a Corpo</option>
            <option value={AttackType.RANGE}>À Distância</option>
          </Select>

          <Select
            className="md:col-span-1"
            {...register(`attacks.${index}.damage`)}
            label="Dano"
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
