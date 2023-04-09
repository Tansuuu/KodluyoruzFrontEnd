import { useState } from "react";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ todo: "", isChecked: false });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.todo === "") {
      return false;
    }
    addContact([...contacts, form]);
    setForm({ todo: "" });
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            name="todo"
            value={form.todo}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={onChangeInput}
          />
        </form>
      </header>
    </div>
  );
}

export default Form;
