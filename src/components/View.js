import React, { Component } from 'react';
import axios from 'axios';
import RecordsList from './RecordsList';

export default class View extends Component {
	state = {
		recipes: [],
	};

	componentDidMount = () => {
		axios
			.get('http://localhost/musson-grumble-backend/list.php')
			.then((response) => {
				console.log(response);
				this.setState({
					recipes: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	recipeList() {
		const { recipes } = this.state;
		return recipes.map(function (object, i) {
			return <RecordsList obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<p>Welcome to View Component!!</p>
				<h3 align='center'>Recipe List</h3>
				<table className='table striped' style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Category</th>
							<th>Description</th>
							<th>Ingredients</th>
							<th>Instructions</th>
							<th>Suggestions</th>
							<th colSpan='2'>Action</th>
						</tr>
					</thead>
					<tbody>{this.recipeList()}</tbody>
				</table>
			</div>
		);
	}
}
