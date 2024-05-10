import React, { useState } from "react";
import "../css/message.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCameraAlt,
  faExclamationTriangle,
  faPaperPlane,
  faPaperclip,
  faSearch,
  faTimesCircle,
  faTrashAlt,
  faUserAltSlash,
} from "@fortawesome/free-solid-svg-icons";
import photo1 from "../img/student11 (1).png";
import photo2 from "../img/student11.png";
import photo3 from "../img/student12.png";
import photo4 from "../img/student13.png";

const Message = () => {
  const [isChat, setIsChat] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPreview, setPreview] = useState(false);
  const handleFileChange = () => {
    let inputFile = document.querySelector("#fileInput");
    console.log(inputFile);
    const file = inputFile.files[0];
    setSelectedFile(file);
    setPreview(true);
  };

  const openFile = () => {
    let inputFile = document.querySelector("#fileInput");
    // inputFile.style.display = "inline-block";
    inputFile.click();
  };

  const renderFileDetails = () => {
    if (selectedFile) {
      return (
        <ul className="file_details">
          <li>
            <h5>File Name :</h5>
            <p className="file_name">{selectedFile.name}</p>
          </li>
          <li>
            <h5>File size :</h5>
            <p className="file_size">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </li>
        </ul>
      );
    } else {
      return <p className="no_file">No file selected</p>;
    }
  };

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
          className={`contact list `}
          onClick={contact.cisBlocked ? null : () => setIsChat(true)}
        >
          {contact.cisBlocked ? (
            <span className="blocked_txt">blocked</span>
          ) : (
            ""
          )}

          <div
            className={`inner_contact ${
              contact.cisBlocked ? "blocked" : "unblocked"
            }`}
          >
            <div className="user_profile">
              <img src={contact.cPhoto} alt="user profile" />
            </div>
            <div className="user_name">
              <p className="uname">{contact.cName}</p>
              <span className="proffesion">{contact.cProff}</span>
            </div>
            <div className="time_count">
              <p className="time">{contact.cTimes}</p>
              {contact.cisBlocked ? null : (
                <div className="count">
                  {contact.cCounts < 10
                    ? "0" + contact.cCounts
                    : contact.cCounts}
                </div>
              )}
            </div>
          </div>
        </li>
      );
    });
  };

  const Messages = () => {
    let allMessages = [];
    const messageType = ["sent", "recieved"];
    const timings = [
      "10:00 AM",
      "12:00 PM",
      "01:00 PM",
      "10:30 AM",
      "05:00 PM",
    ];
    const messages = [
      "hi",
      "simple message",
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
       impedit voluptatem, perferendis vel doloremque eligendi
       quas. Reprehenderit vitae quidem dolore iure quasi, quas,
       ullam, maxime sequi aliquid architecto fuga sed?`,
    ];
    for (let i = 0; i < 10; i++) {
      let type = messageType[Math.floor(Math.random() * messageType.length)];
      let msg = messages[Math.floor(Math.random() * messages.length)];
      let time = timings[Math.floor(Math.random() * timings.length)];
      let data = {
        type,
        msg,
        time,
      };

      allMessages.push(data);
    }

    return allMessages.map((message, index) => {
      return (
        <li key={index} className={`msg ${message.type}Msg`}>
          {message.msg}
          <button type="button" className="delete">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <span className="time">{message.time} </span>
        </li>
      );
    });
  };

  return (
    <>
      <main className="admin_page">
        <section className="chart_containers">
          <input
            type="file"
            name="file"
            id="fileInput"
            onChange={() => handleFileChange(this)}
          />
          <div className="message_box">
            <div className={`inner_message_box ${isChat ? "active" : null}`}>
              <div className="chat_contact res-contact">
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
                    <button
                      className="msg_opt back"
                      onClick={() => setIsChat(false)}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                  </div>
                </div>
                <ul className="convo_box">
                  <li className="msg info">info message</li>
                  <Messages />
                </ul>
                <div className={`preview_box ${isPreview ? "active" : null}`}>
                  <div className="preview_header">
                    <h2>Preview</h2>
                    <ul className="options">
                      <li>
                        <button
                          type="button"
                          className="close"
                          onClick={() => setPreview(false)}
                        >
                          <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="preview_file">
                    <div className="display_file">
                      {selectedFile && (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="File Preview"
                        />
                      )}
                    </div>
                    {renderFileDetails()}
                  </div>
                </div>
                <div className="message_send_box">
                  <div className="input_box">
                    <input type="text" id="sendMsg" className="sendMsg" />
                    <button type="button" className="inp-icon">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                  <div className="msg_opts">
                    <button
                      type="button"
                      className="file_input"
                      onClick={openFile}
                    >
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
