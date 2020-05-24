import React, { useState, useEffect } from 'react';
import axios from 'axios';
import domain from '../../../domain';
import RecipesList from './RecipesList';
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
			setCategoryName(
				results.data[0] ? results.data[0].c_name : 'Empty category'
			);
			setIsLoading(false);
		};
		getCategoryRecipes();
	}, [props.match.params.id]);

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<h5 align='center'>{categoryName}</h5>
					<div className='recipes-container'>
						<div className='recipes-list'>
							<RecipesList renderedRecipes={recipes} />
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default CategoryRecipes;
