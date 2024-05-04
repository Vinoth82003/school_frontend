import React, { useState } from "react";
import "../css/allStudent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const Expense = () => {
  const [currentEndPoint, setCurrentEndPoint] = useState(50);
  const [currentStartPoint, setCurrentStartPoint] = useState(1);
  const [totalStudent, setTotalStudents] = useState(500);
  // table data
  // setTotalStudents(50);
  const TableData = () => {
    const studentDetails = [];
    const names = ["Mark Willy", "Jesseual", "John Doe", "Hennry John"];
    const expenseName = ["Salary", "Transport", "Maintenance"];
    const expenseAmount = ["Rs 2,00,000 /-", "Rs 50,000 /-", "Rs 75,000 /-"];
    const expenseDate = ["11/11/2024", "12/12/2024", "10/10/2024"];
    const statuses = ["paid", "unpaid", "due"];

    for (let i = currentStartPoint; i <= currentEndPoint; i++) {
      let data = {};
      const rollNo =
        i < 100 ? `#00${i < 10 ? "0" + i : i}` : `#0${i < 10 ? "0" + i : i}`;
      const name = names[Math.floor(Math.random() * names.length)];
      const expenseType =
        expenseName[Math.floor(Math.random() * expenseName.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)]; //Random section
      const amount =
        expenseAmount[Math.floor(Math.random() * expenseAmount.length)];
      const phone = `+91 9012345678`;
      const date = expenseDate[Math.floor(Math.random() * expenseDate.length)];
      const email =
        i < 10 ? `Expnece_00${i}@gmail.com` : `Expnece_0${i}@gmail.com`;

      data = {
        rollNo,
        name,
        expenseType,
        amount,
        email,
        date,
        phone,
        status,
      };
      studentDetails.push(data);
    }

    return studentDetails.map((details, index) => {
      return (
        <tr className="tr" key={index}>
          <td className="td">{details.rollNo}</td>
          <td className="td">{details.name}</td>
          <td className="td">{details.expenseType}</td>
          <td className="td">{details.amount}</td>
          <td className="td">
            <div className={`tag ${details.status}`}>{details.status}</div>
          </td>
          <td className="td">{details.phone}</td>
          <td className="td">{details.email}</td>
          <td className="td">{details.date}</td>
          <td className="td">
            <FontAwesomeIcon icon={faEdit} />
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
                <th className="th">Roll</th>
                <th className="th">Name</th>
                <th className="th">Expense</th>
                <th className="th">amount</th>
                <th className="th">status</th>
                <th className="th">phone</th>
                <th className="th">e-mail</th>
                <th className="th">Date</th>
                <th className="th">.....</th>
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

export default Expense;
