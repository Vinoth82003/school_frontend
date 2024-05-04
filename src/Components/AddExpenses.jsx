import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../css/addstudent.css";

const AddExpenses = () => {
  return (
    <>
      <main className="admin_page">
        <section className="chart_containers">
          <form action="#" method="post" className="table_box">
            <h1>
              <FontAwesomeIcon icon={faArrowAltCircleRight} /> Add Expenses
            </h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="fname">Name *</label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="form_input"
                      placeholder="John Doe .S"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="lname">ID No *</label>
                    <input
                      type="text"
                      name="idno"
                      id="idno"
                      className="form_input"
                      placeholder="#1001"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="email">Email </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form_input"
                      placeholder="johndoe12@gmail.com"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="expense">Expense Type *</label>
                    <select
                      name="expense"
                      id="expense"
                      className="form_input"
                      required
                    >
                      <option value="">Select Expense</option>
                      <option value="salary">Salary</option>
                      <option value="transport">Transport</option>
                      <option value="maintanance">Maintanance</option>
                      <option value="purchase">Purchase</option>
                      <option value="others">others</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="phone">Phone </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form_input"
                      placeholder="#1111"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="dob">Amount *</label>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      className="form_input"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-field">
                    <label htmlFor="status">Status *</label>
                    <select
                      name="status"
                      id="status"
                      className="form_input"
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">Unpaid</option>
                      <option value="due">Due</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label htmlFor="status">Date *</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="form_input"
                      placeholder="#1111"
                    />
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
      </main>
    </>
  );
};

export default AddExpenses;
