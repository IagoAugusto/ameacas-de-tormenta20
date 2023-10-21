import { InputHTMLAttributes, Ref, forwardRef } from "react";
import classNames from "classnames";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<unknown> {
  label?: string;
  error?: FieldError;
}

function Input(
  { className, error, label, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
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
      <label className="text-black">{label}</label>
      <input
        className={classNames("p-3 rounded-md border-solid border-2", {
          "border-black": !error,
          "border-red": error,
        })}
        ref={ref}
        {...props}
      />
      {error && (
        <span className="text-red">
          {error.message || getErrorMessage(error.type)}
        </span>
      )}
    </div>
  );
}

export default forwardRef(Input);
