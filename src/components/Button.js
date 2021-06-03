const Button = ({ color, text, onAdd }) => {
  return (
    <button
      style={{ backgroundColor: color, width: "5rem", fontSize: "1.3rem" }}
      onClick={onAdd}
    >
      {text}
    </button>
  );
};
export default Button;
