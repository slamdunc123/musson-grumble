import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Recipes from '../../pages/Recipes/Recipes';
import Contact from '../../pages/Contact/Contact';
import AddRecipe from '../../pages/Recipes/AddRecipe';
import EditRecipe from '../../pages/Recipes/EditRecipe';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/recipes' component={Recipes} />
			<Route exact path='/contact' component={Contact} />
			<Route exact path='/add' component={AddRecipe} />
			<Route exact path='/edit/:id' component={EditRecipe} />
		</Switch>
	);
};

export default Main;
