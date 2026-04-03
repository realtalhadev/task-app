import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import ShowTask from "./component/ShowTask";

export default function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header/>

      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />

      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}