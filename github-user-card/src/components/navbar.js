import React from 'react';

import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


const NavBar = () =>{

  return(
    <div>
      <Nav tabs>
        <NavItem>
          Main
        </NavItem>
        <NavItem>
          Followers
        </NavItem>
        <NavItem>
          Github
        </NavItem>
      </Nav>
    </div>

  );
}

export default NavBar;
