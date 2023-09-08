import React from "react";
import "./Dashboard.css";
import HighestIncomeChart from "../../charts/HighestIncomeChart";
import HighestProjectChart from "../../charts/HighestProjectChart";
import WeeklyChart from "../../charts/WeeklyChart";

export default function Dashboard() {
  return (
    <div className="div-container-dashboard">
      <div className="first-row-dashboard">
        <div className="first-row-left-div-dashboard">
          <div className="left-div-left-dashboard">
            <p className="top-income-title-dashboard">بیشترین درآمد</p>
            <div className="top-income-chart-dashboard">
              <HighestIncomeChart />
            </div>
          </div>
          <div className="left-div-right-dashboard">
            <p className="top-projects-title-dashboard">بیشترین پروژه ها</p>
            <div className="top-projects-chart-dashboard">
              <HighestProjectChart />
            </div>
          </div>
        </div>
        <div className="first-row-right-div-dashboard">
          <p className="right-div-title-dashboard">مجموع درآمد مسابقه</p>
          <p className="right-div-counter-dashboard">10000$</p>
          <div className="right-div-bar-dashboard">&nbsp;</div>
          <p className="right-div-title-dashboard">مجموع تعداد پروژه ها</p>
          <p className="right-div-counter-dashboard">142 پروژه</p>
        </div>
      </div>
      <div className="second-row-dashboard">
        <div className="second-row-div-dashboard">
          <p className="second-row-title-dashboard">گزارش هفتگی</p>
          <div className="weekly-chart-dashboard">
            <WeeklyChart />
          </div>
        </div>
      </div>
    </div>
  );
}
