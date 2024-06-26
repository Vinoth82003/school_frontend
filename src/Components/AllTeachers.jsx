import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookJournalWhills,
  faFemale,
  faMale,
} from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import "../css/allStudent.css";
import photo1 from "../img/student12.png";
import photo2 from "../img/student11 (1).png";
const AllTeachers = () => {
  const section = ["A", "B", "C", "D"];
  const subjects = [
    "Maths",
    "Science",
    "Social",
    "Tamil",
    "English",
    "Biology",
    "Chemistry",
    "Physics",
    "Commerece",
    "Bussiness maths",
    "Computer science",
    "Computer Application",
  ];
  const [currentEndPoint, setCurrentEndPoint] = useState(50);
  const [currentStartPoint, setCurrentStartPoint] = useState(1);
  const totalStudent = 500;
  // table data
  // setTotalStudents(50);
  const TableData = () => {
    const studentDetails = [];

    for (let i = currentStartPoint; i <= currentEndPoint; i++) {
      let data = {};
      const rollNo =
        i < 100 ? `#00${i < 10 ? "0" + i : i}` : `#0${i < 10 ? "0" + i : i}`;
      const photo = i % 2 === 0 ? photo1 : photo2;
      const name = i < 10 ? `Teacher_00${i}` : `Teacher_0${i}`;
      const gender = i % 2 === 0 ? "Male" : "Female";
      const std = Math.floor(Math.random() * 12) + 1; // Random integer between 1 and 12
      const sec = section[Math.floor(Math.random() * 4)]; //Random section
      const subject = subjects[Math.floor(Math.random() * subjects.length)]; //Random section
      const address = `address_${i < 10 ? "0" + i : i}`;
      const phone = `+91 9012345678`;
      const email =
        i < 10 ? `Teacher_00${i}@gmail.com` : `Teacher_0${i}@gmail.com`;

      data = {
        rollNo,
        photo,
        name,
        gender,
        std,
        subject,
        sec,
        address,
        phone,
        email,
      };
      studentDetails.push(data);
    }

    return studentDetails.map((details, index) => {
      return (
        <tr className="tr" key={index}>
          <td className="td">{details.rollNo}</td>
          <td className="td">
            <div className="stud_image">
              <img src={details.photo} alt="student" />
            </div>
          </td>
          <td className="td">{details.name}</td>
          <td className="td">{details.gender}</td>
          <td className="td">{details.std}</td>
          <td className="td">{details.subject}</td>
          <td className="td">{details.sec}</td>
          <td className="td">{details.address}</td>
          <td className="td">{details.phone}</td>
          <td className="td">{details.email}</td>
        </tr>
      );
    });
  };
  const handleTabledata = (str, end) => {
    setCurrentStartPoint(str);
    setCurrentEndPoint(end);
  };
  const Pagination = ({ totalStudent, handleTabledata }) => {
    const pageCount = Math.ceil(totalStudent / 50);

    const handleClick = (pageNumber) => {
      const start = (pageNumber - 1) * 50 + 1;
      const end = pageNumber * 50;
      handleTabledata(start, end);
    };

    return (
      <ul className="pagination">
        {[...Array(pageCount)].map((_, index) => (
          <li key={index} onClick={() => handleClick(index + 1)}>
            {index + 1}
          </li>
        ))}
      </ul>
    );
  };
  //all students
  return (
    <main className="admin_page">
      <ul className="counter_box allStuds_counts">
        <li className="counter classes">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faMale} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Male</p>
            <p className="counter_count">290</p>
          </div>
        </li>
        <li className="counter teachers">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faFemale} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Female</p>
            <p className="counter_count">210</p>
          </div>
        </li>
        <li className="counter std">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faBookJournalWhills} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Standards</p>
            <p className="counter_count">12</p>
          </div>
        </li>
        <li className="counter grps">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Departments</p>
            <p className="counter_count">{subjects.length}</p>
          </div>
        </li>
      </ul>
      <section className="chart_containers">
        <div className="table_box">
          <ul className="table_options">
            <li className="search">
              <input
                type="search"
                name="searchByName"
                id="searchByName"
                placeholder="search By Name .."
              />
            </li>
            <li className="search">
              <input
                type="search"
                name="searchByID"
                id="searchByID"
                placeholder="search By ID .."
              />
            </li>
          </ul>
          <Pagination
            totalStudent={totalStudent}
            handleTabledata={handleTabledata}
          />
          <table className="table">
            <thead className="table_head">
              <tr className="tr">
                <th className="th">ID</th>
                <th className="th">photo</th>
                <th className="th">name</th>
                <th className="th">gender</th>
                <th className="th">class</th>
                <th className="th">Subject</th>
                <th className="th">section</th>
                <th className="th">Address</th>
                <th className="th">phone</th>
                <th className="th">e-mail</th>
              </tr>
            </thead>
            <tbody className="tbody">
              <TableData />
            </tbody>
          </table>
          <Pagination
            totalStudent={totalStudent}
            handleTabledata={handleTabledata}
          />
        </div>
      </section>
    </main>
  );
};

export default AllTeachers;
