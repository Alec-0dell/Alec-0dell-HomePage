import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Sidebar from "./Sidebar.tsx";

function MobileLayout() {
    return (
      <div className="container" >
          <view className="NavBar-Container">
            <div className="NavBar-Mobile">
            <nav>
              <h1 className="Layout-Title">Alec Odell</h1>
            </nav>
            <Sidebar/>
            </div>
          </view>
        <Outlet />
        
        <nav>
        <div className="footer-container">
          <h1 className="Layout-Title-Footer">Alec Odell's Website</h1>
          <p className="contact-info">Phone: 425 638-3258</p>
          <p className="contact-info">Email: alec_odell@outlook.com</p>
          <hr className="hr-grey-bigger" />
          <div className="footer-row">
          <Link to="/" className="footer-item"> Home </Link>
          <Link to="/About" className="footer-item"> About </Link>
          <Link to="/Resume" className="footer-item"> Resume </Link>
          <Link to="/CodingProjects" className="footer-item"> Projects </Link>
          </div>
          <hr className="hr-grey" />
          <div className="footer-row">
          <a className="footer-item" href="https://github.com/Alec-0dell"> GitHub </a>
          <a className="footer-item" href="https://www.linkedin.com/in/alec-odell/"> LinkedIn </a>
          </div>
          <hr className="hr-grey-smaller" />
          <p className="copyright">© 2023 Alec Odell's Website | All Rights Reserved</p>
          <hr className="hr" />
        </div>
      </nav>
        
      </div>
    );
}


export default MobileLayout;