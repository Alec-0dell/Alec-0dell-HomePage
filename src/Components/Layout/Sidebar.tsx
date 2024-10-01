import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from "react-router-dom";

export default () => {
  return (
    <Menu right>
      <Link to="/" className="menu-item"> Home </Link>
      <Link to="/About" className="menu-item"> About </Link>
      <Link to="/Resume" className="menu-item"> Resume </Link>
      <Link to="/CodingProjects" className="menu-item"> Projects </Link>
      <hr>
      </hr>
      <a className="menu-item" href="https://github.com/Alec-0dell">
        GitHub
      </a>
      <a className="menu-item" href="https://www.linkedin.com/in/alec-odell/">
        LinkedIn
      </a>
    </Menu>
  );
};