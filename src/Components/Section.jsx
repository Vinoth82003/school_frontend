import React, { useContext } from "react";
import Admin from "./Admin";
import "../css/section.css";
import { AppContext } from "../App";
import AllStudents from "./AllStudents";
import AddStudent from "./AddStudent";
import Studentpromotion from "./Studentpromotion";

const Section = () => {
  const value = useContext(AppContext);
  let paths = value.currentPath;

  const active =
    value.currentClick[0].length === 2
      ? value.currentClick[0][1]
      : value.currentClick[0];
  console.log(active);

  return (
    <>
      <section
        className={`main_section 
      ${value.isSidebar ? "active" : ""}
      ${value.isAdmin ? "admin" : "normal"}
      `}
      >
        <header className="head">
          <h1 className="dashborad_name">Admin dashboard</h1>
          <div className="path">
            <p className="pathClick">Home</p>
            {paths.map((path, index) => {
              return (
                <p key={index} className="pathClick">
                  / {path}
                </p>
              );
            })}
          </div>
          {active === "dashboard" && <Admin />}
          {active === "all student" && <AllStudents />}
          {active === "add student" && <AddStudent />}
          {active === "Student Promotion" && <Studentpromotion />}
          {active === "all teachers" && <Studentpromotion />}
        </header>
      </section>
    </>
  );
};

export default Section;
