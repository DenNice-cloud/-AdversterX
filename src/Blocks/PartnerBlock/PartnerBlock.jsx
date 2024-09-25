import MainButton from "../../UI/MainButton/MainButton";
import Slider from "../../UI/Slider/Slider";
import "./PartnerBlock.scss";

export const PartnerBlock = ({ setCurrentPage }) => {
  return (
    <div className="main--partner-page">
      <div
        className="main--partner-page__title"
        data-text="Who Would You Choose as Your First Partner, if you play right now?"
      >
        Who Would You Choose as Your First Partner, if you play right now?
      </div>

      <div className="main--partner-page__slider">
        <Slider />
      </div>

      <div  className="main--partner-page__button">
        <MainButton
          buttonValue="next"
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
