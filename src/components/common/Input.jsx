import React from "react";
import Label from "./Label";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const isFile = type.toLocaleLowerCase() === "file";

  return (
    <div className="w-full">
      {label && <Label>{label}</Label>}
      <input
        id="small_size"
        className={`nodrag bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 block w-full ${
          isFile ? "py-0 px-0" : ""
        } file:h-full file:px-3 file:mr-4 file:bg-[#4338ca11] file:text-[#4338ca] file:border-0  file:font-semibold ${className}`}
        type={type}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
