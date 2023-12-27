import React from "react";

function TodoList({ children }) {
  return <ul className="list-disc pl-6">{children}</ul>;
}

export default TodoList;
