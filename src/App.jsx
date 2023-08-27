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
            <p>Daily</p>
            <p className="active">Weekly</p>
            <p>Monthly</p>
          </div>
        </div>
        <div className="report-card card work">
          {/* <img className="report-icon" src="/icon-work.svg" alt="" /> */}
          <div className="report-info card">
            <div className="report-header">
              <h2>Work</h2>
              <div className="svg-wrapper">
                <img src="/icon-ellipsis.svg" alt="" />
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
