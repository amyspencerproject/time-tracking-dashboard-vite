import { useState } from "react";

import { ProfileCard } from "./ProfileCard";
import ReportCard from "./ReportCard";
import Footer from "./Footer";

function App() {
  return (
    <>
      <main>
        <div className="all-cards-container">
          <ProfileCard />
          <ReportCard />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
