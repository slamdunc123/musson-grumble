import React from 'react';
import { Link } from 'react-router-dom';
import './recipes.scss';

const Category = ({ category }) => {
	const changeText = () => {
		const categoryName = category.name.replace(/ /g, '');
		return categoryName.toLowerCase();
	};
	return (
		<>
			<div className={`category-block small ${changeText()}`}>
				<div className='block-header'>
					<h6>
						{category.name}
						<span> - {category.sub_title}</span>
					</h6>
				</div>

				<div className='block-body'>
					{/* <p className='block-text'>{category.description}</p> */}

					<Link
						to={'/categories/' + category.id}
						className='btn btn-outline-light btn-sm'
					>
						View
					</Link>
				</div>
			</div>

			<div className={`category-block large ${changeText()}`}>
				<div className='block-header'>
					<h6>
						{category.name}
						<span> - {category.sub_title}</span>
					</h6>
				</div>
				<div className='block-body'>
					{/* <p className='block-text'>{category.description}</p> */}

					<Link
						to={'/categories/' + category.id}
						className='btn btn-outline-light btn-sm'
					>
						View
					</Link>
				</div>
			</div>
			{/* )} */}
		</>
	);
};

export default Category;
