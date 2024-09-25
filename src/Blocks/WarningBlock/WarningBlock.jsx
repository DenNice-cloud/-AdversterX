import MainButton from "../../UI/MainButton/MainButton";
import "./WarningBlock.scss";
import FirstWarningPageGirl from "../../images/bg-main_warning-1.png";
import SecondWarningPageGirl from "../../images/bg-main_warning-2.png";

export const WarningBlock = ({ setCurrentPage }) => {
  return (
    <div className="main--warning-page">
      <div className="main--warning-page__header">
        <div className="main--warning-page__title">Warning</div>

        <div className="main--warning-page__description">
          You must be at least 18 years old and comfortable with mature topics
          to play the game.
        </div>
      </div>
      
      <div className="main--warning-page__button">
        <MainButton
          buttonValue={`Ok, Continue`}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <img
        src={SecondWarningPageGirl}
        className="main--warning-page__bg-second"
      />

      <img
        src={FirstWarningPageGirl}
        className="main--warning-page__bg-first"
      />
    </div>
  );
};
