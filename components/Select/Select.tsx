import classNames from "classnames";
import { SelectHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<unknown> {
  label?: string;
  error?: FieldError;
}

function Select(
  { children, className, error, label, ...selectProps }: SelectProps,
  ref: React.Ref<HTMLSelectElement>
) {
  function getErrorMessage(error: string) {
    switch (error) {
      case "required":
        return "Campo obrigatório";
      default:
        return "Erro desconhecido";
    }
  }

  return (
    <div className={classNames("flex flex-col", className)}>
      <label htmlFor="name">{label}</label>
      <select
        className="p-3 rounded-md border-solid border-2 border-black"
        ref={ref}
        {...selectProps}
      >
        {children}
      </select>
      {error && (
        <span className="text-red">
          {error.message || getErrorMessage(error.type)}
        </span>
      )}
    </div>
  );
}

export default forwardRef(Select);
