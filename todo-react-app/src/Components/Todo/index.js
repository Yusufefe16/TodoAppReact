import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import List from "./List/index";
import Form from "./Form/index";

function Todo() {
  const [contacts, setContacts] = useState([
    {
      task: "Drink water",
    },
    {
      task: "Eat apple",
    },
    {
      task: "Do your homework",
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleSelectAll = () => {
    if (contacts.length > 0 && contacts.length === completedTasks.length) {
        setCompletedTasks([]);
    } else {
        setCompletedTasks(contacts);
    }
  };

  useEffect(() => {
    if (contacts.length > 0 && contacts.length === completedTasks.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [contacts, completedTasks]);

  return (
    <div id="container" className="mt-5">
      <h1>Todos</h1>
      <Form
        addContact={setContacts}
        contacts={contacts}
        handleSelectAll={handleSelectAll}
      />
      <List
        contacts={contacts}
        setContacts={setContacts}
        selectAll={selectAll}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </div>
  );
}

export default Todo;
