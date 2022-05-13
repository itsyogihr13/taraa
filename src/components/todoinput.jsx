import { useState, useTransition } from "react";

export const Todoinput = ({ addtodo }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          addtodo(text);
        }}
      >
        add here
      </button>
    </div>
  );
};
