import './Home.css'
import me from './Odell-2061.jpeg'
import React, { useState, useEffect } from 'react'

function DesktopHome() {

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
  
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [screenSize])

    return (
      <div className="Home">
        <div className='Intro-Body'>
          <header className="Home-header"> Hello, I am <br/>Alec Odell</header>
          <p className='Intro-Para'>I am a current student at California Polytechnic Univerisity in San Luis Obispo studying to graduate in 2027 with a bachelors and masters degree in computer science. I created this website using JavaScript, HTML, CSS, and React</p>
        </div>
        <div className='pic-container'>
          <img src={me} alt='Alec Odell' style={{width: `${(screenSize.width/2)}px`}}/>   
        </div>
      </div>
    );
  }
  
  export default DesktopHome;