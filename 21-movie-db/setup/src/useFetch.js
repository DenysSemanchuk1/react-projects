import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_API_KEY}`;

export default function useFetch(urlParams) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState({
    show: false,
    msg: "",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({
          show: false,
          msg: "",
        });
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlParams]);
  return { loading, data, error };
}
