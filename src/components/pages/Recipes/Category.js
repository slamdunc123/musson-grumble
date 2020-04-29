import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './recipes.scss';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

const Category = ({ category }) => {
	const [isBodyOpen, setIsBodyOpen] = useState('');
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		// return () => window.removeEventListener('resize', handleResize);
	}, []);

	const toggleBody = () => {
		setIsBodyOpen(!isBodyOpen);
	};

	const dataCleanse = () => {
		const categoryName = category.name.replace(/ /g, '');
		return categoryName.toLowerCase();
	};
	return (
		<>
			{/* {windowDimensions.width < 577 ? ( */}
			<div className={`category-block small ${dataCleanse()}`}>
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
			{/* ) : ( */}
			<div className={`category-block large ${dataCleanse()}`}>
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
