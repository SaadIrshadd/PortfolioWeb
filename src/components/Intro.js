import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo1.png';
import tadaSound from '../assets/intro.mp3';

export default function Intro() {
  const [showGate, setShowGate] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (clicked) return;

      setClicked(true);
      const audio = new Audio(tadaSound);
      audio.play();

      setTimeout(() => {
        setShowGate(false);
      }, 3500);
    };

    if (showGate) {
      window.addEventListener('click', handleClick);
    }

    return () => window.removeEventListener('click', handleClick);
  }, [clicked, showGate]);

  if (!showGate) return null;

  return (
    <div className="intro">
      <img
        src={Logo}
        alt="Saad Irshad Logo"
        className={`logo ${clicked ? 'animate' : ''}`}
      />
    </div>
  );
}
