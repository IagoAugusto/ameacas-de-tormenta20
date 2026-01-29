import { InputHTMLAttributes, Ref, forwardRef } from "react";
import classNames from "classnames";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<unknown> {
  label?: string;
  error?: FieldError;
}

function Input(
  { className, error, label, name, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className={classNames("flex flex-col col-span-1", className)}>
      <label className="text-black" htmlFor={name}>{label}</label>
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
          {error.message}
        </span>
      )}
    </div>
  );
}

export default forwardRef(Input);
