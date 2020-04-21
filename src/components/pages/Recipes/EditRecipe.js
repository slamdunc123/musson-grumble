import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import domain from '../../../domain';
import './recipes.scss';
export default class EditRecipe extends Component {
	state = {
		name: '',
		categoryId: '',
		description: '',
		ingredients: '',
		instructions: '',
		suggestions: '',
		categories: [],
		redirect: false,
	};

	componentDidMount() {
		axios
			.get(`${domain}/edit.php/?id=` + this.props.match.params.id)
			.then((response) => {
				console.log(response.data);
				this.setState({
					id: response.data.id,
					name: response.data.name,
					description: response.data.description,
					categoryId: response.data.category_id,
					ingredients: response.data.ingredients,
					instructions: response.data.instructions,
					suggestions: response.data.suggestions,
				});
			})
			.catch(function (error) {
				console.log(error);
			});

		axios
			.get(`${domain}/categories.php`)
			.then((response) => {
				console.log(response.data);
				this.setState({
					categories: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const {
			id,
			name,
			description,
			categoryId,
			ingredients,
			instructions,
			suggestions,
		} = this.state;

		const obj = {
			id: id,
			name,
			categoryId,
			description,
			ingredients,
			instructions,
			suggestions,
		};
		// console.log(obj);
		this.setState({
			obj,
		});
		axios
			.put(`${domain}/update.php?id=` + this.props.match.params.id, obj)
			.then(console.log('Updated'))
			.then((res) => {
				if (res.status === 200) {
					this.setState({ redirect: true });
				}
			})
			.catch((error) => console.log(error));
	};

	render() {
		const {
			name,
			description,
			categoryId,
			ingredients,
			instructions,
			suggestions,
			redirect,
		} = this.state;
		const { onChange, onSubmit } = this;

		console.log(this.state);
		if (redirect) {
			return <Redirect to='/recipes' />;
		}

		return (
			<div style={{ marginTop: 10 }}>
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
							{this.state.categories.map((category) => (
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
		);
	}
}
