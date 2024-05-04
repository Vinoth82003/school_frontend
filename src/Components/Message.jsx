import React from "react";
import photo1 from "../img/student11 (1).png";
import photo2 from "../img/student11.png";
import photo3 from "../img/student12.png";
import photo4 from "../img/student13.png";
import "../css/message.css";

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
              <ul className="contact_list">
                <ContactDetails />
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Message;
