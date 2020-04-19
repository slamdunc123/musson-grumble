import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class AddRecipe extends Component {
	state = {
		name: '',
		categoryId: '1',
		description: '',
		ingredients: '',
		instructions: '',
		suggestions: '',
		categories: [],
		redirect: false,
	};

	componentDidMount = () => {
		axios
			.get('http://localhost/musson-grumble-backend/categories.php')
			.then((response) => {
				console.log(response.data);
				this.setState({
					categories: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		const {
			name,
			categoryId,
			description,
			ingredients,
			instructions,
			suggestions,
		} = this.state;

		const obj = {
			name,
			categoryId,
			description,
			ingredients,
			instructions,
			suggestions,
		};
		console.log(obj);
		axios
			.post('http://localhost/musson-grumble-backend/insert.php', obj)
			// .then((res) => console.log(res.data))
			.then((res) => {
				if (res.status === 201) {
					this.setState({
						redirect: true,
					}); // after signing up, set the state to true. This will trigger a re-render
				}
			});

		this.setState({
			name: '',
			categoryId: '',
			description: '',
			ingredients: '',
			instructions: '',
			suggestions: '',
		});
	};

	render() {
		const {
			name,
			categoryId,
			description,
			ingredients,
			instructions,
			suggestions,
			redirect,
		} = this.state;
		const { onChange, onSubmit } = this;

		if (redirect) {
			return <Redirect to='/recipes' />;
		}

		return (
			<div style={{ marginTop: 10 }}>
				<h3>Add New Recipe</h3>
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
						<input type='submit' value='Save' className='btn btn-info btn-sm' />
					</div>
				</form>
			</div>
		);
	}
}
