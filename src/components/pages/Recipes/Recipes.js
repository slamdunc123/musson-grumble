import React, { Component } from 'react';
import axios from 'axios';
import domain from '../../../domain';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../partials/LoadingSpinner';
// import './recipes.scss';

export default class Recipes extends Component {
	state = {
		recipes: [],
		isLoading: true,
	};

	componentDidMount = () => {
		axios
			.get(`${domain}/recipes.php`)
			.then((response) => {
				console.log(response.data);
				this.setState({
					recipes: response.data,
				});
				this.setState({
					isLoading: false,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	// getCategoryName = () => {
	// 	const { recipes } = this.state;
	// 	return recipes.c_name;
	// };

	recipeList() {
		const { recipes } = this.state;
		// console.log('ReadRecipe -> recipeList -> recipes', recipes);
		return recipes.map((recipe) => <div key={recipe.id}>{recipe.name}</div>);
	}

	render() {
		return (
			<>
				<h5 align='center'>Recipes</h5>

				<Link
					to={'/add/' + this.props.match.params.id}
					className='nav-link btn btn-outline-info btn-sm'
					type='button'
				>
					Add
				</Link>
				<div>{this.recipeList()}</div>
			</>
		);
	}
}
