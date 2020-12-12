import React from 'react';
import './Nav.css';
import logo from './todo512.png';

const Nav = () => {
	return(
		<div>
			<nav className="navbar navbar-light background-nav">
				<a className="navbar-brand font-weight-bold large-font-size" href="#">
					<img src={logo} heigth="64" width="64" alt=""  /> Gestionnaire de tâches
				</a>
			</nav>
		</div>
		)
}


export default Nav





