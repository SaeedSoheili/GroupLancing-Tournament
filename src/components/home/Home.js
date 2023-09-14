import React, { useState, useEffect } from "react";
import "./Home.css";
import Talents from "./Talents";
import ProgressBar from "./ProgressBar";

export default function Home() {
  const [talentData, setTalentData] = useState(null); // Initialize as null to indicate data is loading

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:4000/usersdatahome")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTalentData(data.data);
          console.log(data.data);
        } else {
          console.error("Error fetching data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <img
        className="party-popper-image party-popper-image-1"
        src="./assets/party-popper.png"
      />
      <img
        className="party-popper-image party-popper-image-2"
        src="./assets/party-popper.png"
      />

      <h1 className="title-home">نتایج مسابقه</h1>
      <p className="subtitle-home">
        تا روز <span className="subtitle-currentday-home">۶۴</span>
      </p>
      <div className="container-body">
        {/* Conditionally render Talents component when talentData is available */}
        {talentData && (
          <>
            <Talents platformName="upwork" users={talentData.upwork} />
            <Talents platformName="fiverr" users={talentData.fiverr} />
            <Talents platformName="amazon" users={talentData.amazon} />
            <Talents
              platformName="peopleperhour"
              users={talentData.peopleperhour}
            />
          </>
        )}
      </div>
      <div className="footer-home">
        <ProgressBar />
      </div>
    </div>
  );
}
