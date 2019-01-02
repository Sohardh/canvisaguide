import React from 'react';
import classes from './Toolbar.css';
import {NavLink} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Toolbar extends React.Component  {
	 state = {
      nav:[
    {link:'Home',linkedto:'/'},
    {link:'About',linkedto:'about'},
    {link:'Services',linkedto:'services'},
    {link:'Study',linkedto:'study'},
    {link:'USA Visa',linkedto:'usa'},
    {link:'Visit',linkedto:'visit'},
    {link:'Immigration',linkedto:'immigration'},
    ]
    };
	render() {
		let navlinks=this.state.nav.map((linked,id)=>{
      return(
        
                <NavLink to={linked.linkedto} ><span className="links"><strong>{linked.link}</strong></span><span className='distinct'>|</span></NavLink>
       );
    })
	return(
		<div>
	
		
	   <div className="link">
	<span className="logo"><strong>CanVisaGuide</strong></span>
	
		{navlinks}
		 <NavLink to="weather" ><span className='links'><strong>Weather</strong></span><span className='distinct'>|</span></NavLink>
		 <a href="contact" ><span className='links'><strong> Contact</strong></span><span className='distinct'>|</span></a>
	
		</div>
	

		</div>);
}
}
export default Toolbar;