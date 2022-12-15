// import axios from "axios";
// import { useEffect, useState } from "react";

// export function useFetch<T>() {
//   const [response, setResponse] = useState<T | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getRequest = async () => {
//       setIsLoading(true);
//       axios<T>({
//         method: request.method,
//         url: request.url,
//         headers: {
//           Accept: "application/json",
//         },
//       })
//         .then(({ data, status }) => {
//           if (status === 200) {
//             setResponse(data);
//           }
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           setError(err);
//           setIsLoading(false);
//         });
//     };

//     getRequest();
//   }, [request]);

//   return { response, isLoading, error };
// }

export const a = {};
