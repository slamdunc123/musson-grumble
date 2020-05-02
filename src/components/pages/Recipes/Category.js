import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './recipes.scss';

const Category = ({ category }) => {
	const [isBodyOpen, setIsBodyOpen] = useState('');

	const toggleBody = () => {
		setIsBodyOpen(!isBodyOpen);
	};

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
				{isBodyOpen && (
					<div className='block-body'>
						<p className='block-text'>{category.description}</p>

						<Link
							to={'/categories/' + category.id}
							className='btn btn-outline-light btn-sm'
						>
							View
						</Link>
					</div>
				)}
				<div onClick={toggleBody} align='center'>
					{!isBodyOpen ? <FiChevronDown /> : <FiChevronUp />}
				</div>
			</div>
			{/* ) : ( */}
			<div className={`category-block large ${changeText()}`}>
				<div className='block-header'>
					<h6>
						{category.name}
						<span> - {category.sub_title}</span>
					</h6>
				</div>
				<div className='block-body'>
					<p className='block-text'>{category.description}</p>

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
