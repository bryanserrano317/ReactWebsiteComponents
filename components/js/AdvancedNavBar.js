import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function NavBar() {
  return (
    <Navbar>
      <NavItem icon="<3"/>
      <NavItem icon="<3"/>
      <NavItem icon="<3"/>

      <NavItem icon="<3">
        <DropdownMenu/>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props){
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  )
}

function NavItem(props){

  const [open, setOpen] = useState(false);


  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }


  function DropdownItem(props){
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">

        <DropdownItem>Team</DropdownItem>
        <DropdownItem
          leftIcon="<3"
          rightIcon=">"
          goToMenu="settings">
        Events
          
        </DropdownItem>
        </div>
       </CSSTransition>

       <CSSTransition 
        in={activeMenu === 'settings'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">

        <DropdownItem>Past Events</DropdownItem>
        <DropdownItem
          leftIcon="<3"
          rightIcon=""
          goToMenu="main">
        Future Events
          
        </DropdownItem>
        </div>
       </CSSTransition>
  </div>);
}

export default NavBar;
