import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recipes.scss';
import domain from '../../../domain';
import Category from './Category';
import LoadingSpinner from '../../partials/LoadingSpinner';

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
		};
		getCategories();
	}, []);

	return (
		<>
			<div className='breadcrumbs'>home / categories</div>
			{isLoading ? (
				<div>
					<LoadingSpinner />
				</div>
			) : (
				<div className='category-container'>
					{categories.map((category) => (
						<Category category={category} key={category.id} />
					))}
				</div>
			)}
		</>
	);
};

export default Categories;
