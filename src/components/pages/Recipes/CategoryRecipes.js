import React, { useState, useEffect } from 'react';
import axios from 'axios';
import domain from '../../../domain';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../partials/LoadingSpinner';
import './recipes.scss';

const CategoryRecipes = (props) => {
	const [recipes, setRecipes] = useState([]);
	const [categoryName, setCategoryName] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCategoryRecipes = async () => {
			const results = await axios.get(
				`${domain}/categoryRecipes.php?id=` + props.match.params.id
			);
			console.log(results.data);
			setRecipes(results.data);
			setCategoryName(results.data[0].c_name);
			setIsLoading(false);
		};
		getCategoryRecipes();
	}, [props.match.params.id]);

	const recipeList = () => {
		if (recipes.length > 0) {
			return recipes.map((recipe) => (
				<div className='recipe-link' key={recipe.id}>
					<Link to={'/recipes/' + recipe.id}>{recipe.name}</Link>
				</div>
			));
		}
		return 'No recipes';
	};

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<h5 align='center'>{categoryName}</h5>

					<Link
						to={'/add/' + props.match.params.id}
						className='nav-link btn btn-outline-info btn-sm'
						type='button'
					>
						Add
					</Link>
					<div>{recipeList()}</div>
				</>
			)}
		</>
	);
};

export default CategoryRecipes;
