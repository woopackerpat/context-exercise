import React from "react";

function TodoItem() {
  const { deleteTodo } = useTodo();
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
