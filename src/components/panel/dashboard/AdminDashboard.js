import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import HighestIncomeChart from "../../charts/HighestIncomeChart";
import HighestProjectChart from "../../charts/HighestProjectChart";
import WeeklyChart from "../../charts/WeeklyChart";

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState({
    income: 0,
    projects: 0,
  });

  useEffect(() => {
    // Make an HTTP GET request to the /dashboardstatusadmin API
    fetch("http://localhost:4000/dashboardstatusadmin")
      .then((response) => response.json())
      .then((data) => {
        setDashboardData(data); // Update the component state with the received data
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

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
          <p className="right-div-counter-dashboard">{dashboardData.income}$</p>
          <div className="right-div-bar-dashboard">&nbsp;</div>
          <p className="right-div-title-dashboard">مجموع تعداد پروژه ها</p>
          <p className="right-div-counter-dashboard">
            {dashboardData.projects} پروژه
          </p>
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
