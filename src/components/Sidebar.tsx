import React, { CSSProperties, useState } from "react";

interface SidebarProps {
  addTask: (newTask: { title: string; level: string; deadline: string; description: string }) => void;
  tasks: {
    todo: { title: string; level: string; deadline: string; description: string }[];
    inProgress: { title: string; level: string; deadline: string; description: string }[];
    done: { title: string; level: string; deadline: string; description: string }[];
  };
}

const Sidebar: React.FC<SidebarProps> = ({ addTask, tasks }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskLevel, setTaskLevel] = useState("Low"); // Default to Low
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim() === "" || taskDeadline.trim() === "" || taskDescription.trim() === "") {
      alert("Please enter a task title, deadline, and description");
      return;
    }

    const newTask = {
      title: taskTitle,
      level: taskLevel,
      deadline: taskDeadline,
      description: taskDescription,
    };

    // Add the new task
    addTask(newTask);

    // Clear the input fields
    setTaskTitle("");
    setTaskDeadline("");
    setTaskLevel("Low");
    setTaskDescription("");
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search Project"
          style={styles.searchInput}
        />
      </div>
      <div style={styles.taskInfo}>
        <div style={styles.taskCard}>
          <p>Expired Tasks</p>
          <h3>{tasks.todo.filter(task => new Date(task.deadline) < new Date()).length}</h3>
        </div>
        <div style={styles.taskCard}>
          <p>All Active Tasks</p>
          <h3>{tasks.todo.length + tasks.inProgress.length}</h3>
        </div>
        <div style={styles.taskCard}>
          <p>Completed Tasks</p>
          <h3>{tasks.done.length}/{tasks.todo.length + tasks.inProgress.length + tasks.done.length}</h3>
        </div>
      </div>
      <input
        type="text"
        placeholder="New Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        style={styles.searchInput}
      />
      <input
        type="date"
        placeholder="Deadline"
        value={taskDeadline}
        onChange={(e) => setTaskDeadline(e.target.value)}
        style={styles.searchInput}
      />
      <select
        value={taskLevel}
        onChange={(e) => setTaskLevel(e.target.value)}
        style={styles.searchInput}
      >
        <option value="Low">Low</option>
        <option value="High">High</option>
      </select>
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        style={styles.textArea}
      />
      <button style={styles.addButton} onClick={handleAddTask}>
        + Add Task
      </button>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  sidebar: {
    width: "250px",
    backgroundColor: "#333",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  searchBox: {
    marginBottom: "20px",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#444",
    color: "#fff",
    marginBottom: "10px",
  },
  textArea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#444",
    color: "#fff",
    height: "100px",
    marginBottom: "10px",
  },
  taskInfo: {
    flex: 1,
  },
  taskCard: {
    backgroundColor: "#444",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  addButton: {
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#6a0dad",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Sidebar;
