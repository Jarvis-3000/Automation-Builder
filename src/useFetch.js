// import { useState, useCallback } from "react";

// const URL = "http://127.0.0.1:8000";

// const useFetch = (options = {}) => {
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const sendData = async (data) => {
//     setLoading(true);
//     setError(null);
//     setResponse(null);

//     try {
//       const res = await fetch(URL + "/pipelines/parse", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Something went wrong");
//       }

//       setResponse(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { loading, response, error, sendData };
// };

// export default useFetch;
