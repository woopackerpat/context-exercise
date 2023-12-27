import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/components/Header";
import TodoAction from "./assets/components/TodoAction";
import TodoList from "./assets/components/TodoList";
import TodoItem from "./assets/components/TodoItem";
import Container from "./assets/components/Container";
import { TodoContext } from "./contexts/TodoContext";

function App() {
  // Step 1 แปลง การส่ง Props ทั้งหมด ให้ไปอยู่ใน context

  const { todos } = useContext(TodoContext);

  // Step 2 ไปที่ไฟล์ src/contexts/TodoContext.jsx

  // Step 3 สังเกตุว่า เวลาเราจะใช้งาน Todo เมื่อไหร่ เราต้อง import TodoContext มาที่ไฟล์นั้นทุกครั้ง เรามีวิธีที่ง่ายกว่านั้น ลองคิดก่อนว่าทำยังไงให้ไม่ต้อง import ทุกครั้ง -> ดูเฉลย branch context-optimize

  return (
    <>
      <Container>
        <Header />
        <TodoAction />
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} />
          ))}
        </TodoList>
      </Container>s
    </>
  );
}

export default App;
