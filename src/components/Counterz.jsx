import { React, useState } from "react";
import { useTaskStore } from "../store/taskcounter";

function Counterz() {
  const [datetime, setDateTime] = useState("");

  const clearall = useTaskStore((state) => state.resettask);
  const removetask = useTaskStore((state) => state.removetask);
  const addtask = useTaskStore((state) => state.addtask);
  const task = useTaskStore((state) => state.task);
  const [Input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addtask(Input);
    setInput("");
  };
  const handledelete = (currval) => {
    removetask(currval);
  };
  // const datetimes
  setInterval(() => {
    const date = new Date();
    const formatteddate = date.toLocaleDateString();
    const formattedtime = date.toLocaleTimeString();
    setDateTime(`${formatteddate}  - ${formattedtime}`);
  }, 1000);

  return (
    <>
      <h1>task with zustand</h1>
      <h2>{datetime}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter task to add"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <input type="submit" value="add task" />
      </form>
      <div className="display">
        <ul>
          {task.map((currval, index) => (
            <li key={index}>
              {currval}
              <button
                onClick={() => {
                  handledelete(currval);
                }}
              >
                delete
              </button>
              <button>check</button>
            </li>
          ))}
        </ul>
        <button onClick={clearall}> clear all</button>
      </div>
    </>
  );
}

export default Counterz;
