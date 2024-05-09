import React from "react";
import defaultPhoto from "../img/parents.jpg";
import "../css/view.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faFileDownload,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const ParentView = () => {
  return (
    <>
      <main className="admin_page">
        <section className="view_section chart_containers">
          <div className="view">
            <div className="inner_view">
              <div className="left_image">
                <img src={defaultPhoto} alt="" />
                <div className="view_options">
                  <button type="button" className="download">
                    <FontAwesomeIcon icon={faFileDownload} />
                    <span className="btn-txt">download</span>
                  </button>
                  <button type="button" className="print">
                    <FontAwesomeIcon icon={faPrint} />
                    <span className="btn-txt">print</span>
                  </button>
                  <button type="button" className="edit">
                    <FontAwesomeIcon icon={faEdit} />
                    <span className="btn-txt">edit</span>
                  </button>
                </div>
              </div>
              <div className="right_content">
                <div className="cnt-row">
                  <h3 className="name">jonhn henry doe</h3>
                  <p className="bio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, soluta amet laudantium voluptatibus molestias
                    necessitatibus praesentium iusto autem repudiandae ab est,
                    porro incidunt expedita sit quis itaque distinctio provident
                    ea.
                  </p>
                </div>
                <div className="cnt-row">
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Name</h4> :
                      <p className="viewName">Student_0002</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">Gender</h4> :
                      <p className="viewName">Male</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Occupation</h4> :
                      <p className="viewName">Lawyer</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">ID</h4> :
                      <p className="viewName">#10012</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Religion</h4> :
                      <p className="viewName">Hindu</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">Phone</h4> :
                      <p className="viewName">+91 9012345678</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">E-mail</h4> :
                      <p className="viewName">jonhnhenrydoe@gmail.com</p>
                    </div>
                    <div className="inner-cnt childrens">
                      <h4 className="lable">Childrens :</h4>
                      <ol>
                        <li>
                          <h5>John doe</h5>
                          <p>12 - B</p>
                        </li>
                        <li>
                          <h5>Milly doe</h5>
                          <p>10 - A</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Address</h4> :
                      <p className="viewName">
                        #10, north street, main road, village name, post name,
                        talk name,state 908 765
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ParentView;
