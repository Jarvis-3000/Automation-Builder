// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import Select from "../components/common/Select";
import Input from "../components/common/Input";
import NodeContainer from "../components/common/NodeContainer";
import { INPUT_OPTIONS, NODE_TYPES } from "../utils/constants";
import NodeHeading from "../components/common/NodeHeading";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "text");
  

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setCurrName("");
    setInputType(e.target.value);
  };

  return (
    <NodeContainer className="w-[280px]">
      <NodeHeading
        heading="Input"
        type={NODE_TYPES.input}
        settingsAvailable
        id={id}
      />
      <div className="flex flex-col gap-3">
        <Input
          label="Name"
          type={inputType}
          value={currName}
          onChange={handleNameChange}
        />
        <Select
          label="Input Type"
          options={INPUT_OPTIONS}
          value={inputType}
          onChange={handleTypeChange}
        />
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeContainer>
  );
};
