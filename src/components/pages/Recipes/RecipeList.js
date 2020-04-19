import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import './recipes.scss';

class RecordsList extends Component {
	state = {
		redirect: false,
	};

	delete = () => {
		axios
			.get(
				'http://localhost/musson-grumble-backend/delete.php?id=' +
					this.props.recipe.id
			)
			.then(console.log('Deleted'))
			.then((res) => {
				if (res.status === 204) {
					this.setState({ redirect: true });
				}
			})
			.catch((error) => console.log(error));
	};

	render() {
		const { redirect } = this.state;
		const {
			id,
			name,
			c_name,
			description,
			ingredients,
			instructions,
			suggestions,
		} = this.props.recipe;

		if (redirect) {
			return <Redirect to='/recipes' />;
		}
		return (
			<div className='container'>
				<div className='card mt-2'>
					<div className='card-body'>
						<div>
							<h6>Name</h6>
							<p>{name}</p>
						</div>

						<div>
							<h6>Category</h6>
							<p>{c_name}</p>
						</div>
						<div>
							<h6>Description</h6>
							<p>{description}</p>
						</div>
						<div>
							<h6>Ingredients</h6>
							<p>{ingredients}</p>
						</div>
						<div>
							<h6>Instructions</h6>
							<p>{instructions}</p>
						</div>
						<div>
							<h6>Suggestions</h6>
							<p>{suggestions}</p>
						</div>
						<div>
							<Link
								to={'/edit/' + id}
								type='button'
								className='btn btn-info btn-sm mb-2 mr-1'
							>
								Edit
							</Link>

							<button
								onClick={this.delete}
								type='button'
								className='btn btn-info btn-sm mb-2 mr-1'
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RecordsList;
