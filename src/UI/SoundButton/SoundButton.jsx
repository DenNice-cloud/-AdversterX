import React, { useState } from "react";
import "./SoundButton.scss";
import SoundIcon from "../../images/sound.svg";
import MutedIcon from "../../images/muted.svg";

const SoundButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={`sound-button ${isMuted ? "muted" : ""}`} onClick={handleToggle}>
      <img src={isMuted ? MutedIcon : SoundIcon} alt="Sound Icon" />
    </div>
  );
};

export default SoundButton;
