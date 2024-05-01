import React from "react";
import Header from "./Header";
import Admin from "./Admin";
import "../css/section.css";

const Section = () => {
  return (
    <>
      <section className="main_section">
        <Header />
        <Admin />
      </section>
    </>
  );
};

export default Section;
