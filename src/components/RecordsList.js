import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class RecordsList extends Component {
	state = {
		redirect: false,
	};

	delete = () => {
		axios
			.get('http://localhost/reactjscrud/delete.php?id=' + this.props.obj.sId)
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
		const { fName, lName, email, sId } = this.props.obj;

		if (redirect) {
			return <Redirect to='/view' />;
		}
		return (
			<tr>
				<td>{fName}</td>
				<td>{lName}</td>
				<td>{email}</td>
				<td>
					<Link to={'/edit/' + sId} className='btn btn-primary'>
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
