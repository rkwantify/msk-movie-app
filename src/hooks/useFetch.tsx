import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [response, setResponse] = useState<null | Response>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null | unknown>();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error! Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setResponse(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { response, isLoading, error };
};

export default useFetch;

