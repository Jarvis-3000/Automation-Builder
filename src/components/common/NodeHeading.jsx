import React from "react";
import Settings from "../../assets/icons/settings.svg";
import Remove from "../../assets/icons/close.svg";
import InfoIcon from "../../assets/icons/info.svg";
import { ICON_MAP } from "../../utils/constants";

import { useStore } from "../../store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  removeNode: state.removeNode,
});

function NodeHeading({
  id = "",
  type = "grid",
  heading = "Node",
  settingsAvailable,
  onSettingsClick,
  infoAvailable,
  infoContent = "Information",
  className = "",
}) {
  const { removeNode } = useStore(selector, shallow);

  const handleRemove = () => {
    if (!id) {
      return false;
    }

    removeNode(id);
  };

  return (
    <div
      className={`flex justify-between place-items-center mb-3  ${className}`}
    >
      {/* left part */}
      <div className="flex gap-2">
        <img src={ICON_MAP[type]} alt={type} />
        <span className="text-md font-semibold">{heading}</span>
      </div>
      {/* right part */}
      <div className="flex gap-2">
        {settingsAvailable && (
          <img
            src={Settings}
            alt={"Settings"}
            onClick={onSettingsClick}
            className="cursor-pointer"
          />
        )}
        {infoAvailable && (
          <div className="relative group">
            <img src={InfoIcon} alt={"Info Icon"} className="cursor-pointer" />
            {/* tooltip */}
            <div className="w-[300px] absolute mt-2 hidden group-hover:block z-10 bg-white px-3 py-2 text-sm  transition-opacity duration-300 border border-gray-300 rounded-lg shadow-xl">
              {infoContent}
            </div>
          </div>
        )}
        {/* remove button */}
        <img
          src={Remove}
          alt={"Remove Node"}
          onClick={handleRemove}
          className="cursor-pointer rounded-lg hover:bg-[#f32f033b]  hover:shadow-[#f35d03_0px_0px_5px_2px] duration-100"
        />
      </div>
    </div>
  );
}

export default NodeHeading;
