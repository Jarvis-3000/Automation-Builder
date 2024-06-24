import React from "react";

function Label({ children }) {
  return (
    <label className="nodrag block mb-1 text-xs font-medium text-gray-90">{children}</label>
  );
}

export default Label;
