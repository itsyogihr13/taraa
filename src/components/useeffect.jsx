import { useEffect } from "react";

export const Taraka = () => {
  console.log("start");

  useEffect(() => {
    console.log("insise 1");
  });
  useEffect(() => {
    console.log("insise 2");
  });

  console.log("end");
  return <div></div>;
};
