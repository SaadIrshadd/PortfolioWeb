import React from "react";
import bgImage from "../assets/bg.gif";
import tvImg from "../assets/tv.png";
import video1 from "../assets/v.mp4";
// import mobileImg from "../assets/mobile-0819.jpg";
// import icon from "../assets/icon.svg";
import Navbar from "./Navbar";
import Project from "./Project";

const trendingImages = [
  "c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg",
  "c6.jpg", "c7.jpg", "c8.jpg", "c9.jpg","c10.jpg",
  "c11.jpg","c12.jpg","c13.jpg"
];

function Hero() {
  return (
    <>
      {/* Main */}
      <div className="main" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="box"></div>

        {/* NAVBAR */}
        <Navbar />
        <div className="hero">
          <span> MERN Stack Developer </span>
          <span> </span>
          <span>
            I’m a self driven MERN developer who builds clean, functional web
            apps using tools like React, Node.js, Express, and MongoDB. I enjoy
            solving problems, refining code, and building projects that feel
            good to use. I’m always exploring better ways to code and pushing
            myself forward with every project.
          </span>
          <div className="button">
            <button className="sec_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                  fill="black"
                ></path>
              </svg>
              <a href="SaadIrshadResume.pdf" target="_blank">
                {" "}
                Resume
              </a>
            </button>
            <button className="sec_btn2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="white"
                ></path>
              </svg>
              <a href="https://www.linkedin.com/in/SaadIrshadd" rel="noreferrer" target="_blank">
                {" "}
                Linkedin
              </a>
            </button>
          </div>
        </div>
      </div>

      {/*Skills  */}
      <div className="line"></div>
      <div className="trending">
        <span>MY SKILLS</span>
        <div className="container1">
          {trendingImages.map((img, idx) => (
            <img
              key={idx}
              src={require(`../assets/${img}`)}
              alt={`Trending ${idx}`}
            />
          ))}
        </div>
      </div>

      {/*CONTENT  */}
      <div className="line"></div>
      <section className="content">
        <div>
          <span> Through bugs and errors, I learn to build better </span>
          <span>{`or at least learn how to blame the compiler :)`}</span>
        </div>
        <div className="secImg">
          <img src={tvImg} alt="TV" />
          <video src={video1} autoPlay loop muted></video>
        </div>
      </section>

      {/*PROJECTS  */}
      <div className="line"></div>
      <span className="projects">SOME OF MY PROJECTS</span>
      <Project />

      <div className="line"></div>

      <section className="faq">
        <h5>
          Seen enough ? Hire me — I code with caffeine, memes, and clean logic.
        </h5>

        <p className="text-center text-light ">
          © 2025 <strong>Saad Irshad</strong>. All rights reserved.
        </p>
      </section>
    </>
  );
}

export default Hero;
