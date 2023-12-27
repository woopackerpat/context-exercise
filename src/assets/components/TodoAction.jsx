import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

function TodoAction() {
  const { todoText, setTodoText, addTodo } = useContext(TodoContext);
  return (
    <div className="mb-4 flex">
      <input
        type="text"
        className="w-full border rounded px-3 py-2 mr-2"
        placeholder="Enter a task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
}

export default TodoAction;
