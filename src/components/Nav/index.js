import logo from '../../assets/images/logo.svg';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="" />

      <div className="nav-list">
        <a className="nav-item" href="/">Home</a>
        <a className="nav-item" href="/">Home</a>
        <a className="nav-item" href="/">Home</a>
      </div>
    </nav>
  );
}

export default Nav;