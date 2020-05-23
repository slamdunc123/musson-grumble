import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import domain from '../../../domain';
import './recipes.scss';
import LoadingSpinner from '../../partials/LoadingSpinner';
import findAndRepaceText from '../../../utils/findAndReplaceText';

const Recipe = (props) => {
	const [redirect, setRedirect] = useState(false);
	const [recipe, setRecipe] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getRecipe = async () => {
			const results = await axios.get(
				`${domain}/recipe.php?id=` + props.match.params.id
			);
			setRecipe(results.data[0]);
			setIsLoading(false);
		};
		getRecipe();
	}, [props.match.params.id]);

	const deleteRecipe = async () => {
		const results = await axios.get(
			`${domain}/deleteRecipe.php?id=` + recipe.id
		);
		if (results.status === 200) {
			setRedirect(true);
		}
	};

	console.log('recipe =', recipe);
	const {
		id,
		name,
		sub_title,
		c_name,
		description,
		ingredients,
		instructions,
		suggestions,
	} = recipe;

	if (redirect) {
		return <Redirect to='/recipes' />;
	}
	return (
		<>
			{isLoading ? (
				<div>
					<LoadingSpinner />
				</div>
			) : (
				<>
					<div className='recipe-container'>
						<div className='recipe-header'>
							<div className='recipe-image'></div>
							<div className='recipe-field'>
								<h6>Name</h6>
								<p>{name}</p>
							</div>
							<div className='recipe-field'>
								<h6>Sub Title</h6>
								<p>{sub_title}</p>
							</div>
							<div className='recipe-field'>
								<h6>Category</h6>
								<p>{c_name}</p>
							</div>
						</div>
						<div className='recipe-body'>
							<div className='recipe-field'>
								<h6>Description</h6>
								<p>{description}</p>
							</div>
							<div className='recipe-field'>
								<h6>Ingredients</h6>
								<p>{findAndRepaceText(ingredients)}</p>
							</div>
							<div className='recipe-field'>
								<h6>Instructions</h6>
								<p>{findAndRepaceText(instructions)}</p>
							</div>
							<div className='recipe-field'>
								<h6>Suggestions</h6>
								<p>{suggestions}</p>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Recipe;
