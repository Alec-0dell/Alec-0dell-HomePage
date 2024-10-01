import "./AboutMe.css";
import ImageSlider from "./ImageSlider";
import River from "./Images/IMG_0535.jpeg";
import Canyon from "./Images/IMG_0945.jpeg";
import StateBB from "./Images/IMG_2380.jpeg";
import Lake from "./Images/IMG_5441.jpeg";
import Mountains from "./Images/IMG_5444.jpeg";
import Golf from "./Images/IMG_6006.jpeg";
import Lacrosse from "./Images/IMG_6047.jpeg";
import Scramble from "./Images/IMG_6785.jpeg";
import Pepper from "./Images/IMG_Alec.jpeg";
import Jumpshot from "./Images/IMG_BB.jpeg";
import Grad from "./Images/IMG_0644.jpeg";
import CanyonBoys from "./Images/IMG_0525.jpeg";
import MountainBike from "./Images/IMG_6388.jpeg";
import MountainBikeFront from "./Images/IMG_6327.jpeg";
import Surf from "./Images/IMG_5681.jpeg";

const AboutMe = () => {
  const slidesA = [
    { url: Pepper, title: "My Dog" },
    { url: StateBB, title: "State Basketball Tournament" },
    { url: Grad, title: "Graduation" },
    { url: CanyonBoys, title: "My Friends on an Adventure" },
    { url: MountainBike, title: "Mountain Biking" },
  ];
  const slidesB = [
    { url: River, title: "On an Adventure" },
    { url: Canyon, title: "Mountain Biking Adventure" },
    { url: Scramble, title: "Backpacking Trip" },
    { url: Lake, title: "Cool Lake" },
    { url: Mountains, title: "Mountain View" },
  ];
  const slidesC = [
    { url: Golf, title: "Golfing" },
    { url: Lacrosse, title: "Lacrosse Game" },
    { url: Jumpshot, title: "Jumpshot" },
    { url: Surf, title: "Surfing" },
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
      <p className="AboutMe-Intro-Para">
        Hello there! My name is Alec Odell. I am a passionate Computer Science student at California Polytechnic State University, San Luis Obispo. 
        While I spend a significant amount of time immersed in the world of algorithms and coding, I'm equally enthusiastic about exploring the great outdoors and indulging in my love for sports.
      </p>
      <div style={containerStyles}>
        <ImageSlider slides={slidesA} />
      </div>
      <p className="AboutMe-Para">
        The thrill of the outdoors has always excited me. Whether it's backpacking through beautiful trails, skiing thrilling slopes, or fishing in serene lakes, I love any activity in the outdoors.
      </p>
      <div style={containerStyles}>
        <ImageSlider slides={slidesB} />
      </div>
      <p className="AboutMe-Para">
        Sports have always been an large part of my life. I have learned many life lessons on the basketball court and enjoy playing in my spare time. Many of my leaderships and collaboration skills stem from my time as an athlete.
      </p>
      <div style={containerStyles}>
        <ImageSlider slides={slidesC} />
      </div>
      <p className="AboutMe-Para">
        While my academic studies in Computer Science keep me busy, I try find time to get out and enjoy the outdoors or play pickup basketball game with my friends, balancing both worlds.
      </p>
    </div>
  );
};

export default AboutMe;
