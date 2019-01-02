import React from 'react';
import Menu from'./Menu/Menu';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Dropdown.css';

const dropdown = (props) => {

	return(
		<div className="Dropdown">

		<div className="DesktopOnly">
		
		<Menu clicked={props.showDrawer} />
		</div>
		<nav className="MobileOnly">
			<Toolbar />
		</nav>
		</div>);
}
export default dropdown;