import { ADD_COUNT } from "./action";

export const reducer = (store, { type, payload }) => {
  console.log(store);
  switch (type) {
    case ADD_COUNT:
      return { ...store, count: store.count + payload };
    default:
      return store;
  }
};
