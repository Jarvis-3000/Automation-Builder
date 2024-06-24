// toolbar.js

import { DraggableNode } from "../components/DraggableNode";
import { Submit } from "../components/Submit";

export const PipelineToolbar = () => {
  return (
    <div className="w-full flex justify-between gap-10 px-5 py-5 shadow bg-white overflow-auto">
      <div className="flex gap-2">
        <DraggableNode type="inputNode" icon="input" label="Input" />
        <DraggableNode type="outputNode" icon="output" label="Output" />
        <DraggableNode type="llmNode" label="LLM" />
        <DraggableNode type="textNode" icon="text" label="Text" />
        <DraggableNode
          type="transformationNode"
          icon="transformation"
          label="Transform"
        />
        <DraggableNode type="mergeNode" icon="merge" label="Merge" />
        <DraggableNode type="downloadNode" icon="download" label="Download" />
        <DraggableNode
          type="notificationNode"
          icon="notification"
          label="Notification"
        />
        <DraggableNode
          type="marketingNode"
          icon="marketing"
          label="Marketing"
        />
      </div>
      <Submit />
    </div>
  );
};
