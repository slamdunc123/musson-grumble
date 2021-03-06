import React, { Component } from 'react';
import axios from 'axios';
import domain from '../../../domain';
import RecipeList from './RecipeList';
import { Link } from 'react-router-dom';
// import './recipes.scss';

export default class ReadRecipe extends Component {
	state = {
		recipes: [],
	};

	componentDidMount = () => {
		axios
			.get(`${domain}/list.php?id=` + this.props.match.params.id)
			.then((response) => {
				console.log(response);
				this.setState({
					recipes: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	recipeList() {
		const { recipes } = this.state;
		// console.log('ReadRecipe -> recipeList -> recipes', recipes);
		return recipes.map((recipe) => {
			return <RecipeList recipe={recipe} key={recipe.id} />;
		});
	}

	render() {
		return (
			<>
				<h5 align='center'>Recipe List</h5>

				<Link
					to={'/add'}
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
