import React, { useState } from "react";

function Todo() {
  const date = new Date()
  const formateddate = date.toLocaleDateString()
  const [Input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const handletask = (e) => {
    e.preventDefault();
    if (!Input) return;
    if (task.includes(Input)) {
      setInput("");

      return;
    }

    setTask((prevtask) => [...prevtask, Input]);

    setInput("");

    console.log("form submited");
  };
  return (
    <>
      <h1> todo </h1>
      <h2> {formateddate}- time</h2>

      <form onSubmit={handletask}>
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <input type="submit" value="add" />
      </form>
      <div className="display">
        <ul>
          {task.map((curr, Index) => {
            return (
              <li key={Index}>
                {" "}
                {curr} <button>checked</button>
                <button>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
