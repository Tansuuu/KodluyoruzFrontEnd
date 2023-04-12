import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const deleteCompletedTodos = () => {
    const completedTodos = todos.filter((todo) => !todo.completed);
    setTodos(completedTodos);
  };

  return (
    <div className="todoapp">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      <Footer
        todos={todos}
        clearTodos={deleteCompletedTodos}
        setFilteredTodos={setFilteredTodos}
      />
    </div>
  );
}

export default Todo;
