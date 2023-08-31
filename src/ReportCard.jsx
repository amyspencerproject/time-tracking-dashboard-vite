import { useState } from "react";
import data from "./data.json";

const ReportCard = () => {
  //   const dataOject = JSON.parse(data);
  const [daily, setDaily] = useState(data);
  console.log(daily);
  console.log(daily[0].title);
  return (
    <>
      <div className="report-card card work">
        <div className="report-info card">
          <div className="report-header">
            <h2>{daily[0].title}</h2>
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
            <span className="total-hours">32hrs</span>
            <p>
              Last Week - <span className="previous">36hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card play">
        <div className="report-info card">
          <div className="report-header">
            <h2>Play</h2>
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
            <span className="total-hours">32hrs</span>
            <p>
              Last Week - <span className="previous">36hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card study">
        <div className="report-info card">
          <div className="report-header">
            <h2>Study</h2>
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
            <span className="total-hours">32hrs</span>
            <p>
              Last Week - <span className="previous">36hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card exercise">
        <div className="report-info card">
          <div className="report-header">
            <h2>Exercise</h2>
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
            <span className="total-hours">32hrs</span>
            <p>
              Last Week - <span className="previous">36hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card social">
        <div className="report-info card">
          <div className="report-header">
            <h2>Social</h2>
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
            <span className="total-hours">32hrs</span>
            <p>
              Last Week - <span className="previous">36hrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="report-card card self-care">
        <div className="report-info card">
          <div className="report-header">
            <h2>Self Care</h2>
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
              {/* <img className="svg-ellipsis" src="/icon-ellipsis.svg" alt="" /> */}
            </div>
          </div>
          <div className="flex-wrapper hours-text">
            <span className="total-hours">32hrs</span>
            <p>
              Last Week - <span className="previous">36hrs</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportCard;
