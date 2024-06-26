import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/promotion.css";

const Studentpromotion = () => {
  return (
    <>
      <main className="admin_page">
        <section className="chart_containers">
          <div className="table_box">
            <h1>
              <FontAwesomeIcon icon={faArrowAltCircleRight} /> Students
              Promotion
            </h1>
            <div className="container">
              <div className="options">
                <select name="current_session" id="current_session">
                  <option value="">class</option>
                  <option className="option" value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select name="promotion_session" id="promotion_session">
                  <option value="">section</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </select>
                <button type="button" className="fetch">
                  Fetch
                </button>
              </div>
              <div className="options select_bar">
                <div className="selected_count">
                  selected <span className="count_box">10</span>
                </div>
                <button type="button" className="btn promote">
                  Promote
                </button>
                <button type="button" className="btn depromote">
                  Depromote
                </button>
                <button type="button" className="btn fail">
                  Fail
                </button>
              </div>
              <table className="table promotetable">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th>Roll no</th>
                    <th>name</th>
                    <th>class</th>
                    <th>section</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>#0001</td>
                    <td>john doe</td>
                    <td>1</td>
                    <td>A</td>
                    <td>
                      <select name="status" id="status">
                        <option value="promote">Promote</option>
                        <option value="depromote">Depromote</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>#0001</td>
                    <td>john doe</td>
                    <td>1</td>
                    <td>A</td>
                    <td>
                      <select name="status" id="status">
                        <option value="promote">Promote</option>
                        <option value="depromote">Depromote</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>#0001</td>
                    <td>john doe</td>
                    <td>1</td>
                    <td>A</td>
                    <td>
                      <select name="status" id="status">
                        <option value="promote">Promote</option>
                        <option value="depromote">Depromote</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Studentpromotion;
