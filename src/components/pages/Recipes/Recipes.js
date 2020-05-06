import React, { useState, useEffect } from 'react';
import axios from 'axios';
import domain from '../../../domain';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../partials/LoadingSpinner';
import Paginate from '../../partials/Paginate';
import './recipes.scss';

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [activePage, setActivePage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const [pageRange, setPageRange] = useState(5);

	useEffect(() => {
		const getRecipes = async () => {
			const results = await axios.get(`${domain}/recipes.php`);
			setRecipes(results.data);
			setIsLoading(false);
		};
		getRecipes();
	}, []);

	const recipeList = (renderedRecipes) => {
		return renderedRecipes.map((recipe) => (
			<div className='recipe-link' key={recipe.id}>
				<Link to={'/recipes/' + recipe.id}>{recipe.name}</Link>
			</div>
		));
	};

	const handlePageChange = (pageNumber) => {
		console.log(`active page is ${pageNumber}`);
		setActivePage(Number(pageNumber));
	};

	const indexOfLastRecipe = activePage * itemsPerPage;
	const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
	const renderedRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
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
					<div className='recipes-container'>{recipeList(renderedRecipes)}</div>
					<div className='pagination-container'>
						<Paginate
							activePage={activePage}
							itemsCountPerPage={itemsPerPage}
							totalItemsCount={recipes.length}
							pageRangeDisplayed={pageRange}
							handlePageChange={handlePageChange}
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
};

export default Recipes;
