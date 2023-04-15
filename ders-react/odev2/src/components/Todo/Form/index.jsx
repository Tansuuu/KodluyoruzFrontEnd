import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextValue = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return false;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    setInputText("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitTodoHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={inputText}
          onChange={inputTextValue}
        />
      </form>
    </header>
  );
}

export default Form;
