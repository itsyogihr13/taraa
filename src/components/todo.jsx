import { useState } from "react";
import { Todoinput } from "./todoinput";
import { TodoItem } from "./todoitem";

export const Todo = () => {
  const [list, setList] = useState([]);
  const addtodo = (data) => {
    setList([...list, data]);
  };
  return (
    <div>
      Todo Lists ---
      <Todoinput addtodo={addtodo} />
      {list.map((e) => {
        <TodoItem tara={e} />;
      })}
    </div>
  );
};
