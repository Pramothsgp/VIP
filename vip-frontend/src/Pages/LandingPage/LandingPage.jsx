import React from "react";
import Header from "./Header/Header";
import JobSearch from "./JobSearch/JobSearch";
import "./LandingPage.css";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import Team from "./Team/Team";
import Footer from "../Footer/Footer";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <header className="landingPage-header">
        <Header />
        <JobSearch />
      </header>
      <FeaturedJobs />
      <div className="join-us">
        <h1>
          We&apos;r more than just a <br></br>workplace.We&apos; a family.
        </h1>
        <button className="join-us-btn">JOIN US</button>
      </div>
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;
