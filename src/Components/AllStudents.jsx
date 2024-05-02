import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookJournalWhills,
  faFemale,
  faMale,
} from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import "../css/allStudent.css";

const AllStudents = () => {
  return (
    <main className="admin_page">
      <ul className="counter_box allStuds_counts">
        <li className="counter classes">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faMale} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Boys</p>
            <p className="counter_count">1000</p>
          </div>
        </li>
        <li className="counter teachers">
          <div className="counter_icon">
            <FontAwesomeIcon icon={faFemale} />
          </div>
          <div className="counter_details">
            <p className="counter_name">Girls</p>
            <p className="counter_count">500</p>
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
            <p className="counter_name">Groups</p>
            <p className="counter_count">4 grps</p>
          </div>
        </li>
      </ul>
      <section className="chart_containers">
        <div className="table_box">
          <ul className="table_options">
            <li className="selected">
              selected <span className="selected_count">0</span> rows
            </li>
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
                <option value="c">D</option>
              </select>
            </li>
          </ul>
          <table class="table">
            <thead class="table_head">
              <tr class="tr">
                <th class="th checkbox">
                  <input type="checkbox" name="checkAll" id="checkAll" />
                </th>
                <th class="th">Roll</th>
                <th class="th">photo</th>
                <th class="th">name</th>
                <th class="th">gender</th>
                <th class="th">class</th>
                <th class="th">section</th>
                <th class="th">parents</th>
                <th class="th">Address</th>
                <th class="th">d-o-b</th>
                <th class="th">phone</th>
                <th class="th">e-mail</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tr">
                <td class="td checkbox">
                  <input type="checkbox" name="checkAll" id="checkAll" />
                </td>
                <td class="td">#1001</td>
                <td class="td">photo</td>
                <td class="td">John Doe</td>
                <td class="td">Male</td>
                <td class="td">1</td>
                <td class="td">B</td>
                <td class="td">John Milly</td>
                <td class="td">
                  #07/05, North Street, City Name, State, Country, 100 010
                </td>
                <td class="td">11/08/2003</td>
                <td class="td">+91 9012345678</td>
                <td class="td">johndoe@gmail.com</td>
              </tr>
              <tr class="tr">
                <td class="td checkbox">
                  <input type="checkbox" name="checkAll" id="checkAll" />
                </td>
                <td class="td">#1002</td>
                <td class="td">photo</td>
                <td class="td">Jane Smith</td>
                <td class="td">Female</td>
                <td class="td">2</td>
                <td class="td">A</td>
                <td class="td">Michael Smith</td>
                <td class="td">
                  #15/08, South Avenue, Another City, Another State, Another
                  Country, 200 020
                </td>
                <td class="td">05/12/2005</td>
                <td class="td">+1 1234567890</td>
                <td class="td">janesmith@example.com</td>
              </tr>
              <tr class="tr">
                <td class="td checkbox">
                  <input type="checkbox" name="checkAll" id="checkAll" />
                </td>
                <td class="td">#1003</td>
                <td class="td">photo</td>
                <td class="td">Alice Johnson</td>
                <td class="td">Female</td>
                <td class="td">3</td>
                <td class="td">C</td>
                <td class="td">Robert Johnson</td>
                <td class="td">
                  #20/12, East Street, Some Town, Another State, Another
                  Country, 300 030
                </td>
                <td class="td">09/03/2004</td>
                <td class="td">+44 9876543210</td>
                <td class="td">alicejohnson@example.com</td>
              </tr>
              <tr class="tr">
                <td class="td checkbox">
                  <input type="checkbox" name="checkAll" id="checkAll" />
                </td>
                <td class="td">#1004</td>
                <td class="td">photo</td>
                <td class="td">David Lee</td>
                <td class="td">Male</td>
                <td class="td">4</td>
                <td class="td">D</td>
                <td class="td">Jennifer Lee</td>
                <td class="td">
                  #25/05, West Street, Some City, Another State, Another
                  Country, 400 040
                </td>
                <td class="td">18/06/2002</td>
                <td class="td">+61 123498765</td>
                <td class="td">davidlee@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default AllStudents;
