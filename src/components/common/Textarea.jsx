import React from "react";
import Label from "./Label";

function Textarea({ label, className = "", ...props }, ref) {
  return (
    <div className="w-full">
      {label && <Label>{label}</Label>}
      <textarea
        style={{ resize: "vertical" }}
        id="small_size"
        col={2}
        className={`nodrag bg-gray-50 border max-h-[200px] border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 block w-full ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Textarea);
