import React, { useState, useEffect } from "react";

function List({ contacts, deleteValueSelected }) {
  const [newTodoList, setNewTodoList] = useState(contacts);
  const [changeStyle, setChangeStyle] = useState({});

  useEffect(() => {
    setNewTodoList(contacts);
  }, [contacts]);

  useEffect(() => {
    const newStyle = {};
    newTodoList.forEach((t, i) => {
      newStyle[i] = t.isChecked ? "completed" : "view";
    });
    setChangeStyle(newStyle);
  }, [newTodoList]);

  const handleCheck = (todoIndex) => {
    const newTodos = [...newTodoList];
    newTodos[todoIndex].isChecked = !newTodos[todoIndex].isChecked;
    setNewTodoList(newTodos);
  };

  const deleteTodo = (i) => {
    deleteValueSelected(i);
  };

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"> Mark all as complete </label>

        <ul className="todo-list">
          {newTodoList &&
            newTodoList.map((contact, i) => (
              <li key={i}>
                <div className={changeStyle[i]}>
                  <input
                    id={`task-${i}`}
                    className="toggle"
                    type="checkbox"
                    value={contact.isChecked}
                    checked={contact.isChecked}
                    onChange={() => handleCheck(i)}
                  />
                  <label htmlFor={`task-${i}`}>{contact.todo}</label>
                  <button
                    className="destroy"
                    onClick={() => deleteTodo(i)}
                  ></button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default List;
