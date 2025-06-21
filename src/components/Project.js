import React from 'react';
import newsMonkey from "../assets/newsMonkey.png";
import Candy from "../assets/candy.png";
import Snake from "../assets/Snake.png";
import LMS from "../assets/LMS.png";

export default function Project() {
  return (
    <div className="container-fluid my-4">
      <div className="row">

        {/* NewsMonkey */}
        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src={newsMonkey} className="card-img-top" alt="NewsMonkey" />
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 style={{ color: 'red' }} className="card-title">NewsMonkey</h5>
                <p style={{ color: 'lightgray', fontSize: '0.9rem' }}>React, NewsAPI, Bootstrap</p>
                <p style={{ color: 'white' }} className="card-text">
                  A React project that shows live news headlines using NewsAPI. Highlights clear API use, state handling, and well-structured components.
                </p>
                <a href="https://github.com/SaadIrshadd/NewsMonkey-React-ClassBased" rel="noreferrer" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Library Management System */}
        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src={LMS} className="card-img-top" alt="Library Management System" />
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 style={{ color: 'red' }} className="card-title">Library Management System</h5>
                <p style={{ color: 'lightgray', fontSize: '0.9rem' }}>C#, ASP.NET Web Forms, MySQL</p>
                <p style={{ color: 'white' }} className="card-text">
                  A full-stack Library System with login/signup, book issue/return, fine system, and separate panels for users and admins.
                </p>
                <a href="https://github.com/SaadIrshadd/LibraryManagementSystem" rel="noreferrer" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Snake Game */}
        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src={Snake} className="card-img-top" alt="Snake Game" />
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 style={{ color: 'red' }} className="card-title">Snake Game</h5>
                <p style={{ color: 'lightgray', fontSize: '0.9rem' }}>HTML, CSS, JavaScript</p>
                <p style={{ color: 'white' }} className="card-text">
                  Classic Snake Game with smooth movement, score tracking, and collision detection. A simple yet strong demonstration of game logic.
                </p>
                <a href="https://github.com/SaadIrshadd/SnakeGame" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Candy Crush Clone */}
        <div className="col-6 col-md-3 d-flex mb-4">
          <div className="card h-100 w-100">
            <img src={Candy} className="card-img-top" alt="Candy Crush Clone" />
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 style={{ color: 'red' }} className="card-title">Candy Crush Clone</h5>
                <p style={{ color: 'lightgray', fontSize: '0.9rem' }}>HTML, CSS, JavaScript</p>
                <p style={{ color: 'white' }} className="card-text">
                  A match-3 game clone with swipe actions, animated matches, scoring, and reset system. Demonstrates interactive DOM logic and CSS animation.
                </p>
                <a href="https://github.com/SaadIrshadd/CandyCrush" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
