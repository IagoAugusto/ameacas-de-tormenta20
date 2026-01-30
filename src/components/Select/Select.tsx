import classNames from "classnames";
import { SelectHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<unknown> {
  label?: string;
  error?: FieldError;
}

function Select(
  { children, className, error, label, name, ...selectProps }: SelectProps,
  ref: React.Ref<HTMLSelectElement>,
) {
  return (
    <div className={classNames("flex flex-col col-span-1", className)}>
      <label htmlFor={name}>{label}</label>
      <select
        className={classNames(
          "p-3 rounded-md border-solid border-2 border-black",
          { "border-red": error },
        )}
        ref={ref}
        id={name}
        name={name}
        {...selectProps}
      >
        {children}
      </select>
      {error && <span className="text-red">{error.message}</span>}
    </div>
  );
}

export default forwardRef(Select);
