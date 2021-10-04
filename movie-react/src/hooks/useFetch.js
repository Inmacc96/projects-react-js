import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  //Hace las peticiones http
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options); //await es porque debe esperar a que acaba de ejecutarse la función fetch que es la que hace la petición
        const json = await res.json();
        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [options, url]);

  return { loading, result, error };
}
