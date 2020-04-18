import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class RecordsList extends Component {
	state = {
		redirect: false,
	};

	delete = () => {
		axios
			.get(
				'http://localhost/musson-grumble-backend/delete.php?id=' +
					this.props.obj.id
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
		} = this.props.obj;

		if (redirect) {
			return <Redirect to='/recipes' />;
		}
		return (
			<div class='main-container-row'>
				<div class='main-container-block'>
					<div class='main-container-block-head'>Name</div>
					<div class='main-container-block-body'>{name}</div>
				</div>
				<div class='main-container-block'>
					<div class='main-container-block-head'>Category</div>
					<div class='main-container-block-body'>{c_name}</div>
				</div>
				<div class='main-container-block'>
					<div class='main-container-block-head'>Description</div>
					<div class='main-container-block-body'>{description}</div>
				</div>
				<div class='main-container-block'>
					<div class='main-container-block-head'>Ingredients</div>
					<div class='main-container-block-body'>{ingredients}</div>
				</div>
				<div class='main-container-block'>
					<div class='main-container-block-head'>Instructions</div>
					<div class='main-container-block-body'>{instructions}</div>
				</div>
				<div class='main-container-block'>
					<div class='main-container-block-head'>Suggestions</div>
					<div class='main-container-block-body'>{suggestions}</div>
				</div>
				<div class='main-container-block'>
					<div class='main-container-block-body'>
						<Link to={'/edit/' + id} className='btn btn-primary'>
							Edit
						</Link>
						<button onClick={this.delete} className='btn btn-danger'>
							Delete
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default RecordsList;
