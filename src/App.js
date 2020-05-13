import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import SplashScreen from './components/pages/SplashScreen/SplashScreen';

function App() {
	const [isSplash, setIsSplash] = useState(true);

	const callbackSplashScreen = () => {
		setIsSplash(false);
	};

	return (
		<Router basename={'/musson-grumble'}>
			{isSplash ? (
				<SplashScreen callback={callbackSplashScreen} />
			) : (
				<div className='container-fluid'>
					<Header />
					<Main />
				</div>
			)}
		</Router>
	);
}

export default App;
