import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addATodo = (event) => {
    event.preventDefault();
    setTodos([...todos, inputText]);
    setInputText("");
  };
  return (
    <div className="app">
      <h1>Todo App</h1>
      <form>
        <input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          type="text"
        />
        <button disabled={!inputText} type="submit" onClick={addATodo}>
          ADD A TODO
        </button>
      </form>
      {todos.map((todo) => (
        <Todo text={todo} />
      ))}
    </div>
  );
}

export default App;
