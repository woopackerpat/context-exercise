import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header";
import TodoAction from "./assets/components/TodoAction";
import TodoList from "./assets/components/TodoList";
import TodoItem from "./assets/components/TodoItem";
import Container from "./assets/components/Container";
import { useTodo } from "./contexts/TodoContext";

function App() {
  // Step 1 สร้างฟังก์ชั่นอีกอันใน TodoContext.jsx เพื่อคืนค่า context มาเลยจากไฟล์นั้น

  // Step 2 import useTodo มาใช้เรียกใช้ที่ไฟล์นี้

  const { todos, todoText, setTodoText, addTodo, deleteTodo } = useTodo();

  return (
    <>
      <Container>
        <Header />
        <TodoAction
          todoText={todoText}
          addTodo={addTodo}
          setTodoText={setTodoText}
        />
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </TodoList>
      </Container>
    </>
  );
}

export default App;
