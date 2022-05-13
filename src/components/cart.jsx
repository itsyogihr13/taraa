import { useContext } from "react";
import { CartProvider } from "../contexts/context";
export const Cart = () => {
  const value = useContext(CartProvider);
  return <h1>this is {value}</h1>;
  console.log("here");
};
