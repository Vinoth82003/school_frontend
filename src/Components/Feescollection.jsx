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
const Feescollection = () => {
  const [currentEndPoint, setCurrentEndPoint] = useState(50);
  const [currentStartPoint, setCurrentStartPoint] = useState(1);
  const [totalStudent, setTotalStudents] = useState(500);
  // table data
  // setTotalStudents(50);
  const TableData = () => {
    const studentDetails = [];
    const section = ["A", "B", "C", "D"];
    const statuses = ["paid", "unpaid", "due"];

    for (let i = currentStartPoint; i <= currentEndPoint; i++) {
      let data = {};
      const rollNo =
        i < 100 ? `#00${i < 10 ? "0" + i : i}` : `#0${i < 10 ? "0" + i : i}`;
      const photo = i % 2 === 0 ? photo1 : photo2;
      const name = i < 10 ? `Student_00${i}` : `Student_0${i}`;
      const gender = i % 2 === 0 ? "Male" : "Female";
      const std = Math.floor(Math.random() * 12) + 1; // Random integer between 1 and 12
      const sec = section[Math.floor(Math.random() * section.length)]; //Random section
      const status = statuses[Math.floor(Math.random() * statuses.length)]; //Random section
      const expense = "Fees";
      const amount = "Rs 75,000 /-";
      const phone = `+91 9012345678`;
      const email =
        i < 10 ? `Student_00${i}@gmail.com` : `Student_0${i}@gmail.com`;

      data = {
        rollNo,
        photo,
        name,
        gender,
        std,
        sec,
        expense,
        amount,
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
          <td className="td">{details.gender}</td>
          <td className="td">{details.std}</td>
          <td className="td">{details.sec}</td>
          <td className="td">{details.expense}</td>
          <td className="td">{details.amount}</td>
          <td className="td">
            <div className={`tag ${details.status}`}>{details.status}</div>
          </td>
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
              <input
                type="search"
                name="searchByStd"
                id="searchByStd"
                placeholder="search By Std .."
              />
            </li>
            <li className="search">
              <select name="bySec" id="bySec">
                <option value="">section</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
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
                <th className="th">Roll</th>
                <th className="th">photo</th>
                <th className="th">name</th>
                <th className="th">gender</th>
                <th className="th">class</th>
                <th className="th">section</th>
                <th className="th">Expense</th>
                <th className="th">amount</th>
                <th className="th">status</th>
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

export default Feescollection;
