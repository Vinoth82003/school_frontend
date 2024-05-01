import React, { useEffect, useRef } from "react";
import "../css/admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudDownloadAlt,
  faRefresh,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";

const Admin = () => {
  const EarningsChart = () => {
    const chartRef = useRef(null);
    const chartId = "earnings-chart"; // Unique ID for the canvas

    useEffect(() => {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Total Collections",
              data: [1000, 0, 0, 0, 0, 20000, 150000, 0, 0, 0, 0, 30000], // Assuming 150000 collected in Jul
              borderColor: "blue",
              fill: false,
            },
            {
              label: "Fees Collections",
              data: [0, 10010, 0, 0, 0, 0, 100000, 0, 0, 12900, 0, 0], // Assuming 100000 collected in Jul
              borderColor: "red",
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Month",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Amount (Rs)",
              },
            },
          },
        },
      });

      return () => {
        // Cleanup function to destroy the chart when component unmounts
        myChart.destroy();
      };
    }, []);

    return <canvas id={chartId} ref={chartRef} />;
  };

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
            <EarningsChart />
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
