import React from 'react';


function ErrorPage(props) {
	return (
		<div className={props.darkMode ? 'error-page-dark' : 'error-page-light'}>
            <img src="https://res.cloudinary.com/dxjqr24gm/image/upload/v1591934131/purepng.com-ninjashinobininjacovert-agentassassinationguerrilla-warfaresamuraiclip-art-1421526960608moket_1.png" style={{width: 250}} className={props.darkMode ? 'shinobi-inverted' : 'shinobi-light'}  alt="shinobi" />
            <h1>Oops! this user is not on Github</h1>
            <h3>Perhaps the username entered is incorrect</h3>
            <h3>Try again</h3>
         </div>
	);
}

export default ErrorPage;