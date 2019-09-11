import React from 'react';
import Emoji from './Emoji';
import LambdaLogo from '../assets/lambdalogo.png';
import GithubLogo from '../assets/githublogo.png';

function Head() {
    return(
        <div className="container">
            <div className="header">
                <img src={LambdaLogo} alt="Lambda Logo" />
                <div>
                    <Emoji symbol="❤️" label="heart" />'s
                </div>
                <img src={GithubLogo} alt="Github Logo" />

            </div>
        </div>
    )
}

export default Head;