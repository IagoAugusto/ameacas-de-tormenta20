interface TooltipProps {
  message?: string;
}

function Tooltip({ message }: TooltipProps) {
  return (
    <div className="group relative flex flex-col items-center">
      <button className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white font-bold">
        ?
      </button>

      <div className="absolute bottom-full mb-3 hidden flex-col items-center group-hover:flex">
        <span className="whitespace-nowrap rounded-md bg-gray-800 px-3 py-1.5 text-xs text-white shadow-lg">
          {message}
        </span>
        <div className="-mt-2 h-3 w-3 rotate-45 bg-gray-800"></div>
      </div>
    </div>
  );
}

export default Tooltip;
