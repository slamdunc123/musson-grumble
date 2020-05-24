import React from 'react';
import { Link } from 'react-router-dom';

const RecipesList = ({ renderedRecipes }) => {
	return renderedRecipes.map((recipe) => (
		<div key={recipe.id}>
			<Link to={'/recipes/' + recipe.id}>
				<div className='recipe-list-item'>
					<div className='recipe-list-item-image'>
						<img
							src='https://via.placeholder.com/75x50'
							alt={recipe.name}
						/>
					</div>
					<div className='recipe-list-item-name'>{recipe.name}</div>
				</div>
			</Link>
		</div>
	));
};

export default RecipesList;
