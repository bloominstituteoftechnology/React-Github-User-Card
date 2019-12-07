import React from 'react';

import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


const NavBar = () =>{

  return(
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href='#' active>Main</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>Followers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#' >Github</NavLink>
        </NavItem>
      </Nav>
    </div>

  );
}

export default NavBar;
