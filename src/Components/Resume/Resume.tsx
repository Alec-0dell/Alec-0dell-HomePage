import "./Resume.css";
import ResumeImg from "./ResumeBig1.jpg";

function Resume() {
  const downloadFile = (url: string) => {
    const fileName = "AlecOdellResume.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag); // Safely remove the element after click
  };

  return (
    <div className="Resume">
      <header className="Resume-header">My Resume</header>
      <hr className="Resume-hr" />
      <button
        onClick={() => downloadFile("http://alec-0dell.github.io/Portfolio-Website/Resume2024.pdf")}
        className="Resume-Button"
      >
        Download Resume
      </button>
      <hr className="Resume-hr" />
      <div className="Image-Container">
      <img className="Resume-IMG" src={ResumeImg} alt="Alec Odell's Resume" />
      </div>
    </div>
  );
}

export default Resume;
