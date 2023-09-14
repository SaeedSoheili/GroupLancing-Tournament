import React from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  const milestones = [
    { amount: 0, label: "شروع مسابقه" },
    { amount: 2000, label: "2000$ هدف اول" },
    { amount: 4000, label: "4000$ هدف دوم" },
    { amount: 6000, label: "6000$ هدف سوم" },
    { amount: 8000, label: "8000$ هدف چهارم" },
    { amount: 10000, label: "10000$ هدف پنجم" },
  ];

  const lastMilestoneAmount = milestones[milestones.length - 1].amount;
  const totalIncomes = 3210;
  const totalProjects = 168;
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
              (milestone.amount * 100) / lastMilestoneAmount;
            let mileStoneStyle = {
              left: `${mileStonePositionPercent}%`,
            };

            return (
              <div
                key={milestone.amount}
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
              (milestone.amount * 100) / lastMilestoneAmount - 5;
            let mileStoneDetailsStyle = {
              left: `${mileStoneDetailsPositionPercent}%`,
            };

            return (
              <div
                key={milestone.amount}
                style={mileStoneDetailsStyle}
                className="milestones-details-progressbar"
              >
                {milestone.label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
