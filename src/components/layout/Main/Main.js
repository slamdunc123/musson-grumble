import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Recipes from '../../pages/Recipes/Recipes';
import Categories from '../../pages/Recipes/Categories';
import Contact from '../../pages/Contact/Contact';
import AddRecipe from '../../pages/Recipes/AddRecipe';
import EditRecipe from '../../pages/Recipes/EditRecipe';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route exact path='/categories' component={Categories} />
			<Route path='/recipes/:id' component={Recipes} />
			<Route path='/contact' component={Contact} />
			<Route path='/add/:id' component={AddRecipe} />
			<Route path='/edit/:id' component={EditRecipe} />
		</Switch>
	);
};

export default Main;
