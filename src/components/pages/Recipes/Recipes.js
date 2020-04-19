import React, { Component } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';
import { Link } from 'react-router-dom';
import './recipes.scss';

export default class ReadRecipe extends Component {
	state = {
		recipes: [],
	};

	componentDidMount = () => {
		axios
			.get(
				'http://localhost/musson-grumble-backend/list.php?id=' +
					this.props.match.params.id
			)
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
			return <RecipeList obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3 align='center'>Recipe List</h3>
				<div className='container'>
					<div className='main-container-row'>
						<div className='main-container-block'>
							<div className='main-container-block-body'>
								<Link
									to={'/add'}
									className='nav-link btn btn-primary'
									type='button'
								>
									Add
								</Link>
							</div>
						</div>
					</div>

					<tbody>{this.recipeList()}</tbody>
				</div>
			</div>
		);
	}
}
