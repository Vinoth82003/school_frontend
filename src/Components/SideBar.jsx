import React, { useContext } from "react";
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
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const value = useContext(AppContext);
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar">
          <li className="side_menu">
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faDashboard} />
              </div>
              <div className="side_text">Dashboard</div>
            </div>
          </li>
          <li className="side_menu">
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="side_text">Students</div>
            </div>
          </li>
          <li className="side_menu">
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </div>
              <div className="side_text">Teachers</div>
            </div>
          </li>
          <li className="side_menu">
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faUserGroup} />
              </div>
              <div className="side_text">Parents</div>
            </div>
          </li>
          <li className="side_menu">
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faCalculator} />
              </div>
              <div className="side_text">Acconunt</div>
            </div>
          </li>
          <li className="side_menu">
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <div className="side_text">Exam</div>
            </div>
          </li>
          <li className="side_menu">
            <div className="inner_menu">
              <div className="side_icon">
                <FontAwesomeIcon icon={faListDots} />
              </div>
              <div className="side_text">Notice</div>
            </div>
          </li>
          <li className="side_menu">
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
