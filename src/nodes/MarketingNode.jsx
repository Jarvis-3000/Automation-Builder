import React, { useEffect, useState } from "react";
import NodeContainer from "../components/common/NodeContainer";
import Select from "../components/common/Select";
import NodeHeading from "../components/common/NodeHeading";
import Input from "../components/common/Input";
import { MARKETING_PLACES, NODE_TYPES } from "../utils/constants";
import { Handle, Position } from "reactflow";

export const MarketingNode = ({ id }) => {
  const [marketingType, setMarketingType] = useState("");

  return (
    <NodeContainer className="w-[300px]">
      <NodeHeading
        heading="Marketing"
        type={NODE_TYPES.marketing}
        settingsAvailable
        id={id}
        infoAvailable
        infoContent="Integrate marketing places and advertise your content automatically"
      />
      <div className="flex flex-col gap-3">
        <Select
          label="Marketing Place"
          options={MARKETING_PLACES}
          value={marketingType}
          onChange={(event) => setMarketingType(event.target.value)}
        />
        <Input type="date" label="Date to post" />
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-target-value`}
      />
    </NodeContainer>
  );
};
