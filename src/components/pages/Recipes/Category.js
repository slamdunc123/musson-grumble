import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './recipes.scss';

const Category = ({ category }) => {
	const [isBodyOpen, setIsBodyOpen] = useState('');

	const toggleBody = () => {
		setIsBodyOpen(!isBodyOpen);
	};

	const dataCleanse = () => {
		const categoryName = category.name.replace(/ /g, '');
		return categoryName.toLowerCase();
	};
	return (
		<div className={`block animate ${dataCleanse()}`}>
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
						to={'/recipes/' + category.id}
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
	);
};

export default Category;
