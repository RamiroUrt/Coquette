import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Ellipsis, X } from 'lucide-react';

import LogoCot from '../../public/img/logos/CoquetteSinFondo.webp';


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <>
      <nav className='desktop-nav'>
        <div className="logo">
          <img src={LogoCot} alt="Logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li><Link className='nav-link' to='/'>Home</Link></li>
            <li><Link className='nav-link' to='/catalogue'>Catalogue</Link></li>
            <li><Link className='nav-link' to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <nav className="hamburger-nav">
        <div className="logo">
          <img src={LogoCot} alt="Logo" />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={`icon ${menuOpen ? 'hide' : 'show'}`}>
            <Ellipsis size={26} />
          </span>
          <span className={`icon ${menuOpen ? 'show' : 'hide'}`}>
            <X size={26} />
          </span>
        </div>
        {menuOpen && (
          <>
            <div className="nav-links">
              <ul className='nav-links-hamburger'>
                <li className="background" onClick={closeMenu}><Link to='/'>Home</Link></li>
                <li><Link to='/catalogue' onClick={closeMenu}>Catalogue</Link></li>
                <li><Link to='/contact' onClick={closeMenu}>Contact</Link></li>
              </ul>
            </div>
          </>
        )}
      </nav>
        <Outlet />
    </>
  );
};

export default Nav;
