import React from "react";

interface TaskCardProps {
  task: {
    title: string;
    level: string;
    deadline: string;
    description: string;
  };
  onMarkAsComplete?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onMarkAsComplete }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <span style={styles.level}>{task.level}</span>
        {onMarkAsComplete && (
          <button style={styles.completeButton} onClick={onMarkAsComplete}>
            Mark as Complete
          </button>
        )}
      </div>
      <div style={styles.cardContent}>
        <h4 style={styles.cardTitle}>{task.title}</h4>
        <p>Deadline: {task.deadline}</p>
        <p>Description: {task.description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#3d3d3d",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    color: "#fff",
  },
  cardHeader: {
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  level: {
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#ff5252",
    color: "#fff",
    fontSize: "12px",
  },
  cardContent: {},
  cardTitle: {
    margin: "0 0 10px 0",
  },
  completeButton: {
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    color: "#fff",
    cursor: "pointer",
  },
};

export default TaskCard;
