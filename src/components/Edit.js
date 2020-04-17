import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Edit extends Component {
	state = {
		id: '',
		first_name: '',
		last_name: '',
		email: '',
		redirect: false,
	};

	componentDidMount() {
		axios
			.get(
				'http://localhost/reactjscrud/edit.php/?id=' +
					this.props.match.params.id
			)
			.then((response) => {
				// console.log(response.data);
				this.setState({
					id: response.data.sId,
					first_name: response.data.fName,
					last_name: response.data.lName,
					email: response.data.email,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onChangeFirstName = (e) => {
		this.setState({
			first_name: e.target.value,
		});
	};

	onChangeLastName = (e) => {
		this.setState({
			last_name: e.target.value,
		});
	};

	onChangeEmail = (e) => {
		this.setState({
			email: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { id, first_name, last_name, email } = this.state;

		const obj = {
			id: id,
			first_name: first_name,
			last_name: last_name,
			email: email,
		};
		// console.log(obj);
		this.setState({
			obj,
		});
		axios
			.put(
				'http://localhost/reactjscrud/update.php?id=' +
					this.props.match.params.id,
				obj
			)
			.then(console.log('Updated'))
			.then((res) => {
				if (res.status === 200) {
					this.setState({ redirect: true });
				}
			})
			.catch((error) => console.log(error));
	};

	render() {
		const { first_name, last_name, email, redirect } = this.state;
		const {
			onChangeFirstName,
			onChangeLastName,
			onChangeEmail,
			onSubmit,
		} = this;

		console.log(this.state);
		if (redirect) {
			return <Redirect to='/view' />;
		}

		return (
			<div style={{ marginTop: 10 }}>
				<h3>Edit User</h3>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label>First Name: </label>
						<input
							type='text'
							className='form-control'
							value={first_name}
							onChange={onChangeFirstName}
						/>
					</div>
					<div className='form-group'>
						<label>Last Name: </label>
						<input
							type='text'
							className='form-control'
							value={last_name}
							onChange={onChangeLastName}
						/>
					</div>
					<div className='form-group'>
						<label>Email: </label>
						<input
							type='text'
							className='form-control'
							value={email}
							onChange={onChangeEmail}
						/>
					</div>
					<div className='form-group'>
						<input
							type='submit'
							value='Update user'
							className='btn btn-primary'
						/>
					</div>
				</form>
			</div>
		);
	}
}
