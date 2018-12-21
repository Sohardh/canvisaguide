//The three cards visible on home page


import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './PicCards.css';
import hs3o from '../../Assets/tower.jpg';
import Spouse from '../../Assets/Spouse.jpg';
import img from '../../Assets/vertical.jpg';
import Fade from 'react-reveal/Fade';
import Parents from '../../Assets/Parents.jpg';
import Nominee from '../../Assets/Nominee.jpg';
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
    let cards=this.state.cards.map((card,id)=> {
      return(
        <MDBCol md="4" key={id}>
           <div className='cards' onClick={this.props.Clicked} > {/*On clicking any card you will be redirected to their component page. This routing is done in the home page*/}
            <MDBView waves>
              <img
                src={card.img}
                className="img-fluid card"
                alt=""
              /> 
              <MDBMask className="flex-center" overlay="teal-slight">
                 <h4 className="white-text text" ><span  className="textMargin" >{card.caption}  </span></h4>
              </MDBMask>
            </MDBView>
          </div>
          </MDBCol>
          

        )
    });
    return (
      <Fade bottom appear>
      <MDBContainer className="mt-5">
        <MDBRow className="mt-4">
        {cards}
        </MDBRow>
      </MDBContainer>
       
      </Fade>

    );
  }
}

export default PicCards;