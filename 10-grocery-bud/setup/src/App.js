import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("list"));
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlertValue(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList((list) => {
        return list.map((item) => {
          if (item.id === editID) {
            return { ...item, name };
          } else {
            return item;
          }
        });
      });
      setName("");
      setEditID(null);
      setIsEditing(false);
      setAlertValue(true, "success", "item edited");
    } else {
      setAlertValue(true, "success", "item added");
      const newItem = {
        id: Date.now(),
        name,
      };

      setList([...list, newItem]);
      setName("");
    }
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const setAlertValue = (show = false, type = "", msg = "") => {
    setAlert({ type, msg, show });
  };

  const editItem = (id) => {
    const editedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editedItem.name);
  };

  const clearList = () => {
    setAlertValue(true, "danger", "Empty list");
    setList([]);
  };
  return (
    <section className='section-center'>
      {alert.show && (
        <Alert {...alert} removeAlert={setAlertValue} list={list} />
      )}
      <form onSubmit={handleSubmit} className='grocery-form'>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length !== 0 && (
        <>
          <div className='grocery-container'>
            <List items={list} editItem={editItem} removeItem={removeItem} />
          </div>
          <button className='clear-btn' onClick={clearList}>
            Clear items
          </button>
        </>
      )}
    </section>
  );
}

export default App;
