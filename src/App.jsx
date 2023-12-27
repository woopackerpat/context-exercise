import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header";
import TodoAction from "./assets/components/TodoAction";
import TodoList from "./assets/components/TodoList";
import TodoItem from "./assets/components/TodoItem";
import Container from "./assets/components/Container";
import TodoContextProvider from "./contexts/TodoContext";

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
      <TodoContextProvider>
        <Container>
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
        </Container>
      </TodoContextProvider>
    </>
  );
}

export default App;
