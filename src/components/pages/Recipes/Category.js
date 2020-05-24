import React from 'react';
import { Link } from 'react-router-dom';
import './categories.scss';

const Category = ({ category }) => {
	const changeText = () => {
		const categoryName = category.name.replace(/ /g, '');
		return categoryName.toLowerCase();
	};
	return (
		<div className={`category-block`}>
			<Link to={'/categories/' + category.id}>
				<div className='category-list-item'>
					<div
						className={`category-list-item-image ${changeText()}`}
					></div>
					<div className='category-list-item-name'>
						{category.name}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Category;
