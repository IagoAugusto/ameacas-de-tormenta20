import Select from "@/components/Select";
import { FieldError } from "react-hook-form";

interface SavingThrowsSelectProps {
  label?: string;
  error?: FieldError;
  removedOptions?: string[];
}

export default function SavingThrowsSelect({
  label,
  error,
  removedOptions,
  ...props
}: SavingThrowsSelectProps) {
  return (
    <Select {...props} error={error} label={label}>
      <option value="">Selecione</option>
      <option value="fortitude">Fortitude</option>
      <option value="reflex">Reflexo</option>
      <option value="will">Vontade</option>
    </Select>
  );
}
