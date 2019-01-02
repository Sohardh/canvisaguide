import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const drawer = (props) => {
	let attachedClasses = ["SideDrawer" , "Close"];
	if(props.open) {
		attachedClasses = ["SideDrawer" , "Open"];
	}

	return (
		<Aux>
		<Backdrop show={props.open} clicked={props.close}/>
			<div className={attachedClasses.join(' ')}>
				<Toolbar />
		</div>
		</Aux>);
}

export default drawer;