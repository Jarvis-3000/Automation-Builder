// outputNode.js

import { Handle, Position } from "reactflow";
import NodeContainer from "../components/common/NodeContainer";
import {  NODE_TYPES } from "../utils/constants";
import NodeHeading from "../components/common/NodeHeading";
import Info from "../components/common/Info";

export const DownloadNode = ({ id }) => {
  return (
    <NodeContainer className="w-[250px]">
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
      <NodeHeading heading="Download" type={NODE_TYPES.download} id={id}/>
      <Info>This is a download terminal node. The data received here will be downloaded locally.</Info>
    </NodeContainer>
  );
};
