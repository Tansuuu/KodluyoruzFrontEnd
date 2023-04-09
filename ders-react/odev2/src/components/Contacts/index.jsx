import { useState, useEffect } from "react";
import "./styles.css";
import List from "./List";
import Form from "./Form";
import Footer from "./Footer";

function Contacts() {
  const [contacts, setContacts] = useState([
    { todo: "Learn JavaScript", isChecked: true },
    { todo: "Learn React", isChecked: false },
    { todo: "Have a life", isChecked: false },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  const [filterText, setFilterText] = useState("All");

  let filteredTodoList = contacts.filter((contact) => {
    if (filterText === "All") {
      return contact;
    } else if (filterText === "Active") {
      return contact.isChecked === false;
    } else {
      return contact.isChecked === true;
    }
  });

  const onFilterBtnClicked = (filterBtn) => {
    setFilterText(filterBtn);
  };

  const onDeleteSelectedValue = (deleteValue) => {
    let itemsCopy = [...contacts];
    itemsCopy.splice(deleteValue, 1);
    setContacts(itemsCopy);
  };

  const onDeleteCompletedValues = () => {
    const completedTodos = contacts.filter((contact) => !contact.isChecked);
    setContacts(completedTodos);
  };

  return (
    <div className="todoapp">
      <Form addContact={setContacts} contacts={contacts} />
      <List
        contacts={filteredTodoList}
        deleteValueSelected={onDeleteSelectedValue}
      />
      <Footer
        contacts={contacts}
        filterValueSelected={onFilterBtnClicked}
        clearTodo={onDeleteCompletedValues}
      />
    </div>
  );
}

export default Contacts;
