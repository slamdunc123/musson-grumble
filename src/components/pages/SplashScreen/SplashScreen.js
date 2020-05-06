import React, { useContext } from 'react';
import { BrandContext } from '../../../context/context';

// css
import './splashscreen.scss';

const SplashScreen = ({ callback }) => {
	const brand = useContext(BrandContext);
	// receive props from App.js (parent) in this case the callBackSplash method
	const handleOnClick = () => {
		callback(); // pass value 'false' up to App.js (parent) through the callBackSplash method
	};

	return (
		<div className='splash-body'>
			<header className='splash-title animated fadeIn delay-0.75s'>
				{brand.name}
			</header>
			<button
				className='splash-cta animated fadeInDown delay-1s'
				onClick={handleOnClick}
			>
				enter
			</button>
		</div>
	);
};

export default SplashScreen;
