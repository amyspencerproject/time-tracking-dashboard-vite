const TimeFrame = ({ timeFrame }) => {
  // set State for time frame user wants to see
  const onTimeFrameChange = () => {
    if (timeFrame === "weekly") {
      return (
        <>
          <span className="total-hours">
            {work.timeframes.weekly.current}hrs
          </span>
          <p>
            Last Week -{" "}
            <span className="previous">
              {work.timeframes.weekly.previous}hrs
            </span>
          </p>
        </>
      );
    } else if (timeFrame === "daily") {
      return (
        <>
          <span className="total-hours">
            {work.timeframes.daily.current}hrs
          </span>
          <p>
            Yesterday -{" "}
            <span className="previous">
              {work.timeframes.daily.previous}hrs
            </span>
          </p>
        </>
      );
    } else {
      return (
        <>
          <span className="total-hours">
            {work.timeframes.monthly.current}hrs
          </span>
          <p>
            Last month -{" "}
            <span className="previous">
              {work.timeframes.monthly.previous}hrs
            </span>
          </p>
        </>
      );
    }
  };
};

export default TimeFrame;
