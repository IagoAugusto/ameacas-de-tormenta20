import { FormProvider, useForm } from "react-hook-form";
import Select from "@/components/Select";
import SavingThrowsSelect from "./components/SavingThrowsSelect";
import { FormInput, FormProps } from "./types/Form.types";
import { IntialForm, roles } from "./types/Form.model";
import { validationSchema } from "./schemas/Form.yup";
import { yupResolver } from "@hookform/resolvers/yup";
import minions from "./data/minions.json";
import Attacks from "./components/Attacks";
import Input from "@/components/Input";

function Form({ onSubmit }: FormProps) {
  const methods = useForm<FormInput>({
    defaultValues: IntialForm,
    resolver: yupResolver(validationSchema),
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, dirtyFields },
  } = methods;

  const onChangeSavingThrow = async () => {
    const { strong, medium, weak } = dirtyFields;
    const dirtyFieldsNumber = [strong, medium, weak].filter(Boolean).length;
    if (dirtyFieldsNumber >= 2) {
      await trigger(["strong", "medium", "weak"]);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="grid grid-cols-3 md:grid-cols-6 gap-3">
          <legend className="text-primary text-xl font-bold mb-2">
            <h2>Atributos</h2>
          </legend>
          <Input
            {...register("strength", { valueAsNumber: true })}
            label="For"
            type="number"
            min="0"
            max="20"
          />
          <Input
            {...register("dexterity", { valueAsNumber: true })}
            label="Des"
            type="number"
            min="-5"
            max="20"
          />
          <Input
            {...register("constitution", { valueAsNumber: true })}
            label="Con"
            type="number"
            min="0"
            max="20"
          />
          <Input
            {...register("intelligence", { valueAsNumber: true })}
            label="Int"
            type="number"
            min="-5"
            max="20"
          />
          <Input
            {...register("wisdom", { valueAsNumber: true })}
            label="Sab"
            type="number"
            min="-5"
            max="20"
          />
          <Input
            {...register("charisma", { valueAsNumber: true })}
            label="Car"
            type="number"
            min="-5"
            max="20"
          />
        </fieldset>
        <fieldset className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <legend className="text-primary text-xl font-bold mb-2">
            <h2>Conceito e ND</h2>
          </legend>

          <Select error={errors.role} label="Papel" {...register("role")}>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </Select>

          <Select error={errors.nd} label="ND" {...register("nd")}>
            {minions.map((minion) => (
              <option key={minion.ND} value={minion.ND}>
                {minion.patamar} {minion.ND}
              </option>
            ))}
          </Select>
        </fieldset>

        <fieldset className="saving-throws grid grid-cols-1 md:grid-cols-3 gap-3">
          <SavingThrowsSelect
            label="Forte"
            error={errors.strong}
            {...register("strong", { onChange: onChangeSavingThrow })}
          />
          <SavingThrowsSelect
            label="Médio"
            error={errors.medium}
            {...register("medium", { onChange: onChangeSavingThrow })}
          />
          <SavingThrowsSelect
            label="Fraco"
            error={errors.weak}
            {...register("weak", { onChange: onChangeSavingThrow })}
          />
        </fieldset>

        <Attacks />

        <button
          className="p-3 border font-semibold rounded-md bg-primary text-white hover:bg-primary-dark"
          type="submit"
        >
          Criar
        </button>
      </form>
    </FormProvider>
  );
}

export default Form;
