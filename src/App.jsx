import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header";
import TodoAction from "./assets/components/TodoAction";
import TodoList from "./assets/components/TodoList";
import TodoItem from "./assets/components/TodoItem";

function App() {
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

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-md bg-white rounded p-4 shadow">
          <Header />
          <TodoAction
            todoText={todoText}
            addTodo={addTodo}
            setTodoText={setTodoText}
          />
          <TodoList>
            {todos.map((todo, index) => (
              <TodoItem index={index} todo={todo} deleteTodo={deleteTodo} />
            ))}
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
