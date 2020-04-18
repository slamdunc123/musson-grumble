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
			return <Redirect to='/view' />;
		}
		return (
			<tr>
				<td>{name}</td>
				<td>{c_name}</td>
				<td>{description}</td>
				<td>{ingredients}</td>
				<td>{instructions}</td>
				<td>{suggestions}</td>
				<td>
					<Link to={'/edit/' + id} className='btn btn-primary'>
						Edit
					</Link>
				</td>
				<td>
					<button onClick={this.delete} className='btn btn-danger'>
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default RecordsList;
