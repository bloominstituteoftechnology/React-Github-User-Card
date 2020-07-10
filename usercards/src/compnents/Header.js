import React from 'react';
import lambdalogo from '../compnents/lambdalogo.png';
import githublogo from '../compnents/githublogo.png';


const Header = props => {
    return (
        <div style={{ width: '75%', margin: '0 auto', padding: '5%', display: 'flex', justifyContent: 'space-evenly' }}>
            <img style={{ width: '15%' }} src={lambdalogo} alt='' />
            <img style={{ width: '15%' }} src={githublogo} alt='' />
        </div>
    )
};

export default Header;