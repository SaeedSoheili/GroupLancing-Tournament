import React from "react";
import "./Talents.css";
// import { users } from "../../FakeData";

export default function Talents({ platformName, users }) {
  console.log(users);
  // const platform = platformName; // Change this to your desired platform
  // const filteredUsers = users.filter((user) => user.platform === platform);

  // // Sort users by income in descending order
  // const sortedUsers = filteredUsers.slice().sort((a, b) => b.income - a.income);

  // // Limit the number of users to display to a maximum of 4
  // const topUsers = sortedUsers.slice(0, 5);

  let topUsers = users;

  return (
    <div className="talent-div">
      <img
        className="talent-logo-image"
        src={"./assets/" + platformName + "-Logo.png"}
      />
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
          {/* Display information of the top user */}
          <p className="first-one-name-talent">{topUsers[0].name}</p>
          <p className="first-one-second-row-talent">
            <span className="first-one-job-talent">{topUsers[0].job}</span>
            <span className="first-one-projects-talent">
              {topUsers[0].projects} پروژه
            </span>
            <span className="first-one-income-talent">
              ${topUsers[0].income}
            </span>
          </p>
        </div>
      </div>
      <div className="list-users-talents">
        <table className="user-table-talents">
          <tbody>
            {topUsers.slice(1).map((user, index) => {
              const rank = index + 2; // Calculate the rank starting from 2
              return (
                <tr className="user-box-div-talents" key={user.id}>
                  <td>
                    <div className="user-box-circle-talents">{rank}</div>{" "}
                    {/* Display the rank */}
                  </td>
                  <td>
                    <div className="user-name-job-div-talents">
                      <p className="user-name-talents">{user.name}</p>
                      <p className="user-job-talents">{user.job}</p>
                    </div>
                  </td>
                  <td>
                    <span className="user-projects-talents">
                      {user.projects} پروژه
                    </span>
                  </td>
                  <td>
                    <span className="user-income-talents">${user.income}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
