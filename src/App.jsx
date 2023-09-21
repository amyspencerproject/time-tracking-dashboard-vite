import { useState } from "react";
import data from "./data.json";

import ProfileCard from "./ProfileCard";
import ReportCard from "./ReportCard";
import Footer from "./Footer";

function App() {
  const [timeFrame, setTimeFrame] = useState("daily");

  let selectedTimeFrame;
  if (timeFrame === "daily") {
    selectedTimeFrame = data.map((data) => {
      return {
        title: data.title,
        classname: data.title.toLowerCase().replace(/\s+/g, "-"),
        timeframes: data.timeframes.daily,
      };
    });
  }

  if (timeFrame === "weekly") {
    selectedTimeFrame = data.map((data) => {
      return {
        title: data.title,
        classname: data.title.toLowerCase().replace(/\s+/g, "-"),
        timeframes: data.timeframes.weekly,
      };
    });
  }

  if (timeFrame === "monthly") {
    selectedTimeFrame = data.map((data) => {
      return {
        title: data.title,
        classname: data.title.toLowerCase().replace(/\s+/g, "-"),
        timeframes: data.timeframes.monthly,
      };
    });
  }
  // daily
  const handleDailyTab = () => {
    setTimeFrame("daily");
    // add aria-selected="true"
    // have text turn white when selected
  };

  // weekly
  const handleWeeklyTab = () => {
    setTimeFrame("weekly");
  };

  // monthly
  const handleMonthlyTab = () => {
    setTimeFrame("monthly");
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
          <ReportCard selectedTimeFrame={selectedTimeFrame} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
