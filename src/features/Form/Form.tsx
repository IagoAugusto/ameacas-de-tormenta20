import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { IFormInput, FormProps } from "./Form.types";
import { FormModel } from "./Form.model";

function Form({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: FormModel(),
  });

  return (
    <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <legend className="text-primary text-xl font-bold">
          <h2>Conceito e ND</h2>
        </legend>

        <Select error={errors.role} label="Papel" {...register("role")}>
          <option value="lacaio">Lacaio</option>
          <option value="solo">Solo</option>
          <option value="especialista">Especialista</option>
        </Select>

        <Select error={errors.nd} label="ND" {...register("nd")}>
          <option value="1/4">Iniciante 1/4</option>
          <option value="1/2">Iniciante 1/2</option>
          <option value="1">Iniciante 1</option>
          <option value="2">Iniciante 2</option>
          <option value="3">Iniciante 3</option>
          <option value="4">Iniciante 4</option>
        </Select>
      </fieldset>

      <button className="p-3 border font-semibold rounded-md" type="submit">
        Criar
      </button>
    </form>
  );
}

export default Form;
