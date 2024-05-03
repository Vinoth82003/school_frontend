import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faCameraAlt,
} from "@fortawesome/free-solid-svg-icons";
import defaultLogo from "../img/default.jpeg";
import "../css/addstudent.css";

const AddParents = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPhotoClick = () => {
    document.getElementById("photoInput").click();
  };

  return (
    <>
      <main className="admin_page">
        <section className="chart_containers">
          <form action="#" method="post" className="table_box">
            <h1>
              <FontAwesomeIcon icon={faArrowAltCircleRight} /> Add Parent
            </h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="fname">First Name *</label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="form_input"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="lname">Last Name *</label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="form_input"
                      placeholder="Doe .S"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="gender">Gender *</label>
                    <select
                      name="gender"
                      id="gender"
                      className="form_input"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="rollno">ID No </label>
                    <input
                      type="text"
                      name="rollno"
                      id="rollno"
                      className="form_input"
                      placeholder="#1001"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="bloodgroup">Blood Group *</label>
                    <input
                      type="text"
                      name="bloodgroup"
                      id="bloodgroup"
                      className="form_input"
                      placeholder="A1 +ve"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="religion">Religion *</label>
                    <input
                      type="text"
                      name="religion"
                      id="religion"
                      className="form_input"
                      placeholder="hindu"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="email">Email </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form_input"
                      placeholder="johndoe12@gmail.com"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="class">
                      Kids * (names seperated by ",")
                    </label>
                    <input
                      type="text"
                      name="class"
                      id="class"
                      className="form_input"
                      placeholder="John,Doe"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="phone">Phone </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form_input"
                      placeholder="#1111"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-field text-area">
                    <label htmlFor="address">Address *</label>
                    <textarea
                      name="address"
                      id="address"
                      cols="30"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="input-field profile_select">
                    <label htmlFor="photo">Teacher Photo </label>
                    <div className="select_profile">
                      <img
                        src={selectedPhoto || defaultLogo}
                        alt="select_pic"
                      />
                      <button
                        type="button"
                        className="click_select"
                        onClick={handleSelectPhotoClick}
                      >
                        <FontAwesomeIcon icon={faCameraAlt} />
                      </button>
                    </div>
                    <input
                      type="file"
                      name="photo"
                      id="photoInput"
                      onChange={handlePhotoChange}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col buttons">
                  <button type="reset" className="submit-btn reset-btn">
                    Reset
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default AddParents;
