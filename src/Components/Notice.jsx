import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import "../css/addstudent.css";

const Notice = () => {
  return (
    <>
      <main className="admin_page">
        <section className="chart_containers">
          <form action="#" method="post" className="table_box notice_form">
            <h1>
              <FontAwesomeIcon icon={faArrowAltCircleRight} /> Add Notice
            </h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="fname">Title *</label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="form_input"
                      placeholder="Exam"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="lname">Posted By *</label>
                    <input
                      type="text"
                      name="idno"
                      id="idno"
                      className="form_input"
                      placeholder="John Doe (Maths Teacher)"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="lname">Visibility *</label>
                    <select name="visible" id="visible">
                      <option value="">Select Visibility</option>
                      <option value="all">All</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="email">Date *</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="form_input"
                      required
                    />
                  </div>
                  <div className="input-field text-area">
                    <label htmlFor="expense">Details *</label>
                    <textarea
                      name="details"
                      id="details"
                      rows={10}
                      cols={10}
                    ></textarea>
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

export default Notice;
