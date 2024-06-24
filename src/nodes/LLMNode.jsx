// llmNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import NodeContainer from "../components/common/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import NodeHeading from "../components/common/NodeHeading";
import Input from "../components/common/Input";

export const LLMNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <NodeContainer className="w-[280px]">
      <NodeHeading heading="LLM" type={NODE_TYPES.llm} id={id}/>
      <Input
        label="Text"
        type={"text"}
        value={currText}
        onChange={handleTextChange}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </NodeContainer>
  );
};
