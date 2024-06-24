// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  ConnectionLineType,
} from "reactflow";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { InputNode } from "../nodes/InputNode";
import { LLMNode } from "../nodes/LLMNode";
import { OutputNode } from "../nodes/OutputNode";
import { TextNode } from "../nodes/TextNode";
import { TransformNode } from "../nodes/TransformNode";
import { MergeNode } from "../nodes/MergeNode";
import { DownloadNode } from "../nodes/DownloadNode";
import { NotificationNode } from "../nodes/NotificationNode";
import { CustomEdge } from "../components/CustomEdge";

import "reactflow/dist/style.css";
import { MarketingNode } from "../nodes/MarketingNode";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
  llmNode: LLMNode,
  textNode: TextNode,
  transformationNode: TransformNode,
  mergeNode: MergeNode,
  downloadNode: DownloadNode,
  notificationNode: NotificationNode,
  marketingNode: MarketingNode,
};

const edgeTypes = {
  "custom-edge": CustomEdge,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div ref={reactFlowWrapper} className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType={ConnectionLineType.SmoothStep}
      >
        <Background color="#aaa" gap={gridSize} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
