import React, { useState } from "react";
import logo from "../img/logo.jpg";
import admin_logo from "../img/admin.jpg";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import {
  faBell,
  faCalendarDay,
  faClipboardQuestion,
  faEnvelope,
  faMessage,
  faSignOut,
  faUserGear,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import stud1 from "../img/student11.png";
import stud2 from "../img/student12.png";
import stud3 from "../img/student13.png";
import stud4 from "../img/student11 (1).png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isActive, setActive] = useState(false);

  const toggleActiveMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <>
      <nav className="navbar">
        <div className="school_name">
          <div className="logo">
            <img src={logo} alt="school logo" />
          </div>
          <h1 className="name">MTMHSS</h1>
        </div>
        <button
          className={`toggle_button ${isActive ? "active" : ""}`}
          onClick={() => setActive(!isActive)}
        >
          <span className="button_line"></span>
          <span className="button_line"></span>
          <span className="button_line"></span>
        </button>
        <ul className={`nav_menu ${isActive ? "active" : ""}`}>
          <li className="menu_list">
            <div
              className="inner_menu_list profile_menu"
              onClick={() => toggleActiveMenu(0)}
            >
              <div className="profile">
                <div className="profile_name">
                  <h4 className="user_name">Stevne Zone</h4>
                  <p className="user_role">Admin</p>
                </div>
                <div className="profile_pic">
                  <img src={admin_logo} alt="admin logo" />
                </div>
              </div>
              <div
                className={`menu_option_box ${
                  activeMenu === 0 ? "active" : ""
                }`}
              >
                <div className="box_title">Stevne Zone</div>
                <ul className="box_messages">
                  <li className="message">
                    <div className="menu_icon">
                      <FontAwesomeIcon icon={faUserCircle} />
                    </div>
                    <p>My Profile</p>
                  </li>
                  <li className="message">
                    <div className="menu_icon">
                      <FontAwesomeIcon icon={faMessage} />
                    </div>
                    <p>Message</p>
                  </li>
                  <li className="message">
                    <div className="menu_icon">
                      <FontAwesomeIcon icon={faUserGear} />
                    </div>
                    <p>Account Settings</p>
                  </li>
                  <li className="message">
                    <div className="menu_icon">
                      <FontAwesomeIcon icon={faSignOut} />
                    </div>
                    <p>Log Out</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu_list">
            <div
              className={`inner_menu_list small_menu messages `}
              onClick={() => toggleActiveMenu(1)}
            >
              <div className="menu">
                <div className="menu_icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="count">3</div>
              </div>
              <div
                className={`menu_option_box ${
                  activeMenu === 1 ? "active" : ""
                }`}
              >
                <div className="box_title">03 Messages</div>
                <ul className="box_messages ">
                  <li className="message message_color">
                    <div className="inner_message">
                      <div className="sender_pic">
                        <img src={stud1} alt="" />
                      </div>
                      <div className="message_recieved">
                        <div className="message_title">
                          <h5>user name</h5> <p className="time">05:00 AM</p>
                        </div>
                        <div className="small_message_content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero, ullam tenetur, officiis voluptates sint
                          doloremque accusamus aliquid at quasi minima
                          praesentium iure consectetur maxime iusto autem
                          quisquam in voluptatem nam!
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="message message_color">
                    <div className="inner_message">
                      <div className="sender_pic">
                        <img src={stud2} alt="" />
                      </div>
                      <div className="message_recieved">
                        <div className="message_title">
                          <h5>user name</h5> <p className="time">05:00 AM</p>
                        </div>
                        <div className="small_message_content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="message message_color">
                    <div className="inner_message">
                      <div className="sender_pic">
                        <img src={stud3} alt="" />
                      </div>
                      <div className="message_recieved">
                        <div className="message_title">
                          <h5>user name</h5> <p className="time">05:00 AM</p>
                        </div>
                        <div className="small_message_content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero, ullam tenetur, officiis voluptates sint
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="message message_color">
                    <div className="inner_message">
                      <div className="sender_pic">
                        <img src={stud4} alt="" />
                      </div>
                      <div className="message_recieved">
                        <div className="message_title">
                          <h5>user name</h5> <p className="time">05:00 AM</p>
                        </div>
                        <div className="small_message_content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu_list">
            <div
              className={`inner_menu_list small_menu notification `}
              onClick={() => toggleActiveMenu(2)}
            >
              <div className="menu">
                <div className="menu_icon">
                  <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="count red">3</div>
              </div>
              <div
                className={`menu_option_box notification ${
                  activeMenu === 2 ? "active" : ""
                }`}
              >
                <div className="box_title">03 Notifications</div>
                <ul className="box_messages">
                  <li className="message">
                    <div className="inner_message">
                      <div className="sender_pic">
                        <FontAwesomeIcon icon={faCalendarDay} />
                      </div>
                      <div className="message_recieved">
                        <div className="message_title">
                          <p>Exam time table out date</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="message">
                    <div className="inner_message">
                      <div className="sender_pic">
                        <FontAwesomeIcon icon={faClipboardQuestion} />
                      </div>
                      <div className="message_recieved">
                        <div className="message_title">
                          <p>exam result out date</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="message">
                    <div className="inner_message">
                      <div className="sender_pic">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <div className="message_recieved">
                        <div className="message_title">
                          <p>parent teacher meeting announce</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
