import data from "./data.json";
// import TimeFrame from "./TimeFrame";

// start with importing in data.json
// figure out path in object to get info
// pull out all the data for each time frame - maybe with filter() or maybe with map()
// when a user selects daily then map over daily data for all categories to populate card info

const ReportCard = ({ timeFrame }) => {
  const weeklyTimeFrame = data.map((data) => {
    return {
      title: data.title,
      timeframes: data.timeframes.weekly,
    };
  });
  console.log(weeklyTimeFrame);
  if (timeFrame === "weekly") {
    data.map((data) => {
      return (
        <>
          <div className="report-card card work">
            <div className="report-info card">
              <div className="report-header">
                <h2>{data.title}</h2>
                <div className="svg-wrapper">
                  <svg
                    className="svg-ellipsis"
                    width="21"
                    height="5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                      fill=""
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-wrapper hours-text">
                <span className="total-hours">
                  {data.timeframes.weekly.current}hrs
                </span>
                <p>
                  Last Week -{" "}
                  <span className="previous">
                    {data.timeframes.weekly.previous}hrs
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    });
  }
};

export default ReportCard;
