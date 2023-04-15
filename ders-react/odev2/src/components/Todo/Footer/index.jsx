import React, { useState, useEffect } from "react";

function Footer({ todos, clearTodos, setFilteredTodos }) {
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filterHandler(todos);
  }, [todos, status]); //eslint-disable-line

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.text);
  };

  const hiddenButton = () => {
    const checkAllCompleted = todos.every((todo) => !todo.completed);
    return checkAllCompleted ? "hidden" : "";
  };

  if (todos.length === 0) return null;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li onClick={statusHandler}>
          <a href="#/" className={status === "All" ? "selected" : ""}>
            All
          </a>
        </li>
        <li onClick={statusHandler}>
          <a href="#/" className={status === "Active" ? "selected" : ""}>
            Active
          </a>
        </li>
        <li onClick={statusHandler}>
          <a href="#/" className={status === "Completed" ? "selected" : ""}>
            Completed
          </a>
        </li>
      </ul>

      <button
        className={`clear-completed ${hiddenButton()}`}
        onClick={clearTodos}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
