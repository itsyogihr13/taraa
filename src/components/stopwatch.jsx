import { useEffect, useState } from "react";

export const Stopwatch = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  return <h1>timer :{timer}</h1>;
};
