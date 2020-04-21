import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';

function App() {
	return (
		<Router basename={'/musson-grumble'}>
			<div className='container'>
				<Header />
				<Main />
			</div>
		</Router>
	);
}

export default App;
