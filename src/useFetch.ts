import { useEffect, useState } from "react";


const useFetch = (url:string) => {
    const [data, setData] = useState<any[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState("");

      useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError("");
        })
        .catch((e) => {
          setError(e.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

    return{data, isPending, error}
}

export default useFetch;
