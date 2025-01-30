import React, { useState, useEffect } from "react";

const useMyFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const out = await res.json();
        setData(out);
        setLoading(false);
      } catch (error) {
        setErr(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, err};
};

export default useMyFetch;
