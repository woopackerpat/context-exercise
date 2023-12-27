import React from "react";

function Container({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white rounded p-4 shadow">{children}</div>{" "}
    </div>
  );
}

export default Container;
