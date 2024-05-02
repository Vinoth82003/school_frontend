import React, { useContext } from "react";
import Admin from "./Admin";
import "../css/section.css";
import { AppContext } from "../App";

const Section = () => {
  const value = useContext(AppContext);
  let paths = value.currentPath;

  const handlePath = (path) => {
    value.setactiveBar(path.toString().toLowerCase());
    value.setCurrentPath([path]);
  };
  const handleLastPath = () => {
    console.log("last path clicked");
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
                    index != 1
                      ? () => {
                          handlePath(path);
                        }
                      : handleLastPath()
                  }
                >
                  / {path}
                </p>
              );
            })}
          </div>
        </header>
        <Admin />
      </section>
    </>
  );
};

export default Section;
