import React from "react";
import Header from "../src/components/header/Header";
import Nav from "../src/components/nav/Nav";
import About from "../src/components/about/About";
import Experiance from "../src/components/experiance/Experiance";
import Portfolio from "../src/components/portfolio/Portfolio";
import Contact from "../src/components/contact/Conctact";
import Footer from "../src/components/footer/Footer";
// Data
import dataWork from "./constants/Projects-Data-work";
import dataPractice from "./constants/Projects-Data-practive";
import dataSchool from "./constants/Projects-Data-school";
// Google anal.
import ReactGa from "react-ga";
// Initialize google analitycs
ReactGa.initialize(process.env.TRACKING_ID);

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      {/* <Services /> */}
      <Portfolio
        projectsHeader={"My Recent Work"}
        projectsSubHeader={"Portfolio"}
        projectsData={dataWork}
      />

      <Portfolio
        projectsHeader={"Practice Projects"}
        projectsSubHeader={"Portfolio"}
        projectsData={dataPractice}
      />

      <Portfolio
        projectsHeader={"School Projects"}
        projectsSubHeader={"Portfolio"}
        projectsData={dataSchool}
      />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
