const ProfileCard = ({ handleDailyBtn, handleWeeklyBtn, handleMonthlyBtn }) => {
  return (
    <div className="card profile-card">
      <div className="profile card">
        <img src="/image-jeremy.png" alt="Headshot of Jeremey smiling" />
        <div className="profile-text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="flex-wrapper frequency-text">
        <button onClick={handleDailyBtn} value="daily" className="hover">
          Daily
        </button>
        <button onClick={handleWeeklyBtn} value="weekly" className="hover">
          Weekly
        </button>
        <button onClick={handleMonthlyBtn} value="monthly" className="hover">
          Monthly
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
