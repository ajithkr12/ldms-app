import { SlArrowRight } from "react-icons/sl";

const IconRightButton = ({ text, activeTabValue, tabValue, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 22px",
        cursor: "pointer",
        backgroundColor: activeTabValue === tabValue ? "#3A36DB" : "#FFFFFF",
        color: activeTabValue === tabValue ? "white" : "#3A36DB",
        border: "1px solid #3A36DB",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {text}
      <SlArrowRight
        className="icon text-lg"
        style={{ marginLeft: "12px", width: "16px" }}
      />
    </button>
  );
};

export default IconRightButton;
