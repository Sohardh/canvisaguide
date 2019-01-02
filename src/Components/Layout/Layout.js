import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Dropdown from'../Navigation/Dropdown/Dropdown';
import Drawer from '../Navigation/Drawer/Drawer';


class Layout extends Component {
	state={
		showSideDrawer:false,
	}
		closeSideDrawerHandler = () => { 
				this.setState({showSideDrawer:false});
		}

		OpenSideDrawerHandler = () => {
			this.setState((prevState) => 
				{return {showSideDrawer:true}});
		}

	render(){
		return(
	<Aux>
	<Drawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>
	<Dropdown showDrawer={this.OpenSideDrawerHandler} />
	<main>
	<br/><br/>
		{this.props.children}
	</main>
	</Aux>);
	}
}

export default Layout;

	