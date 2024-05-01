import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faChalkboardTeacher,
  faClipboardList,
  faDashboard,
  faGraduationCap,
  faListDots,
  faMessage,
  faUserGraduate,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "../css/sidebar.css";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons/faUserCheck";

const SideBar = () => {
  const value = useContext(AppContext);
  const [activeBar, setactiveBar] = useState(null);
  return (
    <>
      <aside className={`sidebar ${value.isSidebar ? "active" : ""}`}>
        <ul className="sidebar">
          <li className={`side_menu`}>
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faDashboard} />
              </div>
              <div className="side_text">Dashboard</div>
            </div>
          </li>
          <li
            className={`side_menu ${activeBar === "students" ? "active" : ""}`}
            onClick={() => setactiveBar("students")}
          >
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="side_text">Students</div>
            </div>
            <ul className="sub_menu">
              <li className="sub_menu_li">
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faUserGraduate} />
                  </div>
                  <p className="submenu_text">All Students</p>
                </div>
              </li>
              <li className="sub_menu_li">
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <p className="submenu_text">Admission Form</p>
                </div>
              </li>
              <li className="sub_menu_li">
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faUserCheck} />
                  </div>
                  <p className="submenu_text">Student Promotion</p>
                </div>
              </li>
            </ul>
          </li>
          <li
            className={`side_menu ${activeBar === "teachers" ? "active" : ""}`}
            onClick={() => setactiveBar("teachers")}
          >
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </div>
              <div className="side_text">Teachers</div>
            </div>
          </li>
          <li
            className={`side_menu ${activeBar === "parents" ? "active" : ""}`}
            onClick={() => setactiveBar("parents")}
          >
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faUserGroup} />
              </div>
              <div className="side_text">Parents</div>
            </div>
          </li>
          <li
            className={`side_menu ${activeBar === "acconunt" ? "active" : ""}`}
            onClick={() => setactiveBar("acconunt")}
          >
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faCalculator} />
              </div>
              <div className="side_text">Acconunt</div>
            </div>
          </li>
          <li
            className={`side_menu ${activeBar === "exam" ? "active" : ""}`}
            onClick={() => setactiveBar("exam")}
          >
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <div className="side_text">Exam</div>
            </div>
          </li>
          <li
            className={`side_menu ${activeBar === "notice" ? "active" : ""}`}
            onClick={() => setactiveBar("notice")}
          >
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faListDots} />
              </div>
              <div className="side_text">Notice</div>
            </div>
          </li>
          <li
            className={`side_menu ${activeBar === "message" ? "active" : ""}`}
            onClick={() => setactiveBar("message")}
          >
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <div className="side_text">Messages</div>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
