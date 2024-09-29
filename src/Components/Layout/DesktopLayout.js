import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Sidebar from "./Sidebar";

function DesktopLayout() {
    return (
      <view >
        <hr className="hr"/>
          <view className="NavBar-Container">
            <nav>
              <heading className="Layout-Title">Alec Odell</heading>
              <Link to="/" className="Layout-Link"> Home </Link>
              <hr className="vertical"></hr>
              <Link to="/About" className="Layout-Link"> About </Link>
              <hr className="vertical"></hr>
              <Link to="/Resume" className="Layout-Link"> Resume </Link>
              <hr className="vertical"></hr>
              <Link to="/CodingProjects" className="Layout-Link"> Coding Projects </Link>
              <hr className="vertical-last"></hr>
              <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            </nav>
          </view>
        <hr className="hr"/>
        <Outlet />
        
          <nav>
          <view className="footer-container">
            <hr className="hr"></hr>
            <h1 className="Layout-Title-Footer">Alec Odell's Website</h1>
            <p className="contact-info">Phone: 425 638-3258</p>
            <p className="contact-info">Email: alec_odell@outlook.com</p>
            <Link to="/" className="footer-item"> Home </Link>
            <Link to="/About" className="footer-item"> About </Link>
            <Link to="/Resume" className="footer-item"> Resume </Link>
            <Link to="/CodingProjects" className="footer-item"> Coding Projects </Link>
            <hr className="hr-grey"></hr>
            <a className="footer-item" href="https://github.com/Alec-0dell"> GitHub </a>
            <a className="footer-item" href="https://www.linkedin.com/in/alec-odell/"> LinkedIn </a>
            <hr className="hr-grey-smaller"></hr>
            <hr className="hr"></hr>
            </view>
          </nav>
        
      </view>
    );
}


export default DesktopLayout;

              /**<div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
                <Menu isOpen={hamburgerOpen}/>
              </div>*/