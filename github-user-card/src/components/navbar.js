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
          <NavLink href='#' active>Followers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#' active>Github</NavLink>
        </NavItem>
      </Nav>
    </div>

  );
}

export default NavBar;
