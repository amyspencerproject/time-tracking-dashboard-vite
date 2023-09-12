const ProfileCard = ({ handleDailyTab, handleWeeklyTab, handleMonthlyTab }) => {
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
          aria-labelledby="daily"
          onClick={handleDailyTab}
          value="daily"
          className="time-frame-element"
        >
          Daily
        </li>
        <li
          role="tab"
          aria-labelledby="weekly"
          onClick={handleWeeklyTab}
          value="weekly"
          className="time-frame-element"
        >
          Weekly
        </li>
        <li
          role="tab"
          aria-labelledby="monthly"
          onClick={handleMonthlyTab}
          value="monthly"
          className="time-frame-element"
        >
          Monthly
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
