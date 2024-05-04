import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faChalkboardTeacher,
  faClipboardList,
  faClockRotateLeft,
  faDashboard,
  faGraduationCap,
  faListDots,
  faMessage,
  faMoneyBillTransfer,
  faMoneyBillTrendUp,
  faPlus,
  faUserGraduate,
  faUserGroup,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "../css/sidebar.css";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons/faUserCheck";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons/faMoneyBills";
import { faList12 } from "@fortawesome/free-solid-svg-icons/faList12";

const SideBar = () => {
  const value = useContext(AppContext);
  const handleSideMenu = (menuName) => {
    value.setactiveBar(menuName.toLowerCase());
    value.setCurrentPath([menuName]);
    if (
      menuName == "dashboard" ||
      menuName == "message" ||
      menuName == "notice"
    ) {
      value.setCurrentClick([menuName]);
    }
  };

  const handleMenuClick = (menuName) => {
    value.setCurrentPath(menuName);
    value.setCurrentClick([menuName]);
  };

  return (
    <>
      <aside className={`sidebar ${value.isSidebar ? "active" : ""}`}>
        <ul className="sidebar">
          <li
            className={`side_menu ${
              value.activeBar === "dashboard" ? "active" : ""
            }`}
          >
            <div
              className="inner_menu"
              onClick={() => handleSideMenu("dashboard")}
            >
              <div className="side_icon">
                <FontAwesomeIcon icon={faDashboard} />
              </div>
              <div className="side_text">Dashboard</div>
            </div>
          </li>
          <li
            className={`side_menu ${
              value.activeBar === "students" ? "active" : ""
            }`}
          >
            <div
              className="inner_menu"
              onClick={() => handleSideMenu("students")}
            >
              <div className="side_icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="side_text">Students</div>
            </div>
            <ul className="sub_menu">
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["students", "all student"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faUserGraduate} />
                  </div>
                  <p className="submenu_text">All Students</p>
                </div>
              </li>
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["students", "add student"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <p className="submenu_text">Admission Form</p>
                </div>
              </li>
              <li
                className="sub_menu_li"
                onClick={() =>
                  handleMenuClick(["students", "Student Promotion"])
                }
              >
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
            className={`side_menu ${
              value.activeBar === "teachers" ? "active" : ""
            }`}
          >
            <div
              className="inner_menu"
              onClick={() => handleSideMenu("teachers")}
            >
              <div className="side_icon">
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </div>
              <div className="side_text">Teachers</div>
            </div>
            <ul className="sub_menu">
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["teachers", "all teachers"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                  </div>
                  <p className="submenu_text">All Teachers</p>
                </div>
              </li>
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["teachers", "add teachers"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <p className="submenu_text">Add Teacher</p>
                </div>
              </li>
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["teachers", "payment"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faMoneyBills} />
                  </div>
                  <p className="submenu_text">Payment</p>
                </div>
              </li>
            </ul>
          </li>
          <li
            className={`side_menu ${
              value.activeBar === "parents" ? "active" : ""
            }`}
          >
            <div
              className="inner_menu"
              onClick={() => handleSideMenu("parents")}
            >
              <div className="side_icon">
                <FontAwesomeIcon icon={faUserGroup} />
              </div>
              <div className="side_text">Parents</div>
            </div>
            <ul className="sub_menu small_submenu">
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["parents", "all parents"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                  </div>
                  <p className="submenu_text">All Parents</p>
                </div>
              </li>
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["parents", "add parents"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <p className="submenu_text">Add Parent</p>
                </div>
              </li>
            </ul>
          </li>
          <li
            className={`side_menu ${
              value.activeBar === "acconunt" ? "active" : ""
            }`}
          >
            <div
              className="inner_menu"
              onClick={() => handleSideMenu("acconunt")}
            >
              <div className="side_icon">
                <FontAwesomeIcon icon={faCalculator} />
              </div>
              <div className="side_text">Acconunt</div>
            </div>
            <ul className="sub_menu">
              <li
                className="sub_menu_li"
                onClick={() =>
                  handleMenuClick(["acconunt", "Fess Collections"])
                }
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                  </div>
                  <p className="submenu_text">Fess Collections</p>
                </div>
              </li>
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["acconunt", "Expenses"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} />
                  </div>
                  <p className="submenu_text">Expenses</p>
                </div>
              </li>
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["acconunt", "Add Expenses"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                  <p className="submenu_text">Add Expenses</p>
                </div>
              </li>
            </ul>
          </li>
          {/* <li
            className={`side_menu ${
              value.activeBar === "exam" ? "active" : ""
            }`}
          >
            <div className="inner_menu" onClick={() => handleSideMenu("exam")}>
              <div className="side_icon">
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <div className="side_text">Exam</div>
            </div>
            <ul className="sub_menu small_submenu">
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["exam", "all exams"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faList12} />
                  </div>
                  <p className="submenu_text">All Exams</p>
                </div>
              </li>
              <li
                className="sub_menu_li"
                onClick={() => handleMenuClick(["exam", "Exam Schedule"])}
              >
                <div className="inner_submenu">
                  <div className="submenu_icon">
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                  </div>
                  <p className="submenu_text">Exam Schedule</p>
                </div>
              </li>
            </ul>
          </li> */}
          <li
            className={`side_menu ${
              value.activeBar === "notice" ? "active" : ""
            }`}
          >
            <div
              className="inner_menu"
              onClick={() => handleSideMenu("notice")}
            >
              <div className="side_icon">
                <FontAwesomeIcon icon={faListDots} />
              </div>
              <div className="side_text">Notice</div>
            </div>
          </li>
          <li
            className={`side_menu ${
              value.activeBar === "message" ? "active" : ""
            }`}
            onClick={() => handleSideMenu("message")}
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
