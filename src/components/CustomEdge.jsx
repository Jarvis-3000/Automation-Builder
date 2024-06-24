import {
  BaseEdge,
  EdgeLabelRenderer,
  Position,
  getSmoothStepPath,
} from "reactflow";
import Remove from "../assets/icons/close.svg";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  removeEdge: state.removeEdge,
});

export const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition: Position.Right,
    targetX,
    targetY,
    targetPosition: Position.Left,
  });
  const { removeEdge } = useStore(selector, shallow);

  const handleRemove = () => {
    removeEdge(id);
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <img
          src={Remove}
          alt={"Remove Node"}
          onClick={handleRemove}
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
          className={`absolute cursor-pointer pointer-events-auto rounded-lg hover:bg-[#f32f033b]  hover:shadow-[#f35d03_0px_0px_5px_2px] duration-100`}
        />
      </EdgeLabelRenderer>
    </>
  );
};
