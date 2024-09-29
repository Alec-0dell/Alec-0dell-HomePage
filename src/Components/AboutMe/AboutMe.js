import "./AboutMe.css"
import ImageSlider from "./ImageSlider";
import River from "./Images/IMG_0535.jpeg"
import Canyon from "./Images/IMG_0945.jpeg"
import StateBB from "./Images/IMG_2380.jpeg"
import Lake from "./Images/IMG_5441.jpeg"
import Mountains from "./Images/IMG_5444.jpeg"
import Golf from "./Images/IMG_6006.jpeg"
import Lacrosse from "./Images/IMG_6047.jpeg"
import Scramble from "./Images/IMG_6785.jpeg"
import Pepper from "./Images/IMG_Alec.jpeg"
import Jumpshot from "./Images/IMG_BB.jpeg"
import Grad from "./Images/IMG_0644.jpeg"
import CanyonBoys from "./Images/IMG_0525.jpeg"
import MountainBike from "./Images/IMG_6388.jpeg"
import MountainBikeFront from "./Images/IMG_6327.jpeg"
import Surf from "./Images/IMG_5681.jpeg"



const AboutMe = () => {
  const slidesA = [
    { url: Pepper, title: "My Dog" },
    { url: StateBB, title: "State Basketball Tournamnet" },
    { url: Grad, title: "Graducation" },
    { url: CanyonBoys, title: "My Friends on an Adventure" },
    { url: MountainBike, title: "Going Mountain Biking" },
  ];
  const slidesB = [
    { url: River, title: "On an Adventure" },
    { url: Canyon, title: "Mountain Biking Adventure" },
    { url: Scramble, title: "On a Backpacking Trip" },
    { url: Lake, title: "Cool Lake" },
    { url: Mountains, title: "Cool View From Hike" },
  ];
  const slidesC = [
    { url: Golf, title: "Goiing Golfing" },
    { url: Lacrosse, title: "Lacrosse Game" },
    { url: Jumpshot, title: "Jumpshot" },
    { url: Surf, title: "Going Surfing" },
    { url: MountainBikeFront, title: "Mountain Biking" },
  ];
  const containerStyles = {
    width: "80%",
    height: "560px",
    margin: "0 auto",
    paddingBottom: "30px",
    maxWidth: "1000px"
  };
  return (
    <div className="AboutMe">
        <h1 className="AboutMe-header">About Me</h1>
        <p className="AboutMe-Intro-Para">Hello there! I'm Alec Odell, a passionate first-year Computer Science student at California Polytechnic State University, San Luis Obispo. While I spend a significant amount of time immersed in the world of algorithms and coding, I'm equally enthusiastic about exploring the great outdoors and indulging in my love for sports.</p>
        <div style={containerStyles}>
            <ImageSlider slides={slidesA} />
        </div>
        <p className="AboutMe-Para">The thrill of the outdoors has always beckoned me. Whether it's backpacking through rugged trails, skiing down powdery slopes, or casting a line while fishing in serene lakes, I find solace and inspiration in nature's wonders. There's something truly magical about disconnecting from the digital world and reconnecting with the beauty of our natural surroundings.</p>
        <div style={containerStyles}>
            <ImageSlider slides={slidesB} />
        </div>
        <p className="AboutMe-Para">Sports have been an integral part of my life since I can remember. I have a special place in my heart for lacrosse and basketball. The strategy, camaraderie, and the exhilaration of competition draw me to these sports like a moth to a flame. Whether I'm on the field, court, or in the stands cheering for my favorite teams, you can bet I'm fully engaged in the game.</p>
        <div style={containerStyles}>
            <ImageSlider slides={slidesC} />
        </div>
        <p className="AboutMe-Para">While my academic pursuits in Computer Science keep me busy with coding challenges and problem-solving, I firmly believe in the importance of striking a balance. When I'm not debugging code, you'll find me planning my next backpacking trip or shooting hoops with friends. This blend of technology and the great outdoors defines who I am.</p>
    </div>
  );
};

export default AboutMe;