import React from "react";
import Label from "./Label";

function Select({ label, options = [], className = "", ...props }, ref) {
  return (
    <div className="w-full">
      {label && <Label>{label}</Label>}
      <select
        className={`nodrag bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   disabled:bg-gray-300 ${className}`}
        ref={ref}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-sm">
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
