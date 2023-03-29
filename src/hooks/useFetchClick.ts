import React, { useEffect, useState } from "react";

type TUseFetch = {
  response: any;
  isLoading: boolean;
  isError: boolean;
};

const useFetchClick = (url: string, clicks: number): TUseFetch => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (clicks > 0) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-ZONT-Client": "anikulshin310@gmail.com",
            },
            body: JSON.stringify({ count: clicks }),
          });
          setResponse(await response.json());
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
        }
      };
      fetchData();
    }
  }, [clicks]);

  return { response, isLoading, isError };
};
export default useFetchClick;
