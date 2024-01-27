import "./App.css";

import { useState,useRef,useEffect } from "react";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const focuspoint=useRef("0")
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

  };
  const addTask = () => {
    if (title.trim()!=="" && description.trim()!=="") {
      setTasks([...tasks, { title, description }]);
      setTitle("");
      setDescription("");
      focuspoint.current.focus();

    }
  };

  useEffect(() => {
    focuspoint.current.focus();

  },[])
  return (
    <>
      <h4 className="flex justify-center h-8 font-bold ">Blog Data</h4>
      <div
        style={{
          backgroundColor: "#751717",
          height: "250px",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow:"1px 1px 10px 1px black"
        }}
      >
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Title"
          value={title}
          ref={focuspoint}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br />
        <hr />
        <br />
        <textarea
          value={description}
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className=" flex h-50 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        ></textarea>

        <button
          onClick={addTask}
          className="rounded-md bg-black px-3  py-2 mt-6 w-40 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add
        </button>
      </div>
      <br />
      <ul className="relative ">
        {tasks.map((data, index) => (
          <li
            key={data}
            style={{
              backgroundColor: "#3c3c3c",
              color: "white",
             borderRadius:"5px",
              padding: "20px",
              marginLeft: "0px",
              fontSize:"20px"
            }}
          >
            <b> {data.title}</b> <hr /> <br /> {data.description}
          <br />
 
            <button
              onClick={() => removeTask(index)}
              style={{ backgroundColor: "#00ea84",display:"flex" ,borderRadius:"6px",padding:'10px',marginLeft:'auto'}}
            
      >
              delete
            </button>
    
          </li>
        ))}
      </ul>
    </>
  );
}
