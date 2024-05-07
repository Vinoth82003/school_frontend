import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import "../css/allStudent.css";
import photo1 from "../img/student12.png";
import photo2 from "../img/student11 (1).png";
const Payment = () => {
  const section = ["A", "B", "C", "D"];
  const Allstatus = ["paid", "unpaid", "due"];
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
      const status = Allstatus[Math.floor(Math.random() * Allstatus.length)];
      const name = i < 10 ? `Teacher_00${i}` : `Teacher_0${i}`;
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
        std,
        subject,
        sec,
        address,
        phone,
        email,
        status,
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
          <td className="td std">{details.std}</td>
          <td className="td sub">{details.subject}</td>
          <td className="td">{details.phone}</td>
          <td className="td">{details.email}</td>
          <td className="td">Rs 15,000 /-</td>
          <td className="td status">
            <div className={`tag ${details.status}`}>{details.status}</div>
          </td>
          <td>
            <div className="edit">
              <FontAwesomeIcon icon={faUserEdit} />
            </div>
          </td>
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
            <li className="search">
              <select name="status" id="status">
                <option value="">search by status</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="due">Due</option>
              </select>
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
                <th className="th std">class</th>
                <th className="th sub">Subject</th>
                <th className="th">phone</th>
                <th className="th">e-mail</th>
                <th className="th">amount</th>
                <th className="th">Status</th>
                <th className="th">...</th>
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

export default Payment;
