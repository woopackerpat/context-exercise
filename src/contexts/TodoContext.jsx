import React, { createContext } from "react";

// Step 1 สร้าง Context ขึ้นมา (เหมือนการสร้างโกดังเก็บของ)
export const TodoContext = createContext(null);

function TodoContextProvider({ children }) {
  // Step 2 สร้าง value ที่จะส่งไป
  const value = {};

  // Step 3 สร้างตัวส่งข้อมูลไปให้ Component ลูกๆ ที่อยู่ภายใน TodoContextProvider
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// Step 4 ส่ง TodoContextProvider ออกไปให้ App ใช้งาน -> ไปที่ไฟล์ App.jsx

export default TodoContextProvider;
