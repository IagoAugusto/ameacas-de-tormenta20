import { useForm } from "react-hook-form";
import Select from "@/components/Select";
import SavingThrowsSelect from "./components/SavingThrowsSelect";
import { FormInput, FormProps } from "./types/Form.types";
import { IntialForm, roles } from "./types/Form.model";
import { validationSchema } from "./schemas/Form.yup";
import { yupResolver } from "@hookform/resolvers/yup";
import minions from "./data/minions.json";

function Form({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, dirtyFields },
  } = useForm<FormInput>({
    defaultValues: IntialForm,
    resolver: yupResolver(validationSchema),
  });

  const onChangeSavingThrow = async () => {
    const dirtyFieldsNumber = Object.keys(dirtyFields).length;
    if (dirtyFieldsNumber >= 2) {
      await trigger(["strong", "medium", "weak"]);
    }
  };

  return (
    <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit(onSubmit)}>
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

      <button
        className="p-3 border font-semibold rounded-md bg-primary text-white hover:bg-primary-dark"
        type="submit"
      >
        Criar
      </button>
    </form>
  );
}

export default Form;
