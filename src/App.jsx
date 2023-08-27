import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="card profile-card">
          <div className="profile card">
            <img src="/image-jeremy.png" alt="Headshot of Jeremey smiling" />
            <div className="profile-text">
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <div className="flex-wrapper frequency-text">
            <p className="active">Daily</p>
            <p className="active">Weekly</p>
            <p className="active">Monthly</p>
          </div>
        </div>

        {/* report cards start */}
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

        {/* report cards start */}
      </main>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/amyspencerproject"
            target="_blank"
            rel="noreferrer"
          >
            Amy Spencer
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
