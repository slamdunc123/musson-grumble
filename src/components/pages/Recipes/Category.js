import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Category = ({ category }) => {
	const [isBodyOpen, setIsBodyOpen] = useState('');

	const toggleBody = () => {
		setIsBodyOpen(!isBodyOpen);
	};

	return (
		<div className='block' key={category.id}>
			<div className='block-header'>
				<h6>
					{category.name}
					<span> - {category.sub_title}</span>
				</h6>
			</div>
			<div onClick={toggleBody} align='center'>
				{!isBodyOpen ? <FiChevronDown /> : <FiChevronUp />}
			</div>
			{isBodyOpen && (
				<div className='block-body'>
					<p className='block-text'>{category.description}</p>

					<Link
						to={'/recipes/' + category.id}
						className='btn btn-outline-info btn-sm'
					>
						View
					</Link>
				</div>
			)}
		</div>
	);
};

export default Category;
