import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Insert extends Component {
	state = {
		first_name: '',
		last_name: '',
		email: '',
		redirect: false,
	};

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
		const { first_name, last_name, email } = this.state;

		const obj = {
			first_name,
			last_name,
			email,
		};
		console.log(obj);
		axios
			.post('http://localhost/reactjscrud/insert.php', obj)
			// .then((res) => console.log(res.data))
			.then((res) => {
				if (res.status === 201) {
					this.setState({
						redirect: true,
					}); // after signing up, set the state to true. This will trigger a re-render
				}
			});

		this.setState({
			first_name: '',
			last_name: '',
			email: '',
		});
	};

	render() {
		const { first_name, last_name, email, redirect } = this.state;
		const {
			onChangeFirstName,
			onChangeLastName,
			onChangeEmail,
			onSubmit,
		} = this;

		if (redirect) {
			return <Redirect to='/view' />;
		}

		return (
			<div style={{ marginTop: 10 }}>
				<h3>Add New User</h3>
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
							value='Register User'
							className='btn btn-primary'
						/>
					</div>
				</form>
			</div>
		);
	}
}
