import React from "react";
import "../css/admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudDownloadAlt,
  faRefresh,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  return (
    <>
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
        <section className="chart_containers">
          <div className="chart earning">
            <div className="chart_header">
              <h3>Earnings</h3>
              <div className="options">
                <div className="refresh">
                  <FontAwesomeIcon icon={faRefresh} />
                </div>
                <div className="download">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} />
                </div>
              </div>
            </div>
            <div className="chart_cetgory">
              <div className="category cat-1">
                <div className="color"></div>
                <p>Total Collections</p>
              </div>
              <div className="category cat-2">
                <div className="color"></div>
                <p>Fees Collections</p>
              </div>
              <select name="year" id="year">
                <option value="2022" selected>
                  2022
                </option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
          <div className="chart expense">
            <div className="chart_header">
              <h3>Expenses</h3>
              <div className="options">
                <div className="refresh">
                  <FontAwesomeIcon icon={faRefresh} />
                </div>
                <div className="download">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} />
                </div>
              </div>
            </div>
            <div className="chart_cetgory">
              <div className="category cat-1">
                <div className="color"></div>
                <p>Jan 2024</p>
              </div>
              <div className="category cat-2">
                <div className="color"></div>
                <p>Feb 2024</p>
              </div>
              <select name="year" id="year">
                <option value="mar" selected>
                  Mar
                </option>
                <option value="apr">Apr</option>
                <option value="may">May</option>
              </select>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Admin;
