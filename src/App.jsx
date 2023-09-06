import { useState } from "react";

import ProfileCard from "./ProfileCard";
import ReportCard from "./ReportCard";
import Footer from "./Footer";

function App() {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const handleTimeFrameChange = (e) => {
    setTimeFrame(e.target.value);
    console.log(timeFrame);
  };

  return (
    <>
      <main>
        <div className="all-cards-container">
          <ProfileCard handleTimeFrameChange={handleTimeFrameChange} />
          <ReportCard timeFrame={timeFrame} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
