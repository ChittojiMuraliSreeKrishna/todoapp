import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      style={taskBody}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 style={taskText}>
        {task.text}
        <FaTimes style={faTimes} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const taskBody = {
  background: "lightgrey",
  textAlign: "start",
  margin: "0.5rem",
  padding: "0.7rem",
};
const taskText = {
  display: "flex",
  justifyContent: "space-between",
};

const faTimes = {
  color: "red",
  cursor: "pointer",
};
export default Task;
