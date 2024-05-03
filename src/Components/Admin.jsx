import React, { useEffect, useRef } from "react";
import "../css/admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faChalkboardTeacher,
  faCloudDownloadAlt,
  faRefresh,
  faUserGraduate,
  faUserGroup,
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

  const TeacherChart = () => {
    const chartRef = useRef(null);
    const chartId = "teacher-chart"; // Unique ID for the canvas

    useEffect(() => {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "Strength",
              data: [350, 150], // Assuming 150000 collected in Jul
              backgroundColor: ["#638889", "#B6C4B6"], // Male and Female colors
              borderColor: ["#638889", "#B6C4B6"], // Border colors
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "60%",
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
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

  const StudentChart = () => {
    const chartRef = useRef(null);
    const chartId = "student-chart"; // Unique ID for the canvas

    useEffect(() => {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "Strength",
              data: [790, 710], // Assuming 150000 collected in Jul
              backgroundColor: ["#2445b9", "#d34db6"], // Male and Female colors
              borderColor: ["#2445b9", "#d34db6"], // Border colors
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "60%",
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
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

  const ExpenseChart = () => {
    const chartRef = useRef(null);
    const chartId = "expense-chart"; // Unique ID for the canvas

    useEffect(() => {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar"],
          datasets: [
            {
              label: "Expenses",
              data: [50000, 60000, 70000], // Sample expenses for Jan, Feb, Mar
              backgroundColor: ["purple", "blue", "orange"],
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
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
            <div className="counter_details">
              <p className="counter_name">Teachers</p>
              <p className="counter_count">100</p>
            </div>
          </li>
          <li className="counter parents">
            <div className="counter_icon">
              <FontAwesomeIcon icon={faUserGroup} />
            </div>
            <div className="counter_details">
              <p className="counter_name">Parents</p>
              <p className="counter_count">3000</p>
            </div>
          </li>
          <li className="counter classes">
            <div className="counter_icon">
              <FontAwesomeIcon icon={faBookOpenReader} />
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
            <ExpenseChart />
          </div>
        </section>
        <section className="chart_containers">
          <div className="chart earning">
            <div className="chart_header">
              <h3>Students</h3>
              <div className="options">
                <div className="refresh">
                  <FontAwesomeIcon icon={faRefresh} />
                </div>
                <div className="download">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} />
                </div>
              </div>
            </div>
            <StudentChart />
          </div>
          <div className="chart expense">
            <div className="chart_header">
              <h3>Teachers </h3>
              <div className="options">
                <div className="refresh">
                  <FontAwesomeIcon icon={faRefresh} />
                </div>
                <div className="download">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} />
                </div>
              </div>
            </div>
            <TeacherChart />
          </div>
        </section>
        <section className="chart_containers notice_board">
          <div className="board">
            <div className="board_header">
              <h2 className="board_title">Notice Board</h2>
              <div className="options">
                <input
                  type="search"
                  name="byTitle"
                  id="byTitle"
                  placeholder="Searcg by Title"
                  className="input"
                />
                <input
                  type="date"
                  name="byDate"
                  id="byDate"
                  className="input"
                />
                <input
                  type="search"
                  name="byTeacher"
                  id="byTeacher"
                  placeholder="search by Teacher"
                  className="input"
                />
              </div>
            </div>
            <ul className="board_body">
              <li className="notice">
                <div className="notice_header">
                  <h4 className="notice_title">Exam date</h4>
                  <h4 className="notice_dateTime">02/05/2024 11:00 AM</h4>
                </div>
                <div className="notice_body">
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, at maxime odio sunt sint earum voluptas, reprehenderit
                    incidunt harum quam, minus nemo! Aut amet necessitatibus
                    doloremque maxime magni optio excepturi?
                  </p>
                </div>
                <div className="notice_header foot">
                  <p className="timeAgo">-/ 10 mins ago</p>
                  <p className="postedBy">By:/ vinoth S (maths teacher)</p>
                </div>
              </li>
              <li className="notice">
                <div className="notice_header">
                  <h4 className="notice_title">Parents Teachers meeting</h4>
                  <h4 className="notice_dateTime">02/05/2024 11:00 AM</h4>
                </div>
                <div className="notice_body">
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, at maxime odio sunt sint earum voluptas, reprehenderit
                    incidunt harum quam, minus nemo! Aut amet necessitatibus
                    doloremque maxime magni optio excepturi?
                  </p>
                </div>
                <div className="notice_header foot">
                  <p className="timeAgo">-/ 10 mins ago</p>
                  <p className="postedBy">By:/ vinoth S (maths teacher)</p>
                </div>
              </li>
              <li className="notice">
                <div className="notice_header">
                  <h4 className="notice_title">Exam Result date</h4>
                  <h4 className="notice_dateTime">02/05/2024 11:00 AM</h4>
                </div>
                <div className="notice_body">
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, at maxime odio sunt sint earum voluptas, reprehenderit
                    incidunt harum quam, minus nemo! Aut amet necessitatibus
                    doloremque maxime magni optio excepturi?
                  </p>
                </div>
                <div className="notice_header foot">
                  <p className="timeAgo">-/ 10 mins ago</p>
                  <p className="postedBy">By:/ vinoth S (maths teacher)</p>
                </div>
              </li>
              <li className="notice">
                <div className="notice_header">
                  <h4 className="notice_title">Sports day</h4>
                  <h4 className="notice_dateTime">02/05/2024 11:00 AM</h4>
                </div>
                <div className="notice_body">
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, at maxime odio sunt sint earum voluptas, reprehenderit
                    incidunt harum quam, minus nemo! Aut amet necessitatibus
                    doloremque maxime magni optio excepturi?
                  </p>
                </div>
                <div className="notice_header foot">
                  <p className="timeAgo">-/ 10 mins ago</p>
                  <p className="postedBy">By:/ vinoth S (maths teacher)</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Admin;
