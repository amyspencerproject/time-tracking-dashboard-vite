// import data from "./data.json";
// import TimeFrame from "./TimeFrame";

// start with importing in data.json
// figure out path in object to get info
// pull out all the data for each time frame - maybe with filter() or maybe with map()
// when a user selects daily then map over daily data for all categories to populate card info

const ReportCard = ({ selectedTimeFrame }) => {
  const work = selectedTimeFrame[0];
  const play = selectedTimeFrame[1];
  const study = selectedTimeFrame[2];
  const exercise = selectedTimeFrame[3];
  const social = selectedTimeFrame[4];
  const selfcare = selectedTimeFrame[5];

  console.log(study);
  return (
    <>
      <div className="report-card card work">
        <div className="report-info card">
          <div className="report-header">
            <h2>{work.title}</h2>
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
            <span className="total-hours">{work.timeframes.current}hrs</span>
            <p>
              Last Week -{" "}
              <span className="previous">{work.timeframes.previous}hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card play">
        <div className="report-info card">
          <div className="report-header">
            <h2>{play.title}</h2>
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
            <span className="total-hours">{play.timeframes.current}hrs</span>
            <p>
              Last Week -{" "}
              <span className="previous">{play.timeframes.previous}hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card study">
        <div className="report-info card">
          <div className="report-header">
            <h2>{study.title}</h2>
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
            <span className="total-hours">{study.timeframes.current}hrs</span>
            <p>
              Last Week -{" "}
              <span className="previous">{study.timeframes.previous}hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card exercise">
        <div className="report-info card">
          <div className="report-header">
            <h2>{exercise.title}</h2>
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
              {exercise.timeframes.current}hrs
            </span>
            <p>
              Last Week -{" "}
              <span className="previous">
                {exercise.timeframes.previous}hrs
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card social">
        <div className="report-info card">
          <div className="report-header">
            <h2>{social.title}</h2>
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
            <span className="total-hours">{social.timeframes.current}hrs</span>
            <p>
              Last Week -{" "}
              <span className="previous">{social.timeframes.previous}hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card self-care">
        <div className="report-info card">
          <div className="report-header">
            <h2>{selfcare.title}</h2>
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
              {selfcare.timeframes.current}hrs
            </span>
            <p>
              Last Week -{" "}
              <span className="previous">
                {selfcare.timeframes.previous}hrs
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportCard;
