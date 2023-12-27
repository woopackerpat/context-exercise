import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

function TodoItem({ index, todo }) {
  const {deleteTodo} = useContext(TodoContext)
  return (
    <li className="mb-2 flex justify-between">
      <span className="text-black">{todo}</span>
      <button className="text-red-500 ml-2" onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
