import { useEffect, useState } from "react";

export const Stop = () => {
  const [time, SetTime] = useState(10);

  useEffect(() => {
    setInterval(() => {
      SetTime((prev) => {
        if (prev <= 0) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // return () => {
    //   clearInterval(id);
    //   console.log("helo");
    // };
  }, []);

  return <h1>Stop {time}</h1>;
};
