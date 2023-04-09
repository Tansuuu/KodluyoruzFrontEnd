import React, { useState, useEffect } from "react";

function Footer({ contacts, filterValueSelected, clearTodo }) {
  const buttonList = [
    {
      name: "All",
      selected: false,
    },
    {
      name: "Active",
      selected: false,
    },
    {
      name: "Comleted",
      selected: false,
    },
  ];

  const [btnList, setBtnList] = useState(buttonList);
  const [changeStyle, setChangeStyle] = useState({});

  useEffect(() => {
    const newStyle = {};
    btnList.forEach((b, i) => {
      newStyle[i] = b.selected ? "selected" : "";
    });
    setChangeStyle(newStyle);
  }, [btnList]);

  const handleCheck = (tiklananBtn, taskIndex) => {
    const newTasks = [...btnList];
    newTasks.forEach((b, i) => {
      if (i === taskIndex) {
        b.selected = true;
      } else {
        b.selected = false;
      }
    });
    setBtnList(newTasks);
    filterValueSelected(tiklananBtn.name);
  };

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{contacts.length}</strong>
          items left
        </span>

        <ul className="filters">
          {btnList.map((btn, b) => (
            <li key={b}>
              <a
                href="#/"
                className={changeStyle[b]}
                onClick={() => handleCheck(btn, b)}
              >
                {btn.name}
              </a>
            </li>
          ))}

          {/* <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <li>
            <a href="#/">Active</a>
          </li>
          <li>
            <a href="#/">Completed</a>
          </li> */}
        </ul>

        <button className="clear-completed" onClick={() => clearTodo()}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
