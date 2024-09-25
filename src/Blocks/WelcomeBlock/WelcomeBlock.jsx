import MainButton from "../../UI/MainButton/MainButton";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import FirstGirl from "../../images/bg-main_page-1.png";
import SecondGirl from "../../images/bg-main_page-2.png";
import "./WelcomeBlock.scss";

export const WelcomeBlock = ({ setCurrentPage }) => {
  return (
    <div className="main--welcome-page">
      <div className="main--welcome-page__header">
        <div className="main--welcome-page__transperent">
          Stop spending time on mediocre online stuff!
        </div>

        <div
          className="main--welcome-page__title"
          data-text="Explore our intriguing 3D game"
        >
          Explore our intriguing 3D game
        </div>

        <div className="main--welcome-page__description">
          instead and experience unparalleled pleasure like you've never seen
          before.
        </div>
      </div>
      
      <div className="main--welcome-page__buttons">
        <TransparentButton buttonValue={`No,Thanks`} />

        <MainButton
          buttonValue={`continue`}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <img
        src={FirstGirl}
        className="main--welcome-page__bg-first"
        alt="Background Woman"
      />

      <img
        src={SecondGirl}
        className="main--welcome-page__bg-second"
        alt="Background Woman"
      />
    </div>
  );
};
