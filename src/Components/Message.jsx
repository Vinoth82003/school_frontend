import React from "react";
import photo1 from "../img/student11 (1).png";
import photo2 from "../img/student11.png";
import photo3 from "../img/student12.png";
import photo4 from "../img/student13.png";
import "../css/message.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faUserCircle,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";

const Message = () => {
  const ContactDetails = () => {
    const photos = [photo1, photo2, photo3, photo4];
    const times = ["11:20 PM", "12:20 AM", "01:00 AM", "10:00 AM"];
    const contacts = [];

    for (let i = 1; i <= 10; i++) {
      let image = photos[Math.floor(Math.random() * photos.length)];
      let roll = i < 10 ? `#000${i}` : `#00${i}`;
      let name = `Student_${roll}`;
      let time = times[Math.floor(Math.random() * times.length)];

      let data = {
        image,
        roll,
        name,
        time,
      };
      contacts.push(data);
    }

    return contacts.map((contact, index) => (
      <li key={index} className="list contact">
        <div className="inner_list contact_list">
          <div className="user_profile">
            <img src={contact.image} alt="user logo" />
          </div>
          <div className="user_name">
            <div className="roll">{contact.roll}</div>
            <div className="StudName">{contact.name}</div>
          </div>
          <p className="time">{contact.time}</p>
        </div>
      </li>
    ));
  };

  const messages = () => {
    let message_box = [];
    let times = ["11:00 AM", "10:00 AM", "01:00 PM", "12:00 AM", "12:00 PM"];
    let types = ["sent", "recieve"];
    let messages = [
      "this is first message ",
      "this is second message this is first message ",
      "this is second message this is first message ",
      "this is second message this is first message this is second message this is first message this is second message this is first message this is second message this is first message ",
    ];
    for (let i = 0; i <= 10; i++) {
      let time = times[Math.floor(Math.random() * times.length)];
      let type = types[Math.floor(Math.random() * types.length)];
      let message = messages[Math.floor(Math.random() * messages.length)];
      let data = {
        time,
        type,
        message,
      };

      message_box.push(data);
    }

    return message_box.map((message, index) => (
      <li key={index} className={`message_li ${message.type}`}>
        <div className="inner_message_li">
          <p className="msg">{message.message}</p>
          <p className="time">{message.time}</p>
        </div>
      </li>
    ));
  };

  return (
    <>
      <main className="admin_page">
        <section className="chart_containers">
          <div className="table_box message_box">
            <div className="message_left">
              <ul className="message_top">
                <li className="tag teacher">Teachers</li>
                <li className="tag student">Students</li>
              </ul>
              <ul className="contact_list_ul">
                <ContactDetails />
              </ul>
            </div>
            <div className="message_conversation">
              <div className="conversation_top">
                <div className="conv_prof">
                  <div className="user_profile">
                    <img src={photo1} alt="prof" />
                  </div>
                  <div className="user_name">
                    <div className="roll">#1212</div>
                    <div className="StudName">Jancy Jone</div>
                  </div>
                </div>
                <div className="options">
                  <div className="msgOptList block">
                    <FontAwesomeIcon icon={faUserSlash} />
                    <p className="text_hover">Block</p>
                  </div>
                  <div className="msgOptList report">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    <p className="text_hover">Report</p>
                  </div>
                  <div className="msgOptList view">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <p className="text_hover">View</p>
                  </div>
                </div>
              </div>
              <ul className="convo_box">
                <li className="message_li info">info</li>
                {messages()}
              </ul>
              <ul className="message_send_input">
                <li className="input_box">
                  <input type="text" name="send message" id="send message" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Message;
