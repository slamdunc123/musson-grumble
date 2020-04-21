import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './recipes.scss';
import domain from '../../../domain';

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCategories = async () => {
			// setIsLoading(true);
			const results = await axios.get(`${domain}/categories.php`);
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
				<div className='container'>
					{categories.map((category) => (
						<div className='block' key={category.id}>
							<div className='block-header'>
								<h6>
									{category.name}
									<span> - {category.sub_title}</span>
								</h6>
							</div>
							<div className='block-body'>
								<p className='block-text'>{category.description}</p>
								<Link
									to={'/recipes/' + category.id}
									className='btn btn-outline-info btn-sm'
								>
									View
								</Link>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Categories;
