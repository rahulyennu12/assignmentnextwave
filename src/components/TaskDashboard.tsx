import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TaskColumn from "./TaskColumn";

interface Task {
  title: string;
  level: string;
  deadline: string;
  description: string;
}

const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { title: "Brainstorming", level: "Low", deadline: "12/5/24", description: "Initial ideas and concepts" },
      { title: "Research", level: "High", deadline: "12/5/24", description: "In-depth study and analysis" },
      { title: "Wireframes", level: "High", deadline: "12/5/24", description: "Basic design layout" },
    ],
    inProgress: [
      { title: "Onboarding Illustrations", level: "Low", deadline: "12/5/24", description: "Graphics for onboarding" },
      { title: "Moodboard", level: "Low", deadline: "12/5/24", description: "Design inspiration" },
    ],
    done: [
      { title: "Mobile App Design", level: "Completed", deadline: "12/5/24", description: "Final mobile app design" },
      { title: "Design System", level: "Completed", deadline: "12/5/24", description: "Component library" },
    ],
  });

  // Function to add a new task
  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      todo: [...prevTasks.todo, newTask],
    }));
  };

  // Function to mark a task as complete
  const markTaskAsComplete = (index: number) => {
    const completedTask = tasks.todo[index];
    setTasks((prevTasks) => ({
      ...prevTasks,
      todo: prevTasks.todo.filter((_, i) => i !== index),
      done: [...prevTasks.done, { ...completedTask, level: "Completed" }],
    }));
  };

  return (
    <div style={styles.container}>
      <Sidebar addTask={addTask} tasks={tasks} />
      <div style={styles.taskContainer}>
        <TaskColumn
          title="To Do"
          tasks={tasks.todo}
          onMarkAsComplete={markTaskAsComplete}
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks.inProgress}
        />
        <TaskColumn
          title="Done"
          tasks={tasks.done}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#1a1a1a",
    color: "#fff",
  },
  taskContainer: {
    display: "flex",
    flex: 1,
    padding: "20px",
  },
};

export default TaskDashboard;
