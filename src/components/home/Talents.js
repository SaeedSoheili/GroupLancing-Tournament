import React from "react";
import "./Talents.css";
import { users } from "../../FakeData";

export default function Talents() {
  return (
    <div className="talent-div">
      <img className="talent-logo-image" src="./assets/Upwork-Logo.png" />
      <div className="first-one-div-talent">
        <div className="first-one-circle-div-talent">
          <span className="first-one-circle-number-div-talent">1</span>
          <sub>ST</sub>
        </div>
        <img
          className="user-image-logo-talent"
          src="./assets/user-image-logo-default.png"
        />
        <div className="first-one-details-box-talent">
          <p className="first-one-name-talent">عباس ملاولی</p>
          <p className="first-one-second-row-talent">
            <span className="first-one-job-talent">برنامه نویسی</span>
            <span className="first-one-projects-talent">۳ پروژه</span>
            <span className="first-one-income-talent">$۸۹۰</span>
          </p>
        </div>
      </div>
      <div className="list-users-talents">
        {users.map((user) => {
          return (
            <div className="user-box-div-talents">
              <div className="user-box-circle-talents">2</div>
              <div className="user-name-job-div-talents">
                <p className="user-name-talents">{user.name}</p>
                <p className="user-job-talents">{user.job}</p>
              </div>
              <span className="user-projects-talents">
                {user.projects} پروژه
              </span>
              <span className="user-income-talents">${user.income}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
