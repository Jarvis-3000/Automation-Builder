// draggableNode.js

import { ICON_MAP } from "../utils/constants";

export const DraggableNode = ({ type, icon="grid", label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      className={`flex flex-col gap-1 cursor-grab min-w-[80px]  text-center py-2 px-2 justify-center place-items-center rounded-lg border-2 border-[#3f83f8] hover:shadow-[#3f83f89f_0px_0px_5px_0px] ${type}`}
      draggable
    >
      <img src={ICON_MAP[icon]} alt={type} />
      <span className="text-xs">{label}</span>
    </div>
  );
};
