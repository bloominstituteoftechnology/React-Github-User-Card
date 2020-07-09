import React from 'react';
import lambdalogo from '../compnents/lambdalogo.png';
import githublogo from '../compnents/githublogo.png';


const Header = props => {
    return (
        <div style={{ width: '80%', margin: '0 auto', padding: '5%', display: 'flex', justifyContent: 'space-evenly', border: '3px ridge #b3d1ff' }}>
            <img style={{ width: '20%' }} src={lambdalogo} alt='' />
            <img style={{ width: '20%' }} src={githublogo} alt='' />
        </div>
    )
};

export default Header;