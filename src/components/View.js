import React, { Component } from 'react';
import axios from 'axios';
import RecordsList from './RecordsList';

export default class View extends Component {
	state = {
		students: [],
	};

	componentDidMount = () => {
		axios
			.get('http://localhost/reactjscrud/list.php')
			.then((response) => {
				// console.log(response);
				this.setState({
					students: response.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	userList() {
		const { students } = this.state;
		return students.map(function (object, i) {
			return <RecordsList obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<p>Welcome to View Component!!</p>
				<h3 align='center'>Users List</h3>
				<table className='table striped' style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th colSpan='2'>Action</th>
						</tr>
					</thead>
					<tbody>{this.userList()}</tbody>
				</table>
			</div>
		);
	}
}
