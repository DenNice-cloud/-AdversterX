import "./MainButton.scss";
import { pages } from "../../utils/pages";

const MainButton = ({ buttonValue, setCurrentPage }) => {
  const isChangeValue = () => {
    if (buttonValue === "next") {
      setCurrentPage(pages.warning);
    } else if (buttonValue === "continue") {
      setCurrentPage(pages.partner);
    } else {
      setCurrentPage(pages.welcome);
    }

    return 0;
  };

  return (
    <div
      className="button"
      onClick={() => isChangeValue(buttonValue)}
    >
      <p className="button--name">{buttonValue.toUpperCase()}</p>
    </div>
  );
};

export default MainButton;
