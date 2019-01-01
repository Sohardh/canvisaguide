//The three cards visible on home page


import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './PicCards.css';
import hs3o from '../../Assets/tower.jpg';
import Spouse from '../../Assets/spouse1.png';
import img from '../../Assets/vertical.jpg';
import Fade from 'react-reveal/Fade';
import Parents from '../../Assets/parents1.png';
import Nominee from '../../Assets/Nominee1.png';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from '../../Container/About/Aboutus/About';

class PicCards extends React.Component {
  state={
    cards:[
    {img:Spouse,caption:" Family or spouse Sponsorship ",afterClick:"SpouseClicked",index:"id01"},
    {img:Nominee,caption:" Provincial Nominee program ",afterClick:"SpouseClicked",index:"id02"},
    {img:Parents,caption:" Parents and Grandparents sponsorship ",afterClick:"ParentsClicked",index:"id03"},

    ]
  }
 

  render() {
    return (
      <Fade bottom appear>
      <MDBContainer className="mt-5">
        <MDBRow className="mt-4">
         <MDBCol md="4" >
           <div className='cards' onClick={this.props.SpouseClicked} > {/*On clicking any card you will be redirected to their component page. This routing is done in the home page*/}
            <MDBView waves>
              <img
                src={Spouse}
                className="img-fluid card"
                alt=""
              /> 
             
            </MDBView>
          </div>
          </MDBCol>
           <MDBCol md="4">
           <div className='cards' onClick={this.props.NomineeClicked} > {/*On clicking any card you will be redirected to their component page. This routing is done in the home page*/}
            <MDBView waves>
              <img
                src={Nominee}
                className="img-fluid card"
                alt=""
              /> 
              
            </MDBView>
          </div>
          </MDBCol>
           <MDBCol md="4" >
           <div className='cards' onClick={this.props.ParentsClicked} > {/*On clicking any card you will be redirected to their component page. This routing is done in the home page*/}
            <MDBView waves>
              <img
                src={Parents}
                className="img-fluid card"
                alt=""
              /> 
              
            </MDBView>
          </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
       
      </Fade>

    );
  }
}

export default PicCards;