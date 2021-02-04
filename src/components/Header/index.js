import Nav from '../Nav';
import Cover from '../Header/Cover';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <Cover />
    </header>
  );
}

export default Header;