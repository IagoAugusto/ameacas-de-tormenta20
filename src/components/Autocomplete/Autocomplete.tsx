import { useState, useRef, useEffect, forwardRef } from "react";
import classNames from "classnames";
import { Controller, FieldError, useFormContext } from "react-hook-form";

interface AutocompleteProps {
  label?: string;
  name: string;
  options: string[];
  placeholder?: string;
  className?: string;
}

const Autocomplete = ({
  label,
  name,
  options,
  placeholder,
  className,
}: AutocompleteProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const methods = useFormContext();

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.toLowerCase().includes(query.toLowerCase()),
        );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setQuery(option);
    setIsOpen(false);
    methods.setValue(name, option);
  };

  return (
    <Controller
      control={methods.control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <div
          className={classNames("flex flex-col col-span-1 relative", className)}
          ref={wrapperRef}
        >
          {label && (
            <label className="text-black mb-1" htmlFor={name}>
              {label}
            </label>
          )}

          <div className="relative">
            <input
              ref={ref}
              id={name}
              type="text"
              className={classNames(
                "w-full p-3 rounded-md border-solid border-2 transition-colors",
                {
                  "border-black focus:border-primary": !error,
                  "border-red focus:border-red-700": error,
                },
              )}
              placeholder={placeholder}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                onChange(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              autoComplete="off"
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {error && (
            <span className="text-red text-sm mt-1">{error.message}</span>
          )}

          {isOpen && filteredOptions.length > 0 && (
            <ul className="absolute z-50 w-full bg-white border-2 border-black rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-red-100 hover:text-primary cursor-pointer transition-colors border-b last:border-b-0 border-gray-100"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    />
  );
};

export default Autocomplete;
