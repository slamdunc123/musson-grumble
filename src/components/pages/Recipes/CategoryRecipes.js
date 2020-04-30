import React, { Component } from 'react';
import axios from 'axios';
import domain from '../../../domain';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';
// import './recipes.scss';

export default class CategoryRecipes extends Component {
	state = {
		recipes: [],
		categoryName: '',
	};

	componentDidMount = () => {
		axios
			.get(`${domain}/categoryRecipes.php?id=` + this.props.match.params.id)
			.then((response) => {
				console.log(response.data);
				this.setState({
					recipes: response.data,
					categoryName: response.data[0].c_name,
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
		return recipes.map((recipe) => {
			return <Recipe recipe={recipe} key={recipe.id} />;
		});
	}

	render() {
		return (
			<>
				<h5 align='center'>{this.state.categoryName}</h5>

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
