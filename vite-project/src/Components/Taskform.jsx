import { useState } from "react";

export default function Taskform({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("general");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTask({ text: task, priority, category, completed: false });

    // reset
    setTask("");
    setPriority("medium");
    setCategory("general");
  };

  return (
    <form onSubmit={handlesubmit} className="task-form">
      {/* 🔥 Large Text Area */}
      <textarea
        className="task-input"
        placeholder="Enter the task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />

      {/* Controls */}
      <div className="controls">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>

        <button type="submit" className="add-btn">Add Task</button>
      </div>
    </form>
  );
}

