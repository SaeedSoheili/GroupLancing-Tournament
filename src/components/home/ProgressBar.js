import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({
  progressBarData,
  incomeData,
  projectsData,
}) {
  // const milestones = [
  //   { value: 0, name: "شروع مسابقه" },
  //   { value: 2000, name: "2000$ هدف اول" },
  //   { value: 4000, name: "4000$ هدف دوم" },
  //   { value: 6000, name: "6000$ هدف سوم" },
  //   { value: 8000, name: "8000$ هدف چهارم" },
  //   { value: 10000, name: "10000$ هدف پنجم" },
  // ];

  let milestones = progressBarData;

  const lastMilestoneAmount = milestones[milestones.length - 1].value;
  const totalIncomes = incomeData;
  const totalProjects = projectsData;
  let progressBarStyle = {
    width: `${(totalIncomes * 100) / lastMilestoneAmount}%`,
  };
  let detailsStyle = {
    left: `${(totalIncomes * 100) / lastMilestoneAmount - 10}%`,
  };

  return (
    <>
      <div className="container-progressbar">
        <div className="progressbar-details-progressbar">
          {/* Total Details */}
          <div style={detailsStyle} className="total-details-progressbar">
            <p>
              {totalProjects} پروژه ، {totalIncomes}$
            </p>
            <div className="triangle"></div>
          </div>
        </div>
        <div className="progressbar-div-progressbar">
          {/* ProgressBar Bar */}
          <div
            style={progressBarStyle}
            className="progressbar-bar-progressbar"
          ></div>
          {/* Mile Stones */}
          {milestones.map((milestone) => {
            let mileStonePositionPercent =
              (milestone.value * 100) / lastMilestoneAmount;
            let mileStoneStyle = {
              left: `${mileStonePositionPercent}%`,
            };

            return (
              <div
                key={milestone.value}
                style={mileStoneStyle}
                className="milestones-progressbar"
              ></div>
            );
          })}
        </div>
        <div className="progressbar-milestones-details-progressbar">
          {/* Milestones Details */}
          {milestones.map((milestone) => {
            let mileStoneDetailsPositionPercent =
              (milestone.value * 100) / lastMilestoneAmount - 5;
            let mileStoneDetailsStyle = {
              left: `${mileStoneDetailsPositionPercent}%`,
            };

            return (
              <div
                key={milestone.value}
                style={mileStoneDetailsStyle}
                className="milestones-details-progressbar"
              >
                {milestone.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
