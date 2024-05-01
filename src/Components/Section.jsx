import React, { useContext } from "react";
import Admin from "./Admin";
import "../css/section.css";
import { AppContext } from "../App";

const Section = () => {
  const value = useContext(AppContext);
  return (
    <>
      <section className="main_section">
        <header className="head">
          <h1 className="dashborad_name">Admin dashboard</h1>
          <div className="path">
            <p className="pathClick">Home</p>
            {">"}
            <p className="pathClick">{value.currentPath}</p>
          </div>
        </header>
        <Admin />
      </section>
    </>
  );
};

export default Section;
