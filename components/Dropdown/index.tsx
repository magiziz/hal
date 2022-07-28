import React from "react";
import { ArrowDown, ChevronDown } from "react-feather";
import { useDetectClickOutside } from "react-detect-click-outside";

// Dropdown interface
interface DropdownProp {
  option: string;
  setOption: (name: string) => void;
  activeOverlay: boolean;
  setActiveOverlay: (bool: boolean) => void;
  className?: string;
}

// Dropdown component
const Dropdown: React.FC<DropdownProp> = ({
  option,
  setOption,
  activeOverlay,
  setActiveOverlay,
  className,
}) => {
  // ref outside click detector
  const ref = useDetectClickOutside({
    onTriggered: () => setActiveOverlay(false),
  });

  // options dropdown
  const options = ["Swap", "Mint", "Burnt"];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={ref}>
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-uniswap-bg-600 text-white text-sm font-medium hover:opacity-75 focus:outline-none"
        onClick={() => setActiveOverlay(!activeOverlay)}
      >
        {option}
        <ChevronDown size={20} className={"ml-2"} />
      </button>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all ease-in-out delay-25 ${
          activeOverlay ? "opacity-1" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="py-1">
          {options.map((opt: string) => (
            <h1
              key={opt}
              className="text-white bg-uniswap-bg-600 border border-gray-300 block px-4 py-3 text-sm cursor-pointer hover:text-gray-300 [&:nth-child(1)]:rounded-t [&:nth-child(3)]:rounded-b"
              onClick={() => {
                setActiveOverlay(false);
                setOption(opt);
              }}
            >
              {opt}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
