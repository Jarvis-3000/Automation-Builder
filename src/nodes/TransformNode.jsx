import React, { useEffect, useState } from "react";
import NodeContainer from "../components/common/NodeContainer";
import Select from "../components/common/Select";
import NodeHeading from "../components/common/NodeHeading";
import {
  DOC_TYPES,
  NODE_TYPES,
  IMAGE_TRANSFORMATION_OPTIONS,
  DOC_TRANSFORMATION_OPTIONS,
} from "../utils/constants";
import { Handle, Position } from "reactflow";

const Transformation_Options_Map = {
  image: IMAGE_TRANSFORMATION_OPTIONS,
  text_document: DOC_TRANSFORMATION_OPTIONS,
};

export const TransformNode = ({ id }) => {
  const [docType, setDocType] = useState("");
  const [transformType, setTransformType] = useState("");

  return (
    <NodeContainer className="w-[300px]">
      <NodeHeading
        heading="Transform"
        type={NODE_TYPES.transformation}
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
        <Select
          disabled={!docType}
          label="Transformation Type"
          options={docType ? Transformation_Options_Map[docType] : []}
          value={transformType}
          onChange={(event) => setTransformType(event.target.value)}
        />
      </div>
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
