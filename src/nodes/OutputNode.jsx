// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import Select from "../components/common/Select";
import Input from "../components/common/Input";
import NodeContainer from "../components/common/NodeContainer";
import { INPUT_OPTIONS, NODE_TYPES } from "../utils/constants";
import NodeHeading from "../components/common/NodeHeading";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setCurrName("");
    setOutputType(e.target.value);
  };

  return (
    <NodeContainer className="w-[300px]">
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
      <NodeHeading
        heading="Output"
        type={NODE_TYPES.output}
        settingsAvailable
        id={id}
      />
      <div className="flex flex-col gap-3">
        <Input
          label="Name"
          type={outputType}
          value={currName}
          onChange={handleNameChange}
        />
        <Select
          label="Output Type"
          options={INPUT_OPTIONS}
          value={outputType}
          onChange={handleTypeChange}
        />
      </div>
    </NodeContainer>
  );
};
