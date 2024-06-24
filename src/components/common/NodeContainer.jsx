import React from "react";

function NodeContainer({ className = "", children }) {
  return (
    <div
      className={`min-w-[250px] bg-white border border-[#3f83f8]  shadow-[#3f83f89f_0px_0px_2px_0px] hover:shadow-[#3f83f89f_0px_0px_5px_2px] duration-200  rounded-lg px-4 py-1 pb-3 ${className}`}
    >
      {children}
    </div>
  );
}

export default NodeContainer;
