import React, { useState, useEffect } from "react";
import "./Home.css";
import Talents from "./Talents";
import ProgressBar from "./ProgressBar";

export default function Home() {
  const [talentDataFiverr, setTalentDataFiverr] = useState(null); // Initialize as null to indicate data is loading
  const [talentDataUpwork, setTalentDataUpwork] = useState(null); // Initialize as null to indicate data is loading
  const [talentDataAmazon, setTalentDataAmazon] = useState(null); // Initialize as null to indicate data is loading
  const [talentDataPph, setTalentDataPph] = useState(null); // Initialize as null to indicate data is loading

  const [progressBarData, setprogressBarData] = useState(null); // Initialize as null to indicate data is loading
  const [incomeData, setincomeData] = useState(null); // Initialize as null to indicate data is loading
  const [projectsData, setprojectsData] = useState(null); // Initialize as null to indicate data is loading

  const [daysPassed, setdaysPassed] = useState(null); // Initialize as null to indicate data is loading

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:4000/usersdatahome")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTalentDataFiverr(data.data.fiverr);
          setTalentDataUpwork(data.data.upwork);
          setTalentDataAmazon(data.data.amazon);
          setTalentDataPph(data.data.peopleperhour);
        } else {
          console.error("Error fetching data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:4000/getprogressbardata")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setprogressBarData(data.data.milestones);
          setincomeData(data.data.income);
          setprojectsData(data.data.projects);
          setdaysPassed(data.data.day);
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
      {daysPassed && (
        <>
          <h1 className="title-home">نتایج مسابقه</h1>
          <p className="subtitle-home">
            تا روز{" "}
            <span className="subtitle-currentday-home">{daysPassed}</span>
          </p>
        </>
      )}

      <div className="container-body">
        {talentDataUpwork && (
          <Talents platformName="upwork" users={talentDataUpwork} />
        )}
        {talentDataFiverr && (
          <Talents platformName="fiverr" users={talentDataFiverr} />
        )}
        {talentDataAmazon && (
          <Talents platformName="amazon" users={talentDataAmazon} />
        )}
        {talentDataPph && (
          <Talents platformName="peopleperhour" users={talentDataPph} />
        )}
      </div>
      <div className="footer-home">
        {progressBarData && (
          <ProgressBar
            progressBarData={progressBarData}
            incomeData={incomeData}
            projectsData={projectsData}
          />
        )}
      </div>
    </div>
  );
}
