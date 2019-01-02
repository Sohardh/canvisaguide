import React from 'react';
import classes from './Menu.css';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const menu = (props) => {
	return(
		<div className="con">
<MDBContainer>
<MDBRow>
<MDBCol md="10">
<span>CanVisaguide</span>
</MDBCol>
<MDBCol md="2">
<span onClick={props.clicked} className="containers">

  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</span>
</MDBCol>
</MDBRow>
</MDBContainer>
</div>

);
}
export default menu;