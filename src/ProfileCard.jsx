const ProfileCard = ({ onDailyTab, onWeeklyTab, onMonthlyTab, timeFrame }) => {
  return (
    <div className="card profile-card">
      <div className="profile card">
        <img src="/image-jeremy.png" alt="Headshot of Jeremey smiling" />
        <div className="profile-text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <ul role="tablist" className="flex-wrapper frequency-text">
        <li
          role="tab"
          tabIndex="0"
          aria-labelledby="daily"
          onClick={onDailyTab}
          value="daily"
          className={
            timeFrame === "daily"
              ? "active time-frame-element"
              : "time-frame-element"
          }
          aria-selected={timeFrame === "daily" ? "true" : "false"}
        >
          Daily
        </li>
        <li
          role="tab"
          tabIndex="0"
          aria-labelledby="weekly"
          onClick={onWeeklyTab}
          value="weekly"
          className={
            timeFrame === "weekly"
              ? "active time-frame-element"
              : "time-frame-element"
          }
          aria-selected={timeFrame === "weekly" ? "true" : "false"}
        >
          Weekly
        </li>
        <li
          role="tab"
          tabIndex="0"
          aria-labelledby="monthly"
          onClick={onMonthlyTab}
          value="monthly"
          className={
            timeFrame === "monthly"
              ? "active time-frame-element"
              : "time-frame-element"
          }
          aria-selected={timeFrame === "monthly" ? "true" : "false"}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
