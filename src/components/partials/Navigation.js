import React, { useState } from 'react';

// styles
import './Navigation.scss';

// routing
import { NavLink } from 'react-router-dom';

// partials
import Brand from '../partials/Brand';

const Navigation = () => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
	const [burgerIcon, setBurgerIcon] = useState(false);

	// toggle burger menu when clicked
	const toggleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
		setBurgerIcon(!burgerIcon);
	};

	// close burger menu when menu link is clicked
	const closeBurgerMenu = () => {
		if (isBurgerMenuOpen === true) {
			toggleBurgerMenu();
		}
	};

	return (
		<div>
			{/* navigation menu */}
			<div className='nav-container'>
				<Brand />
				<div className='nav-menu'>
					<NavLink className='nav-link' exact to='/'>
						Home
					</NavLink>
					<NavLink className='nav-link' exact to='/recipes'>
						Recipes
					</NavLink>
					<NavLink className='nav-link' exact to='/about'>
						About
					</NavLink>
					<NavLink className='nav-link' exact to='/contact'>
						Contact
					</NavLink>
				</div>
				<div className={`nav-burger ${burgerIcon ? 'opened' : ''}`}>
					{burgerIcon ? (
						<i className={'fas fa-times'} onClick={toggleBurgerMenu}></i>
					) : (
						<i className={'fas fa-bars'} onClick={toggleBurgerMenu}></i>
					)}
				</div>

				{/* navigation mobile menu  */}
			</div>
			<div className={`nav-mobile-menu ${isBurgerMenuOpen ? 'opened' : ''}`}>
				<NavLink
					className='nav-link'
					onClick={(e) => {
						closeBurgerMenu(e);
					}}
					exact
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					className='nav-link'
					onClick={(e) => {
						closeBurgerMenu(e);
					}}
					exact
					to='/about'
				>
					About
				</NavLink>
				<NavLink
					className='nav-link'
					onClick={(e) => {
						closeBurgerMenu(e);
					}}
					exact
					to='/products'
				>
					Products
				</NavLink>
				<NavLink
					className='nav-link'
					onClick={(e) => {
						closeBurgerMenu(e);
					}}
					exact
					to='/contact'
				>
					Contact
				</NavLink>
			</div>
		</div>
	);
};

export default Navigation;
