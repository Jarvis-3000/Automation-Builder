

// Function to build the adjacency list
function buildAdjacencyList(edges) {
  let adjList = {};
  let inDegree = {};

  edges.forEach((edge) => {
    let source = edge.source;
    let target = edge.target;

    if (!adjList[source]) {
      adjList[source] = [];
    }
    adjList[source].push(target);

    if (!inDegree[target]) {
      inDegree[target] = 0;
    }
    inDegree[target]++;

    if (!inDegree[source] && inDegree[source] !== 0) {
      inDegree[source] = 0;
    }
  });

  return { adjList, inDegree };
}

// Function to perform topological sort using Kahn's Algorithm
function topologicalSortKahn(edges) {
  let { adjList, inDegree } = buildAdjacencyList(edges);
  let queue = Object.keys(inDegree).filter((node) => inDegree[node] === 0);
  let topoOrder = [];

  while (queue.length > 0) {
    let node = queue.shift();
    topoOrder.push(node);

    if (adjList[node]) {
      adjList[node].forEach((neighbor) => {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      });
    }
  }

  return topoOrder.length === Object.keys(inDegree).length;
}

function checkIsDAG(edges) {
  return topologicalSortKahn(edges);
}

function parsePipeline(pipeline) {
  let nodes = pipeline.nodes || [];
  let edges = pipeline.edges || [];

  let numNodes = nodes.length;
  let numEdges = edges.length;

  let isDAG = checkIsDAG(edges);

  return { num_nodes: numNodes, num_edges: numEdges, is_dag: isDAG };
}

function useSubmit() {
  return { parsePipeline };
}

export default useSubmit;
