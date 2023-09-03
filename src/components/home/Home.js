import React from "react";
import "./Home.css";
import Talents from "./Talents";
import ProgressBar from "./ProgressBar";
import { users } from "../../FakeData";

export default function Home() {
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
        <Talents platformName="upwork" />
        <Talents platformName="fiverr" />
        <Talents platformName="amazon" />
        <Talents platformName="peopleperhour" />
      </div>
      <div className="footer-home">
        <ProgressBar />
      </div>
    </div>
  );
}
