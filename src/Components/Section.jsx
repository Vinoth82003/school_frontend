import React, { useContext } from "react";
import Admin from "./Admin";
import "../css/section.css";
import { AppContext } from "../App";
import AllStudents from "./AllStudents";
import AddStudent from "./AddStudent";
import Studentpromotion from "./Studentpromotion";
import AllTeachers from "./AllTeachers";
import AddTeacher from "./AddTeacher";
import Payment from "./Payment";
import AllParents from "./AllParents";
import AddParents from "./AddParents";
import Feescollection from "./Feescollection";
import Expense from "./Expense";
import AddExpenses from "./AddExpenses";
import Notice from "./Notice";

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
          {active === "all teachers" && <AllTeachers />}
          {active === "add teachers" && <AddTeacher />}
          {active === "payment" && <Payment />}
          {active === "all parents" && <AllParents />}
          {active === "add parents" && <AddParents />}
          {active === "Fess Collections" && <Feescollection />}
          {active === "Expenses" && <Expense />}
          {active === "Add Expenses" && <AddExpenses />}
          {active === "notice" && <Notice />}
        </header>
      </section>
    </>
  );
};

export default Section;
