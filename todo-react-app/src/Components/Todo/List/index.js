import React, { useState, useEffect } from "react";

function List({
  contacts,
  setContacts,
  selectAll,
  completedTasks,
  setCompletedTasks,
}) {
  useEffect(() => {
    if (selectAll) {
      setCompletedTasks(contacts);
    } else {
      setCompletedTasks([]);
    }
  }, [selectAll, contacts]);
  const [selectedRadio, setSelectedRadio] = useState("btnradio1");
  const complen = completedTasks.length;
  const contlen = contacts.length;
  const len = contlen - complen;

  function handleRadioChange(e) {
    setSelectedRadio(e.target.id);
  }
  const handleCheckboxChange = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter((item) => item !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  useEffect(() => {
    console.log(completedTasks);
    console.log(len);
  }, [completedTasks]);

  const handleClearClick = (contact) => {
    setCompletedTasks(completedTasks.filter((item) => item !== contact));
    console.log(completedTasks);
  };

  const handleDelete = (contact) => {
    const updatedContacts = contacts.filter((item) => item !== contact);
    setContacts(updatedContacts);
    setCompletedTasks(completedTasks.filter((item) => item !== contact));
  };

  useEffect(() => {
    if (selectAll) {
      setCompletedTasks(contacts);
    } else {
      setCompletedTasks(
        completedTasks.filter((contact) => contacts.includes(contact))
      );
    }
  }, [selectAll, contacts]);

  return (
    <div>
      {selectedRadio === "btnradio1" ? (
        <ul className="list">
          {contacts.map((contact, i) => (
            <li key={i}>
              <span className="checkbox-container ms-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                    checked={completedTasks.includes(contact)}
                    onChange={() => handleCheckboxChange(contact)}
                  />
                </div>
              </span>

              <input
                name="task"
                placeholder={completedTasks.includes(i) ? contact.task : "Task"}
                value={contact.task}
                style={{
                  textDecoration: completedTasks.includes(contact)
                    ? "line-through "
                    : "none",
                  fontWeight: completedTasks.includes(contact)
                    ? "normal"
                    : "bold",
                }}
                onChange={(e) =>
                  setContacts(
                    contacts.map((c) =>
                      c === contact ? { ...c, task: e.target.value } : c
                    )
                  )
                }
              />
              {completedTasks.includes(contact) && (
                <button
                  className="clear-button"
                  onClick={() => {
                    handleClearClick(contact);
                    handleDelete(contact);
                  }}
                >
                  X
                </button>
              )}
            </li>
          ))}
          <p>Total active tasks ({contlen})</p>
        </ul>
      ) : selectedRadio === "btnradio3" ? (
        <ul className="list">
          {completedTasks.map((contact, i) => (
            <li key={i}>
              <span className="checkbox-container ms-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                    checked={completedTasks.includes(contact)}
                    onChange={() => handleCheckboxChange(contact)}
                  />
                </div>
              </span>

              <input
                name="task"
                placeholder={completedTasks.includes(i) ? contact.task : "Task"}
                value={contact.task}
                style={{
                  textDecoration: completedTasks.includes(contact)
                    ? "line-through "
                    : "none",
                  fontWeight: completedTasks.includes(contact)
                    ? "normal"
                    : "bold",
                }}
                onChange={(e) =>
                  setContacts(
                    contacts.map((c) =>
                      c === contact ? { ...c, task: e.target.value } : c
                    )
                  )
                }
              />
              {completedTasks.includes(contact) && (
                <button
                  className="clear-button"
                  onClick={() => {
                    handleClearClick(contact);
                    handleDelete(contact);
                  }}
                >
                  X
                </button>
              )}
            </li>
          ))}
          <p>Total active tasks ({complen})</p>
        </ul>
      ) : selectedRadio === "btnradio2" ? (
        <ul className="list">
          {contacts
            .filter((contact) => !completedTasks.includes(contact))
            .map((contact, i) => (
              <li key={i}>
                <span className="checkbox-container ms-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck1"
                      checked={completedTasks.includes(contact)}
                      onChange={() => handleCheckboxChange(contact)}
                    />
                  </div>
                </span>

                <input
                  name="task"
                  placeholder={
                    completedTasks.includes(i) ? contact.task : "Task"
                  }
                  value={contact.task}
                  style={{
                    textDecoration: completedTasks.includes(contact)
                      ? "line-through "
                      : "none",
                    fontWeight: completedTasks.includes(contact)
                      ? "normal"
                      : "bold",
                  }}
                  onChange={(e) =>
                    setContacts(
                      contacts.map((c) =>
                        c === contact ? { ...c, task: e.target.value } : c
                      )
                    )
                  }
                />
                {completedTasks.includes(contact) && (
                  <button
                    className="clear-button"
                    onClick={() => {
                      handleClearClick(contact);
                      handleDelete(contact);
                    }}
                  >
                    X
                  </button>
                )}
              </li>
            ))}
          <p>Total active tasks ({len})</p>
        </ul>
      ) : null}
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          onChange={handleRadioChange}
          defaultChecked
        />
        <label
          className="btn px-2 border-0 btn-outline-primary"
          style={{
            borderRadius: "12px",
          }}
          htmlFor="btnradio1"
        >
          All
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          onChange={handleRadioChange}
        />
        <label
          className="btn px-2 border-0 btn-outline-primary"
          style={{
            borderRadius: "12px",
          }}
          htmlFor="btnradio2"
        >
          Active
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
          onChange={handleRadioChange}
        />
        <label
          className="btn px-2 border-0 btn-outline-primary"
          style={{
            borderRadius: "12px",
          }}
          htmlFor="btnradio3"
        >
          Completed
        </label>
      </div>
    </div>
  );
}

export default List;
