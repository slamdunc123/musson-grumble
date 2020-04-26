import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import domain from '../../../domain';
import './recipes.scss';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

class RecordsList extends Component {
	state = {
		redirect: false,
		isBodyOpen: false,
	};

	delete = () => {
		axios
			.get(`${domain}/delete.php?id=` + this.props.recipe.id)
			// .then(console.log('Deleted'))
			.then((res) => {
				if (res.status === 200) {
					this.setState({ redirect: true });
				}
			})
			.catch((error) => console.log(error));
	};

	toggleBody = () => {
		this.setState({
			isBodyOpen: !this.state.isBodyOpen,
		});
	};

	render() {
		const { redirect, isBodyOpen } = this.state;
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
			<div className='container-fluid'>
				<div className='block'>
					<div>
						{/* <h6>Name</h6> */}
						<div className='block-body'>
							<p>{name}</p>
						</div>
					</div>

					<div onClick={this.toggleBody} align='center'>
						{!isBodyOpen ? <FiChevronDown /> : <FiChevronUp />}
					</div>
					{isBodyOpen && (
						<>
							<div>
								<h6>Category</h6>
								<div className='block-body'>
									<p>{c_name}</p>
								</div>
							</div>
							<div>
								<h6>Description</h6>
								<div className='block-body'>
									<p>{description}</p>
								</div>
							</div>
							<div>
								<h6>Ingredients</h6>
								<div className='block-body'>
									<p>{ingredients}</p>
								</div>
							</div>
							<div>
								<h6>Instructions</h6>
								<div className='block-body'>
									<p>{instructions}</p>
								</div>
							</div>
							<div>
								<h6>Suggestions</h6>
								<div className='block-body'>
									<p>{suggestions}</p>
								</div>
							</div>
							<div className='block-body'>
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
						</>
					)}
				</div>
			</div>
		);
	}
}

export default RecordsList;
