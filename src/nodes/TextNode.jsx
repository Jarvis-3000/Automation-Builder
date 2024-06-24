// textNode.js

import {  useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import NodeContainer from "../components/common/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import NodeHeading from "../components/common/NodeHeading";
import Textarea from "../components/common/Textarea";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState();
  const [handles, setHandles] = useState([]);
  const updateNodeInternals = useUpdateNodeInternals();

  // Function to count the number of {{text}} patterns in the input and extract the text
  function extractHandlesAndTexts(inputText) {
    const regex = /\{\{(.*?)\}\}/g;
    let matches;
    const texts = new Set();
    while ((matches = regex.exec(inputText)) !== null) {
      texts.add(matches[1]);
    }
    return texts;
  }

  // Function to adjust textarea height based on content
  const autoResize = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset textarea height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new textarea height
  };

  const handleTextChange = (e) => {
    const newText = e.target.value

    let texts = extractHandlesAndTexts(newText);
    texts = Array.from(texts);

    setCurrText(newText);
    setHandles(texts);

    updateNodeInternals(id);
    autoResize(e);
  };

  return (
    <NodeContainer className="w-[200px]">
      <NodeHeading
        heading="Text"
        type={NODE_TYPES.text}
        settingsAvailable
        id={id}
      />
      <Textarea
        placeholder={"{{input}}"}
        label="Text"
        value={currText}
        onChange={handleTextChange}
        rows={1} // Start with one row
        onInput={autoResize} // Handle manual input resizing
      />
      {Array.from({ length: handles.length }).map((_, index) => (
        <Handle
          key={index}
          type="target"
          position="left"
          id={`${id}-target-${index + 1}-value`}
          style={{ top: `${(index + 1) * 20}px` }}
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-source-value`}
      />
    </NodeContainer>
  );
};
