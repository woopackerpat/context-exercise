import React, { createContext, useState } from "react";

export const TodoContext = createContext(null);

function TodoContextProvider({ children }) {
  //Step 2 ย้ายค่า state และ function ทั้งหมด
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    if (todoText.trim() !== "") {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const value = { todos, setTodos, todoText, setTodoText, addTodo, deleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;
