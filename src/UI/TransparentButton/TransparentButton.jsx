import "./TransparentButton.scss";

const TransparentButton = ({ buttonValue }) => {
  return (
    <div className="transparent-button">
      <p className="transparent-button--name">{buttonValue.toUpperCase()}</p>
    </div>
  );
};

export default TransparentButton;
