import React, { useState } from "react";
import "../App.css";

function Main() {
  const [list, setList] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addTask = (e) => {
    // console.log(e.target.parentElement.firstElementChild.value);
    if (e.target.parentElement.firstElementChild.value === "") {
      alert("Please enter the NOTE");
    } else {
      setList([...list, { id: Date.now(), note: newNote, complated: false }]);
      setNewNote("");
    }
  };

  const markComplated = (id) => {
    setList(
      list.map((e) => (e.id === id ? { ...e, complated: !e.complated } : e))
    );
  };

  const clearComplated = () => {
    // console.log(list[0].note);
    if (list[0].note === "") {
      alert("hepsi silindi");
    } else {
      setList(list.filter((item) => !item.complated));
    }
  };

  return (
    <main className="container">
      <section className="input">
        <nav className="input-text-box">
          <input
            autoFocus
            type="text"
            name="text"
            id="input-text"
            required
            onChange={(e) => setNewNote(e.target.value)}
            value={newNote}
            ref={(input) => input && input.focus()}
            onKeyDown={(e) => e.key === "Enter" && addTask(e)}
          />
          <button id="add" className="add" onClick={addTask} type="submit">
            Add
          </button>
        </nav>
      </section>

      <section className="list-container">
        <nav className="card">
          <nav className="card-header">
            <span className="notes">NOTES</span> {/* <span id="calendar"></span> */}
            <button
              id="deleteAll"
              className="deleteAll"
              onClick={clearComplated}
            >
              DELETE<i className="fas fa-trash-alt"></i>
            </button>
          </nav>
          <nav className="card-body">
            <ul id="list">
              {list.map((item) => (
                <li
                  key={item.id}
                  onClick={() => markComplated(item.id)}
                  className={item.complated ? "fixed" : ""}
                >
                  {item.note}
                </li>
              ))}
            </ul>
          </nav>
        </nav>
      </section>
    </main>
  );
}

export default Main;
