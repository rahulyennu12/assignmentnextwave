import React from "react";
import TaskCard from "./TaskCard";

interface Task {
  title: string;
  level: string;
  deadline: string;
  description: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onMarkAsComplete?: (index: number) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onMarkAsComplete }) => {
  return (
    <div style={styles.column}>
      <h3 style={styles.columnTitle}>{title}</h3>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onMarkAsComplete={onMarkAsComplete ? () => onMarkAsComplete(index) : undefined}
        />
      ))}
    </div>
  );
};

const styles = {
  column: {
    flex: 1,
    margin: "0 10px",
    backgroundColor: "#292929",
    borderRadius: "10px",
    padding: "10px",
  },
  columnTitle: {
    marginBottom: "20px",
  },
};

export default TaskColumn;
