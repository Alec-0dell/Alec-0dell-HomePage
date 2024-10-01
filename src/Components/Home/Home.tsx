import './Home.css';
import me from './Odell-2061.jpeg';
import React, { useState, useEffect } from 'react';

function DesktopHome() {

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension());
      };
      window.addEventListener('resize', updateDimension);
  
      return () => {
          window.removeEventListener('resize', updateDimension);
      };
  }, [screenSize]);

  return (
    <div className={screenSize.width > 880 ? "Home" : "Home-mobile"}>
      <div className={screenSize.width > 880 ? 'Intro-Body' : 'Mobile-Intro-Body'}>
        <header className="Home-header">
          Hello, I am <br /> Alec Odell
        </header>
        <p className={screenSize.width > 880 ? 'Intro-Para' : 'Mobile-Intro-Para'}>
          I am a current student at California Polytechnic University in San Luis Obispo, 
          studying to graduate in 2026 with a Bachelor's and Master's degree in Computer Science.
          I created this website using JavaScript, HTML, CSS, and React.
        </p>
      </div>
      <div className='pic-container'>
        <img 
          src={me} 
          alt='Alec Odell'
          className="profile-pic"
        />
      </div>
    </div>
  );
}

export default DesktopHome;
