import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { NívelResistência, Roles } from "types/characterSheet";

interface IFormInput {
  name: string;
  nd: string;
  role: Roles;
  fortitude: NívelResistência;
  reflexos: NívelResistência;
  vontade: NívelResistência;
}

interface FormProps {
  onSubmit: (data: IFormInput) => void;
}

function Form({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="grid grid-cols-4 gap-3">
          <legend className="text-red text-xl font-bold">
            <h2>Conceito e ND</h2>
          </legend>
          <Input
            error={errors.name}
            label="Nome"
            placeholder="Alenn Toren Greenfeld"
            {...register("name", { required: true })}
          />

          <Select error={errors.role} label="Papel" {...register("role")}>
            <option value="lacaio">Lacaio</option>
            <option value="solo">Solo</option>
            <option value="especialista">Especialista</option>
          </Select>

          <Select error={errors.nd} label="ND" {...register("nd")}>
            <option value="1/4">Iniciante 1/2</option>
            <option value="1/2">Iniciante 1/2</option>
            <option value="1">Iniciante 1</option>
            <option value="2">Iniciante 2</option>
            <option value="3">Iniciante 3</option>
            <option value="4">Iniciante 4</option>
          </Select>

          <Select label="Tipo" name="tipo">
            <option value="animal">Animal</option>
            <option value="humanoide">Humanoide</option>
            <option value="espirito">Espiríto</option>
            <option value="construto">Construto</option>
            <option value="morto-vivo">Morto-vivo</option>
            <option value="monstro">Monstro</option>
          </Select>

          <Select label="Tamanho" name="tamanho">
            <option value="minusculo">Minúsculo</option>
            <option value="pequeno">Pequeno</option>
            <option value="normal">Normal</option>
            <option value="grande">Grande</option>
            <option value="colossal">Colossal</option>
          </Select>
        </fieldset>

        {/* <fieldset className="grid grid-cols-6 gap-3 mt-7">
          <legend className="text-red text-xl font-bold">
            <h2>Atributos</h2>
          </legend>
          <Input name="forca" placeholder="0" label="Força" />
          <Input name="destreza" placeholder="0" label="Destreza" />
          <Input name="constituicao" placeholder="0" label="Constituição" />
          <Input name="inteligencia" placeholder="0" label="Inteligência" />
          <Input name="sabedoria" placeholder="0" label="Sabedoria" />
          <Input name="carisma" placeholder="0" label="Carisma" />
        </fieldset> */}

        <fieldset className="grid grid-cols-3 gap-3 mt-7">
          <legend className="text-red text-xl font-bold">
            <h2>Perícias</h2>
          </legend>
          <Select label="Fortitude" {...register("fortitude")}>
            <option value="resistência_fraca">Fraco</option>
            <option value="resistência_média">Médio</option>
            <option value="resistência_forte">Forte</option>
          </Select>
          <Select label="Reflexos" {...register("reflexos")}>
            <option value="resistência_fraca">Fraco</option>
            <option value="resistência_média">Médio</option>
            <option value="resistência_forte">Forte</option>
          </Select>
          <Select label="Vontade" {...register("vontade")}>
            <option value="resistência_fraca">Fraco</option>
            <option value="resistência_média">Médio</option>
            <option value="resistência_forte">Forte</option>
          </Select>
        </fieldset>

        <button
          className="p-3 border bg-red text-white font-semibold rounded-md mt-7"
          type="submit"
        >
          Criar
        </button>

        {/* <fieldset className="grid grid-cols-6 gap-3 mt-7">
          <legend className="text-red text-xl font-bold">
            <h2>Resistência</h2>
          </legend>
          <Input name="defesa" label="Defesa" />
          <Input name="fortitude" label="Fortitude" />
          <Input name="reflexos" label="Reflexos" />
          <Input name="vontade" label="Vontade" />
        </fieldset> */}
      </form>
    </div>
  );
}

export default Form;
