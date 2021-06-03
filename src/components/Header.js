import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="Header" style={headingStyle}>
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onAdd={onAdd}
      />
    </header>
  );
};
Header.protoType = {
  title: PropTypes.string,
};

const headingStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem 0 3rem 0",
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
