// import { createStore } from "react-redux";
// import { createStore } from "redux";
import { reducer } from "./reducer";
export const store = createStore(reducer, { count: 0 });
