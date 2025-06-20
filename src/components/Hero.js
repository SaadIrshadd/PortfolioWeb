import React from "react";
import bgImage from "../assets/bg.gif";
import tvImg from "../assets/tv.png";
import video1 from "../assets/video1.m4v";
import mobileImg from "../assets/mobile-0819.jpg";
import icon from "../assets/icon.svg";
import Navbar from "./Navbar";
import Project from "./Project";

const trendingImages = [
  "c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg",
  "c6.jpg", "c7.jpg", "c8.jpg", "c9.jpg"
];

function Hero() {
  return (
    <>
    
      <div className="main" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="box"></div>
        <Navbar/>
        <div className="hero">
          <span> Saad Irshad - MERN Stack Developer </span>
          <span>  </span>
          <span>
            I'm a full stack developer with a strong foundation in the MERN stack — React, Node.js, Express, and MongoDB. I enjoy building web apps that are not only functional but also polished in terms of UI and performance. With every project, I aim to write better code, follow best practices, and keep improving my problem-solving skills. Always learning, always building.
          </span>
          <div className="button">
            <button className="sec_btn"><a href="SaadIrshadResume.pdf" target="_blank">My Resume &gt;</a></button>
          </div>
        </div>
      </div>

      <div className="trending">
        <span>SKILLS</span>
        <div className="container">
          {trendingImages.map((img, idx) => (
            <img key={idx} src={require(`../assets/${img}`)} alt={`Trending ${idx}`} />
          ))}
        </div>
      </div>

      <div className="line"></div>

      <Project/>

      <div className="line"></div>
      <section className="content">
        <div>
          <span> Enjoy on your TV </span>
          <span>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </span>
        </div>
        <div className="secImg">
          <img src={tvImg} alt="TV" />
          <video src={video1} autoPlay loop muted></video>
        </div>
      </section>


      <div className="line"></div>
      <section className="secSection">
        <div className="secImg">
          <img src={mobileImg} alt="Mobile" />
        </div>
        <div>
          <span>Download your shows to watch offline</span>
          <span>Save your favourites easily and always have something to watch.</span>
        </div>
      </section>

      <div className="line"></div>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {["What is Netflix?", "How much does Netflix cost?", "Where can I watch Netflix?", "How do I cancel?", "What can I watch on Netflix?", "Is Netflix good for kids?"].map((q, i) => (
          <div key={i} className="f-box">
            <span>{q}</span>
            <img src={icon} alt="Toggle Icon" />
          </div>
        ))}
        <h5>
          Ready to watch? Enter your email to create or restart your membership
        </h5>
        <div className="buttons">
          <input type="text" placeholder="Email Address" />
          <button className="sec_btn">Get Started &gt;</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
