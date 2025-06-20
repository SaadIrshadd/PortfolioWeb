import React from 'react';
import newsMonkey from "../assets/newsMonkey.png";
import Candy from "../assets/candy.png";
import Snake from "../assets/Snake.png";
import LMS from "../assets/LMS.png"

export default function Project() {
  return (
    <div className="container-fluid my-4">
      <div className="row">

        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src={newsMonkey} className="card-img-top" alt="Card 1" />
            <div style={{ backgroundColor:`rgb(54 53 53 / 91%)`}} className="card-body d-flex flex-column justify-content-between">
              <div >
                <h5 style={{color:`red`}} className="card-title">NewsMonkey</h5>
                <p style={{color:`white`}} className="card-text">A React project that shows live news headlines using NewsAPI. Highlights clear API use, state handling, and well-structured components.</p>
              </div>
              </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src={LMS}  className="card-img-top" alt="Card 2" />
            <div style={{ backgroundColor:`rgb(54 53 53 / 91%)`}} className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title" style={{color:`red`}}>LibraryManagementSystem</h5>
                <p className="card-text" style={{color:`white`}}>A Library Management System built with ASP.NET Web Forms and MySQL. Includes login/signup, book borrow/return, fine system, and separate user/admin panels—covers key features of a real-world web app.</p>
              </div>
              </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src={Snake} className="card-img-top" alt="Card 3" />
            <div style={{ backgroundColor:`rgb(54 53 53 / 91%)`}} className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title" style={{color:`red`}} >SnakeGame</h5>
                <p className="card-text" style={{color:`white`}}>A classic Snake Game made with HTML, CSS, and JavaScript. Includes smooth movement, collision detection, and score tracking—shows solid grip on game logic and interactive web design.</p>
              </div>
              </div>
          </div>
        </div>

        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src={Candy} className="card-img-top" alt="Card 4" />
            <div style={{ backgroundColor:`rgb(54 53 53 / 91%)`}} className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title" style={{color:`red`}} >CandyCrush Game</h5>
                <p className="card-text" style={{color:`white`}}>Candy Crush Clone made with HTML, CSS, and JavaScript. Players swap candies to match 3 or more, with smooth animations, scoring, and engaging gameplay that reflects strong UI and logic skills.</p>
              </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}
