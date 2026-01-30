import Select from "@/components/Select";
import classNames from "classnames";

export default function SavingThrowsSelect({
  label,
  error,
  removedOptions,
  ...props
}: any) {
  return (
    <Select {...props} error={error} label={label}>
      <option value="">Selecione</option>
      <option value="fortitude">Fortitude</option>
      <option value="reflex">Reflexo</option>
      <option value="will">Vontade</option>
    </Select>
  );
}
