import React from "react";
import "./UserDashboard.css";
import WeeklyChart from "../../charts/WeeklyChart";

export default function UserDashboard() {
  return (
    <div className="div-container-dashboard">
      <div className="first-row-dashboard">
        <div className="first-row-left-div-dashboard">
          <div className="user-status-track-userdashboard">
            <p className="user-status-title-userdashboard">نفر بعد شما</p>
            <p className="name-user-status-userdashboard">علی احمدی</p>
            <p className="platform-user-status-userdashboard">پلتفورم: فایور</p>
            <p className="rank-user-status-userdashboard">رتبه: 6</p>
            <p className="income-user-status-userdashboard">درآمد: 422$</p>
          </div>

          <div className="user-status-track-userdashboard">
            <p className="user-status-title-userdashboard">وضعیت شما</p>
            <p className="name-user-status-userdashboard">علی احمدی</p>
            <p className="platform-user-status-userdashboard">پلتفورم: فایور</p>
            <p className="rank-user-status-userdashboard">رتبه: 6</p>
            <p className="income-user-status-userdashboard">درآمد: 422$</p>
          </div>

          <div className="user-status-track-userdashboard">
            <p className="user-status-title-userdashboard">نفر قبل شما</p>
            <p className="name-user-status-userdashboard">علی احمدی</p>
            <p className="platform-user-status-userdashboard">پلتفورم: فایور</p>
            <p className="rank-user-status-userdashboard">رتبه: 6</p>
            <p className="income-user-status-userdashboard">درآمد: 422$</p>
          </div>
        </div>
        <div className="first-row-right-div-userdashboard">
          <div className="first-row-right-top-userdashboard">
            <p className="right-div-title-userdashboard">
              رتبه شما بین تمام شرکت کننده ها
            </p>
            <p className="right-div-counter-userdashboard">6</p>
            <p>از 253 شرکت کننده</p>
          </div>
          <div className="right-div-bar-userdashboard"></div>
          <div className="first-row-right-bottom-userdashboard">
            <p className="right-div-title-userdashboard">تعداد پروژه های شما</p>
            <p className="right-div-counter-userdashboard">142 پروژه</p>
          </div>
        </div>
      </div>
      <div className="second-row-dashboard">
        <div className="second-row-div-userdashboard">
          <p className="second-row-title-userdashboard">گزارش هفتگی</p>
          <div className="weekly-chart-userdashboard">
            <WeeklyChart />
          </div>
        </div>
      </div>
    </div>
  );
}
