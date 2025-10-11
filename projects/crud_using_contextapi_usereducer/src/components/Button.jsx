const Button = ({ btnColor, btnText, type, onClick }) => {
  return (
    <>
      <button
        type={type}
        style={{ whiteSpace: "nowrap" }}
        className={`btn ${btnColor}`}
        onClick={onClick}
      >
        {btnText}{" "}
      </button>
    </>
  );
};

export default Button;
