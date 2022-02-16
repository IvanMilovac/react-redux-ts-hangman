import { useEffect, useState } from "react";
import axios, { Method } from "axios";

interface IAxiosProps {
  method: Method;
  url: string;
  headers?: { type: string };
  data?: IData;
}

export const useAxios = ({ method, url, headers, data }: IAxiosProps, reset: boolean) => {
  const [response, setResponse] = useState({} as any);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: IAxiosProps) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch {
      setError("Error occured during phrase fetching!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ url, method });
  }, [url, method, reset]);

  return [response, error, loading];
};
