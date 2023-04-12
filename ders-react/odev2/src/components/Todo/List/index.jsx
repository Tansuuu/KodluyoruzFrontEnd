import React from "react";

function List({ todos, setTodos, filteredTodos }) {
  const deleteHandler = (todo) => {
    setTodos(todos.filter((i) => i.id !== todo.id));
  };

  const completedHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editHandler = (todo) => {
    const selectedItem = todos.find((i) => i.id === todo.id);
    console.log(selectedItem);
  };

  const toggleAll = () => {
    setTodos(
      todos.map((item) => {
        const isCompleted = todos.some((e) => {
          return e.completed === false;
        });
        return isCompleted === true
          ? { ...item, completed: true }
          : { ...item, completed: false };
      })
    );
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={toggleAll}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input
                id={`todo-${todo.id}`}
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => completedHandler(todo)}
              />
              <label
                htmlFor={`todo-${todo.id}`}
                onClick={() => editHandler(todo)}
              >
                {todo.text}
              </label>
              <button
                className="destroy"
                onClick={() => deleteHandler(todo)}
              ></button>
            </div>
          </li>
        ))}
        {/* <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn React</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Have a life!</label>
            <button className="destroy"></button>
          </div>
        </li> */}
      </ul>
    </section>
  );
}

export default List;
