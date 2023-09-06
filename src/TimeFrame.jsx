import data from "./data.json";

const TimeFrame = ({ timeFrame }) => {
  if (timeFrame === "weekly") {
    const weeklyTimeFrame = data.map((data) => {
      return {
        title: data.title,
        timeframe: data.timeframes.weekly,
      };
    });
    console.log(weeklyTimeFrame);
    return (
      <>
        <span className="total-hours">
          {weeklyTimeFrame.timeframe.current}hrs
        </span>
        <p>
          Last Week -{" "}
          <span className="previous">
            {weeklyTimeFrame.timeframe.previous}hrs
          </span>
        </p>
      </>
    );
  } else if (timeFrame === "daily") {
    const dailyTimeFrame = data.map((data) => {
      return {
        title: data.title,
        timeframe: data.timeframes.daily,
      };
    });
    return (
      <>
        <span className="total-hours">
          {dailyTimeFrame.timeframe.current}hrs
        </span>
        <p>
          Yesterday -{" "}
          <span className="previous">
            {dailyTimeFrame.timeframe.previous}hrs
          </span>
        </p>
      </>
    );
  } else {
    const monthlyTimeFrame = data.map((data) => {
      return {
        title: data.title,
        timeframe: data.timeframes.monthly,
      };
    });

    return (
      <>
        <span className="total-hours">
          {monthlyTimeFrame.timeframe.current}hrs
        </span>
        <p>
          Last month -{" "}
          <span className="previous">
            {monthlyTimeFrame.timeframe.previous}hrs
          </span>
        </p>
      </>
    );
  }
};

export default TimeFrame;
