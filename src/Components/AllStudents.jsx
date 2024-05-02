import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
const AllStudents = () => {
  return (
    <main className="admin_page">
      <ul className="counter_box">
        <li className="counter student">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Students</p>
            <p className="counter_count">1500</p>
          </div>
        </li>
        <li className="counter teachers">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Teachers</p>
            <p className="counter_count">100</p>
          </div>
        </li>
        <li className="counter parents">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Parents</p>
            <p className="counter_count">3000</p>
          </div>
        </li>
        <li className="counter parents">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Classes</p>
            <p className="counter_count">12 Stds</p>
          </div>
        </li>
      </ul>
      <section className="chart_containers"></section>
    </main>
  );
};

export default AllStudents;
