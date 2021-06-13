import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="I am a Full Stack Web Developer. Skilled in Python and Django Web Framework & having experience of building web applications"
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h1 className="about-sub-head">Akhilesh Parmar</h1>
          <p className="about-details">Full Stack Web Developer</p>

          
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
      />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
