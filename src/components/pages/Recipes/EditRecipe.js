import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import domain from '../../../domain';
import './recipes.scss';

const EditRecipe = (props) => {
	const [categories, setCategories] = useState([]);
	const [redirect, setRedirect] = useState(false);
	const [obj, setObj] = useState({
		id: '',
		name: '',
		categoryId: '',
		description: '',
		ingredients: '',
		instructions: '',
		suggestions: '',
	});

	useEffect(() => {
		const editRecipe = async () => {
			const results = await axios.get(
				`${domain}/editRecipe.php/?id=` + props.match.params.id
			);
			console.log(results.data);
			setObj({
				id: results.data.id,
				name: results.data.name,
				description: results.data.description,
				categoryId: results.data.category_id,
				ingredients: results.data.ingredients,
				instructions: results.data.instructions,
				suggestions: results.data.suggestions,
			});
		};
		editRecipe();
	}, []);

	useEffect(() => {
		const getCategories = async () => {
			const results = await axios.get(`${domain}/categories.php`);
			setCategories(results.data);
			// setIsLoading(false);
			console.log(results.data);
		};
		getCategories();
	}, []);

	const onChange = (e) => {
		setObj({ ...obj, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		axios
			.put(`${domain}/updateRecipe.php?id=` + props.match.params.id, obj)
			.then(console.log('Updated'))
			.then((res) => {
				if (res.status === 200) {
					setRedirect(true);
				}
			})
			.catch((error) => console.log(error));

		setObj({
			id,
			name,
			categoryId,
			description,
			ingredients,
			instructions,
			suggestions,
		});
		// console.log(obj);
	};

	const {
		id,
		name,
		description,
		categoryId,
		ingredients,
		instructions,
		suggestions,
	} = obj;

	console.log(obj);
	if (redirect) {
		return <Redirect to='/recipes' />;
	}

	return (
		<div className='container'>
			<div className='block'>
				<h3>Edit Recipe</h3>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label>Name: </label>
						<input
							placeholder='Description'
							name='name'
							type='text'
							className='form-control'
							value={name}
							onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<label>Category</label>
						<br />
						<select
							value={categoryId}
							className='form-control'
							name='categoryId'
							onChange={onChange}
						>
							{categories.map((category) => (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							))}
						</select>
					</div>
					<div className='form-group'>
						<label>Description: </label>
						<textarea
							rows='5'
							cols='5'
							placeholder='Description'
							name='description'
							className='form-control'
							value={description}
							onChange={onChange}
						></textarea>
					</div>
					<div className='form-group'>
						<label>Ingredients: </label>
						<textarea
							rows='5'
							cols='5'
							placeholder='Ingredients'
							name='ingredients'
							className='form-control'
							value={ingredients}
							onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<label>Instructions: </label>
						<textarea
							rows='5'
							cols='5'
							placeholder='Instructions'
							name='instructions'
							className='form-control'
							value={instructions}
							onChange={onChange}
						></textarea>
					</div>
					<div className='form-group'>
						<label>Suggestions: </label>
						<textarea
							rows='5'
							cols='5'
							placeholder='Suggestions'
							name='suggestions'
							className='form-control'
							value={suggestions}
							onChange={onChange}
						></textarea>
					</div>
					<div className='form-group'>
						<input
							type='submit'
							value='Update Recipe'
							className='btn btn-info btn-sm'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditRecipe;
