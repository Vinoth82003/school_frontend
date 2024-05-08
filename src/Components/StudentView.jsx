import React from "react";
import defaultPhoto from "../img/default.jpeg";
import "../css/view.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faPrint } from "@fortawesome/free-solid-svg-icons";

const StudentView = () => {
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
                  </button>
                  <button type="button" className="print">
                    <FontAwesomeIcon icon={faPrint} />
                  </button>
                </div>
              </div>
              <div className="right_content">
                <div className="cnt-row">
                  <h3 className="name">John doe</h3>
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
                      <h4 className="lable">Roll</h4> :
                      <p className="viewName">#0002</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Class</h4> :
                      <p className="viewName">12</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">Section</h4> :
                      <p className="viewName">B</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Date-of-birth</h4> :
                      <p className="viewName">11/11/2011</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">Gender</h4> :
                      <p className="viewName">Male</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Father's Name</h4> :
                      <p className="viewName">jonhn henry doe</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">Mother's Name</h4> :
                      <p className="viewName">Milly jonce doe</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Religion</h4> :
                      <p className="viewName">Hindu</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">Occupation</h4> :
                      <p className="viewName">Farmer</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Email</h4> :
                      <p className="viewName">johndoe@example.com</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">Admission ID</h4> :
                      <p className="viewName">#1001</p>
                    </div>
                  </div>
                  <div className="cnt-col">
                    <div className="inner-cnt">
                      <h4 className="lable">Roll</h4> :
                      <p className="viewName">MTMHSS_0002</p>
                    </div>
                    <div className="inner-cnt">
                      <h4 className="lable">Phone</h4> :
                      <p className="viewName">+91 9109876542</p>
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

export default StudentView;
