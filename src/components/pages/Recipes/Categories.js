import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCategories = async () => {
			// setIsLoading(true);
			const results = await axios.get(
				'http://localhost/musson-grumble-backend/categories.php'
			);
			setCategories(results.data);
			setIsLoading(false);
			console.log(results.data);
			console.log(isLoading);
		};
		getCategories();
	}, []);

	return (
		<>
			{isLoading ? (
				<div>No data</div>
			) : (
				categories.map((category) => (
					<div className='card mt-2' key={category.id}>
						<h5 className='card-header'>{category.name}</h5>
						<div className='card-body'>
							<p className='card-text'>
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							<Link
								to={'/recipes/' + category.id}
								className='btn btn-outline-info btn-sm'
							>
								View
							</Link>
						</div>
					</div>
				))
			)}
		</>
	);
};

export default Categories;
