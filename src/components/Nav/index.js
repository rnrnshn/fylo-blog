import logo from '../../assets/images/logo.svg';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="" />

      <div className="nav-list">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Blog" className="nav-item">Blog</Link>
        <Link to="/New" className="nav-item">New</Link>
      </div>
    </nav>
  );
}

export default Nav;