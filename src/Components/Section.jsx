import React, { useContext } from "react";
import Admin from "./Admin";
import "../css/section.css";
import { AppContext } from "../App";

const Section = () => {
  const value = useContext(AppContext);
  let paths = value.currentPath;

  const active =
    value.currentClick[0].length === 2
      ? value.currentClick[0][1]
      : value.currentClick[0];
  console.log(active);

  const handlePath = (path) => {
    value.setactiveBar(path.toString().toLowerCase());
    value.setCurrentPath([path]);
    if (path === "dashboard" || path === "message" || path === "notice") {
      value.setCurrentClick([path]);
    }
  };
  const handleLastPath = (path) => {
    value.setCurrentClick([path]);
  };
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
            <p className="pathClick" onClick={() => handlePath(["dashboard"])}>
              Home
            </p>
            {paths.map((path, index) => {
              return (
                <p
                  key={index}
                  className="pathClick"
                  onClick={
                    index !== 1
                      ? () => {
                          handlePath(path);
                        }
                      : () => {
                          handleLastPath(path);
                        }
                  }
                >
                  / {path}
                </p>
              );
            })}
          </div>
          {active}
          {active === "dashboard" && <Admin />}
          {active === "all student" && <Admin />}
        </header>
      </section>
    </>
  );
};

export default Section;
