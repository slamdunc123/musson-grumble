import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import domain from '../../../domain';
import './recipes.scss';
import LoadingSpinner from '../../partials/LoadingSpinner';

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

	const {
		id,
		name,
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
					<div className='block-header'>
						<h6>Name</h6>
						<div className='block-body'>
							<p>{name}</p>
						</div>
					</div>
					<div className='block-header'>
						<h6>Category</h6>
						<div className='block-body'>
							<p>{c_name}</p>
						</div>
					</div>
					<div className='block-header'>
						<h6>Description</h6>
						<div className='block-body'>
							<p>{description}</p>
						</div>
					</div>
					<div className='block-header'>
						<h6>Ingredients</h6>
						<div className='block-body'>
							<p>{ingredients}</p>
						</div>
					</div>
					<div className='block-header'>
						<h6>Instructions</h6>
						<div className='block-body'>
							<p>{instructions}</p>
						</div>
					</div>
					<div className='block-header'>
						<h6>Suggestions</h6>
						<div className='block-body'>
							<p>{suggestions}</p>
						</div>
					</div>
					{/* <div className='block-body'>
						<Link
							to={'/edit/' + id}
							type='button'
							className='btn btn-info btn-sm mb-2 mr-1'
						>
							Edit
						</Link>

						<button
							onClick={deleteRecipe}
							type='button'
							className='btn btn-info btn-sm mb-2 mr-1'
						>
							Delete
						</button>
					</div> */}
				</>
			)}
		</>
	);
};

export default Recipe;
