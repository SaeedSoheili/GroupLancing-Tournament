import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import WeeklyChartUser from "../../charts/WeeklyChartUser";

export default function UserDashboard({ loggedInUserEmail }) {
  const [data, setData] = useState([]);

  console.log(loggedInUserEmail);

  useEffect(() => {
    // Fetch data from your API endpoint with the loggedInUserEmail as a query parameter
    fetch(
      `http://localhost:4000/getuserdashboarddata?email=${loggedInUserEmail}`
    )
      .then((response) => response.json())
      .then((apiData) => {
        // Map English day names to Persian day names
        setData(apiData);
        console.log(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [loggedInUserEmail]);

  return (
    <div className="div-container-dashboard">
      {data.currentUser && data.currentUser.projects && (
        <div className="first-row-dashboard">
          <div className="first-row-left-div-dashboard">
            <div className="user-status-track-userdashboard">
              <p className="user-status-title-userdashboard">نفر بعد شما</p>
              <p className="name-user-status-userdashboard">
                {data.aboveUser.name}
              </p>
              <p className="platform-user-status-userdashboard">
                پلتفورم: {data.aboveUser.platform}
              </p>
              <p className="rank-user-status-userdashboard">
                رتبه: {data.platformRank - 1}
              </p>
              <p className="income-user-status-userdashboard">
                درآمد: {data.aboveUser.income}$
              </p>
            </div>

            <div className="user-status-track-userdashboard">
              <p className="user-status-title-userdashboard">وضعیت شما</p>
              <p className="name-user-status-userdashboard">
                {data.currentUser.name}
              </p>
              <p className="platform-user-status-userdashboard">
                پلتفورم: {data.currentUser.platform}
              </p>
              <p className="rank-user-status-userdashboard">
                رتبه: {data.platformRank}
              </p>
              <p className="income-user-status-userdashboard">
                درآمد: {data.currentUser.income}$
              </p>
            </div>

            <div className="user-status-track-userdashboard">
              <p className="user-status-title-userdashboard">نفر قبل شما</p>
              <p className="name-user-status-userdashboard">
                {data.belowUser.name}
              </p>
              <p className="platform-user-status-userdashboard">
                پلتفورم: {data.belowUser.platform}
              </p>
              <p className="rank-user-status-userdashboard">
                رتبه: {data.platformRank + 1}
              </p>
              <p className="income-user-status-userdashboard">
                درآمد: {data.belowUser.income}$
              </p>
            </div>
          </div>
          <div className="first-row-right-div-userdashboard">
            <div className="first-row-right-top-userdashboard">
              <p className="right-div-title-userdashboard">
                رتبه شما بین تمام شرکت کننده ها
              </p>
              <p className="right-div-counter-userdashboard">
                {data.globalRank}
              </p>
              <p>از {data.totalParticipants} شرکت کننده</p>
            </div>
            <div className="right-div-bar-userdashboard"></div>
            <div className="first-row-right-bottom-userdashboard">
              <p className="right-div-title-userdashboard">
                تعداد پروژه های شما
              </p>
              <p className="right-div-counter-userdashboard">
                {data.currentUser.projects} پروژه
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="second-row-dashboard">
        <div className="second-row-div-userdashboard">
          <p className="second-row-title-userdashboard">گزارش هفتگی</p>
          <div className="weekly-chart-userdashboard">
            <WeeklyChartUser loggedInUserEmail={loggedInUserEmail} />
          </div>
        </div>
      </div>
    </div>
  );
}
