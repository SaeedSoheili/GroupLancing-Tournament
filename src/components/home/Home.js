import React from "react";
import "./Home.css";
import Talents from "./Talents";

export default function Home() {
  return (
    <div>
      <h1 className="title-home">نتایج مسابقه</h1>
      <p className="subtitle-home">
        تا روز <span className="subtitle-currentday-home">۶۴</span>
      </p>
      <div className="container-body">
        <Talents />
      </div>
    </div>
  );
}
