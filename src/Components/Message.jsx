import React from "react";
import "../css/message.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraAlt,
  faExclamationTriangle,
  faFileArrowUp,
  faPaperPlane,
  faPaperclip,
  faSearch,
  faSmile,
  faUserAltSlash,
} from "@fortawesome/free-solid-svg-icons";
import photo1 from "../img/student11 (1).png";
import photo2 from "../img/student11.png";
import photo3 from "../img/student12.png";
import photo4 from "../img/student13.png";

const Message = () => {
  // creating the contact list
  const ContactList = () => {
    let contacts = [];
    let name = ["John Doe", "Lorem Ispum", "Milly Jane", "Henry Jones"];
    let proff = ["Teacher", "Student", "Parent", "Admin"];
    let photos = [photo1, photo2, photo3, photo4];
    let times = ["11:00 AM", "12:00 PM", "10:00 AM", "01:00 PM", "08:10 AM"];
    let counts = [6, 10, 100, 11, 1, 55];
    let isBlocked = [true, false];

    for (let i = 0; i < 10; i++) {
      let cName = name[Math.floor(Math.random() * name.length)];
      let cProff = proff[Math.floor(Math.random() * proff.length)];
      let cPhoto = photos[Math.floor(Math.random() * photos.length)];
      let cTimes = times[Math.floor(Math.random() * times.length)];
      let cCounts = counts[Math.floor(Math.random() * counts.length)];
      let cisBlocked = isBlocked[Math.floor(Math.random() * isBlocked.length)];
      let data = {
        cName,
        cProff,
        cPhoto,
        cTimes,
        cCounts,
        cisBlocked,
      };
      contacts.push(data);
    }

    return contacts.map((contact, index) => {
      return (
        <li
          key={index}
          className={`contact list ${
            contact.cisBlocked ? "blocked" : "unblocked"
          }`}
        >
          <div className="inner_contact">
            <div className="user_profile">
              <img src={contact.cPhoto} alt="user profile" />
            </div>
            <div className="user_name">
              <p className="uname">{contact.cName}</p>
              <span className="proffesion">{contact.cProff}</span>
            </div>
            <div className="time_count">
              <p className="time">{contact.cTimes}</p>
              <div className="count">
                {contact.cCounts < 10 ? "0" + contact.cCounts : contact.cCounts}
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  // creating sample message box

  // return the message component
  return (
    <>
      <main className="admin_page">
        <section className="chart_containers">
          <div className="message_box">
            <div className="inner_message_box">
              <div className="chat_contact">
                <div className="contact_top">
                  <div className="search">
                    <input
                      type="text"
                      name="seearcContact"
                      id="seearcContact"
                    />
                    <div className="search_icon">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </div>
                </div>
                <ul className="contacts">
                  <ContactList />
                </ul>
              </div>
              <div className="chat_message">
                <div className="message_top">
                  <div className="message_top_prof">
                    <div className="user_profile">
                      <img src={photo1} alt="user profile" />
                    </div>
                    <div className="user_name">
                      <h3 className="uname">John Doe</h3>
                      <span className="proffesion">Student</span>
                    </div>
                  </div>
                  <div className="options">
                    <button className="msg_opt">
                      <FontAwesomeIcon icon={faUserAltSlash} />
                      <span className="btn-text">block</span>
                    </button>
                    <button className="msg_opt">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <span className="btn-text">report</span>
                    </button>
                    <button className="msg_opt">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <span className="btn-text">report</span>
                    </button>
                  </div>
                </div>
                <ul className="convo_box">
                  <li className="msg info">info message</li>
                  <li className="msg recievedMsg">
                    this is the 1st message from he my frient
                    <span className="time">11:00 AM</span>
                  </li>
                  <li className="msg recievedMsg">
                    this is the 1st message from he my frient
                    <span className="time">11:00 AM</span>
                  </li>
                  <li className="msg sentMsg">
                    this is the message sent to my frient this is the 1st
                    message from he my frient this is the 1st message from he my
                    frient this is the 1st message from he my frient
                    <span className="time">11:00 AM</span>
                  </li>
                  <li className="msg recievedMsg">
                    this is the 1st message from he my frient
                    <span className="time">11:00 AM</span>
                  </li>
                  <li className="msg sentMsg">
                    this is the 1st message from he my frient
                    <span className="time">11:00 AM</span>
                  </li>
                  <li className="msg recievedMsg">
                    this is the 1st message from he my frient
                    <span className="time">11:00 AM</span>
                  </li>
                  <li className="msg sentMsg">
                    this is the 1st message from he my frient
                    <span className="time">11:00 AM</span>
                  </li>
                  <li className="msg recievedMsg">
                    this is the message sent to my frient this is the 1st
                    message from he my frient this is the 1st message from he my
                    frient this is the 1st message from he my frient
                    <span className="time">11:00 AM</span>
                  </li>
                </ul>
                <div className="message_send_box">
                  <div className="input_box">
                    <input type="text" id="sendMsg" className="sendMsg" />
                    <button type="button" className="inp-icon">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                  <div className="msg_opts">
                    <button type="button" className="file_input">
                      <FontAwesomeIcon icon={faSmile} />
                    </button>
                    <button type="button" className="file_input">
                      <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    <button type="button" className="file_input">
                      <FontAwesomeIcon icon={faCameraAlt} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Message;
