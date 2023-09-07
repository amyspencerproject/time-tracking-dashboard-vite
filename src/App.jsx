import { useState } from "react";

import ProfileCard from "./ProfileCard";
import ReportCard from "./ReportCard";
import Footer from "./Footer";

function App() {
  const [timeFrame, setTimeFrame] = useState("weekly");
  console.log(timeFrame);

  // daily
  const handleDailyTab = () => {
    setTimeFrame("daily");
    console.log(timeFrame);
    // add aria-selected="true"
    // have text turn white when selected
  };

  // weekly
  const handleWeeklyTab = () => {
    setTimeFrame("weekly");
    console.log(timeFrame);
  };

  // monthly
  const handleMonthlyTab = () => {
    setTimeFrame("monthly");
    console.log(timeFrame);
  };

  return (
    <>
      <main>
        <div className="all-cards-container">
          <ProfileCard
            handleDailyTab={handleDailyTab}
            handleWeeklyTab={handleWeeklyTab}
            handleMonthlyTab={handleMonthlyTab}
          />
          <ReportCard timeFrame={timeFrame} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
