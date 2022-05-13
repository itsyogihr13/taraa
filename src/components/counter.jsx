import { useDispatch } from "react-redux";
import { addcount } from "../reducer/action";
export const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: 0</p>
      <button
        onClick={() => {
          dispatch(addcount(1));
        }}
      >
        ADD one;
      </button>
    </div>
  );
};
