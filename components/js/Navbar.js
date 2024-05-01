import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className='nav-image' src="./images/sfismlogo.webp" alt='None'/>
                 </Link>
                 <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Item1
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Item2
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' target='_blank' className='nav-links' onClick={closeMobileMenu}>
                            Item3
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Item4
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' target='_blank' className='nav-links' onClick={closeMobileMenu}>
                            Item5
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' target='_blank' className='nav-links' onClick={closeMobileMenu}>
                                Item6
                        </Link>
                    </li>
                 </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar