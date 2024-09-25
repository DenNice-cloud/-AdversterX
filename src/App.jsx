import { useState } from "react";
import "./App.scss";
import { pages } from "./utils/pages";
import SoundButton from "./UI/SoundButton/SoundButton";
import { WelcomeBlock } from "./Blocks/WelcomeBlock/WelcomeBlock";
import { PartnerBlock } from "./Blocks/PartnerBlock/PartnerBlock";
import { WarningBlock } from "./Blocks/WarningBlock/WarningBlock";

function App() {
  const [currentPage, setCurrentPage] = useState(pages.welcome);

  return (
    <div className="App">
      <div className="app--sound-button">
        <SoundButton />
      </div>

      <main className="main">
        {currentPage === pages.welcome && (
          <WelcomeBlock setCurrentPage={setCurrentPage} />
        )}

        {currentPage === pages.partner && (
          <PartnerBlock setCurrentPage={setCurrentPage} />
        )}

        {currentPage === pages.warning && (
          <WarningBlock setCurrentPage={setCurrentPage} />
        )}
      </main>
    </div>
  );
}

export default App;
