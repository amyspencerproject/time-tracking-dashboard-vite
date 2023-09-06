import { useState } from "react";

import ProfileCard from "./ProfileCard";
import ReportCard from "./ReportCard";
import Footer from "./Footer";

function App() {
  const [timeFrame, setTimeFrame] = useState("weekly");
  console.log(timeFrame);

  // daily
  const handleDailyBtn = () => {
    setTimeFrame("daily");
    console.log(timeFrame);
  };

  // weekly
  const handleWeeklyBtn = () => {
    setTimeFrame("weekly");
    console.log(timeFrame);
  };

  // monthly
  const handleMonthlyBtn = () => {
    setTimeFrame("monthly");
    console.log(timeFrame);
  };

  return (
    <>
      <main>
        <div className="all-cards-container">
          <ProfileCard
            handleDailyBtn={handleDailyBtn}
            handleWeeklyBtn={handleWeeklyBtn}
            handleMonthlyBtn={handleMonthlyBtn}
          />
          <ReportCard timeFrame={timeFrame} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
