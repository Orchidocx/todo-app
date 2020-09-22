import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addATodo = () => {
    setTodos([...todos, inputText]);
    setInputText("");
  };
  return (
    <div className="app">
      <h1>Todo App</h1>
      <input
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        type="text"
      />
      <button onClick={addATodo}>ADD A TODO</button>
    </div>
  );
}

export default App;
