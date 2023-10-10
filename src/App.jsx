import React from "react";
import Header from "../src/components/header/Header";
import Nav from "../src/components/nav/Nav";
import About from "../src/components/about/About";
import Experiance from "../src/components/experiance/Experiance";
import Services from "../src/components/services/Services";
import Portfolio from "../src/components/portfolio/Portfolio";
import Testimonials from "../src/components/testimonials/Testimonials";
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
        header={"My Recent Work"}
        subheader={"Portfolio"}
        data={dataWork}
      />

      <Portfolio
        header={"Practice Projects"}
        subheader={"Portfolio"}
        data={dataPractice}
      />

      <Portfolio
        header={"School Projects"}
        subheader={"Portfolio"}
        data={dataSchool}
      />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
