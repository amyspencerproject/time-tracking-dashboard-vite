const ProfileCard = ({ handleTimeFrameChange }) => {
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
        {/* these options should not be <p> but not sure what element to use?? */}
        <p onChange={handleTimeFrameChange} value="daily" className="active">
          Daily
        </p>
        <p onChange={handleTimeFrameChange} value="weekly" className="active">
          Weekly
        </p>
        <p onChange={handleTimeFrameChange} value="monthly" className="active">
          Monthly
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
