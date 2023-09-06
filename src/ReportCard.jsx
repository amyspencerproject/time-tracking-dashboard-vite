import { useState } from "react";
import data from "./data.json";
import TimeFrame from "./TimeFrame";

// start with importing in data.json
// figure out path in object to get info
// pull out all the data for each time frame - maybe with filter() or maybe with map()
// when a user selects daily then map over daily data for all categories to populate card info

const ReportCard = ({ timeFrame }) => {
  const work = data[0];
  //   console.log(work);
  const play = data[1];
  const study = data[2];
  const exercise = data[3];
  const social = data[4];
  const selfcare = data[5];

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
            <TimeFrame timeFrame={timeFrame} />
          </div>
        </div>
      </div>
      <div className="report-card card work">
        <div className="report-info card">
          <div className="report-header">
            <h2>Work</h2>
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
