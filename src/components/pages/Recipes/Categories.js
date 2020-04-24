import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recipes.scss';
import domain from '../../../domain';
import Category from './Category';

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
						<Category category={category} />
					))}
				</div>
			)}
		</>
	);
};

export default Categories;
