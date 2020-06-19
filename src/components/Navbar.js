import React from 'react';
import githublogo from '../githublogo.svg';


function Navbar(props) {
	return(
        <div className={props.darkMode ? 'App-header-dark' : 'App-header-light'}>
          <img src={githublogo} className={props.darkMode ? 'Navbar-logo-inverted' : 'Navbar-logo-light'} alt="logo" /> 
          <nav>
            <div className="toggle-container">
              <span style={{color: props.darkMode ? 'grey' : 'black'}}>☀</span>
              <span className="toggle">
                <input
                  checked={props.darkMode}
                  onChange={props.darkModeToggle}
                  id="checkbox"
                  className="checkbox"
                  type="checkbox"
                />
                <label htmlFor="checkbox" />
              </span>
              <span style={{color: props.darkMode ? 'slateblue' : 'grey'}}>☾</span>
            </div>
          </nav>
        </div> 
	);
}

export default Navbar;