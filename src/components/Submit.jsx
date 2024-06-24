// submit.js
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

import {  useState } from "react";

import Toast from "./Toast";
import useSubmit from "../useSubmit";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const Submit = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const { parsePipeline } = useSubmit();
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState({ title: "", message: "" });

  const handleShowToast = (title, message) => {
    setToastData({ title, message });
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleSave = () => {
    const nodesData = nodes.map((node) => ({
      id: node.id,
    }));

    const edgesData = edges.map((edge) => ({
      source: edge.source,
      target: edge.target,
    }));

    console.log({ nodesData, edgesData });

    const res = parsePipeline({ nodes: nodesData, edges: edgesData });
    const { num_edges, num_nodes, is_dag } = res;

    handleShowToast(
      "Parsed!",
      <div>
        <p>
          <strong>Nodes</strong> : {num_nodes}
        </p>
        <p>
          <strong>Edges</strong> : {num_edges}
        </p>
        <p>
          <strong>Flow is correct ?</strong> : {is_dag ? "Yes" : " No"}
        </p>
      </div>
    );
  };

  return (
    <div className="flex p-2 place-content-center ">
      <button
        type="button"
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={handleSave}
      >
        Submit
      </button>
      {showToast && (
        <Toast
          title={toastData.title}
          message={toastData.message}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};
