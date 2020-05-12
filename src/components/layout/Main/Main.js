import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import CategoryRecipes from '../../pages/Recipes/CategoryRecipes';
import Recipes from '../../pages/Recipes/Recipes';
import Recipe from '../../pages/Recipes/Recipe';
import Categories from '../../pages/Recipes/Categories';
import AddRecipe from '../../pages/Recipes/AddRecipe';
import EditRecipe from '../../pages/Recipes/EditRecipe';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/categories' component={Categories} />
			<Route path='/categories/:id' component={CategoryRecipes} />
			<Route exact path='/recipes' component={Recipes} />
			<Route path='/recipes/:id' component={Recipe} />
			<Route path='/add/:id' component={AddRecipe} />
			<Route path='/edit/:id' component={EditRecipe} />
		</Switch>
	);
};

export default Main;
