export const ProfileCard = () => {
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
        <p className="active">Daily</p>
        <p className="active">Weekly</p>
        <p className="active">Monthly</p>
      </div>
    </div>
  );
};
