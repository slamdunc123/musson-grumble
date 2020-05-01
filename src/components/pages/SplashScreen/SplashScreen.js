import React from 'react';

// css
import './splashscreen.scss';

const SplashScreen = ({ callback, title }) => {
	console.log(title);
	// receive props from App.js (parent) in this case the callBackSplash method
	const handleOnClick = () => {
		callback(); // pass value 'false' up to App.js (parent) through the callBackSplash method
	};

	return (
		<div className='splash-body'>
			<header className='splash-title animated fadeIn delay-0.75s'>
				{title}
			</header>
			<button
				className='splash-cta animated fadeInDown delay-1s'
				onClick={handleOnClick}
			>
				Enter
			</button>
		</div>
	);
};

export default SplashScreen;
