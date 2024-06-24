import React, { useState } from "react";
import NodeContainer from "../components/common/NodeContainer";
import Select from "../components/common/Select";
import NodeHeading from "../components/common/NodeHeading";
import {
  DOC_TYPES,
  NODE_TYPES,
} from "../utils/constants";
import { Handle, Position } from "reactflow";


export const MergeNode = ({ id }) => {
  const [docType, setDocType] = useState("");
 

  return (
    <NodeContainer className="w-[300px]">
      <NodeHeading
        heading="Merge"
        type={NODE_TYPES.merge}
        settingsAvailable
        id={id}
      />
      <div className="flex flex-col gap-3">
        <Select
          label="Document Type"
          options={DOC_TYPES}
          value={docType}
          onChange={(event) => setDocType(event.target.value)}
        />
      </div>
      {/*  */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-target-value`}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-source-value`}
      />
    </NodeContainer>
  );
};
