import React, { Component } from 'react';
import axios from 'axios';
import domain from '../../../domain';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../partials/LoadingSpinner';
import Paginate from '../../partials/Paginate';
import './recipes.scss';

export default class Recipes extends Component {
	state = {
		recipes: [],
		isLoading: true,
		activePage: 1,
		itemsPerPage: 5,
		pageRange: 5,
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

	recipeList(renderedRecipes) {
		return renderedRecipes.map((recipe) => (
			<div key={recipe.id}>{recipe.name}</div>
		));
	}

	handlePageChange = (pageNumber) => {
		console.log(`active page is ${pageNumber}`);
		this.setState({ activePage: Number(pageNumber) });
	};

	render() {
		const { isLoading } = this.state;
		const indexOfLastRecipe = this.state.activePage * this.state.itemsPerPage;
		const indexOfFirstRecipe = indexOfLastRecipe - this.state.itemsPerPage;
		const renderedRecipes = this.state.recipes.slice(
			indexOfFirstRecipe,
			indexOfLastRecipe
		);
		console.log(renderedRecipes);
		return (
			<>
				<h5 align='center'>Recipes</h5>

				{isLoading ? (
					<div>
						<LoadingSpinner />
					</div>
				) : (
					<>
						<Link
							to={'/add/' + this.props.match.params.id}
							className='nav-link btn btn-outline-info btn-sm'
							type='button'
						>
							Add
						</Link>
						<div className='recipes-container'>
							{this.recipeList(renderedRecipes)}
						</div>
						<div className='pagination-container'>
							<Paginate
								activePage={this.state.activePage}
								itemsCountPerPage={this.state.itemsPerPage}
								totalItemsCount={this.state.recipes.length}
								pageRangeDisplayed={this.state.pageRage}
								handlePageChange={this.handlePageChange}
								prevPageText='<'
								nextPageText='>'
								firstPageText='<<'
								lastPageText='>>'
							></Paginate>
						</div>
					</>
				)}
			</>
		);
	}
}
