import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './PicCards.css';
import hs3o from '../../Assets/tower.jpg';
import img from '../../Assets/vertical.jpg';

class PicCards extends React.Component {
  state={
    cards:[
    {img:hs3o,caption:"Visit Canada"},
    {img:img,caption:"Visit Canada"},
    {img:hs3o,caption:"Visit Canada"},

    ]
  }

  render() {
    let cards=this.state.cards.map((card,id)=> {
      return(
        <MDBCol md="4" >
           <div className='cards'>
            <MDBView waves>
           
              <img
                src={card.img}
                className="img-fluid card"
                alt=""
              /> 
              <MDBMask className="flex-center" overlay="teal-slight">
                <h4 className="white-text text">{card.caption}</h4>
              </MDBMask>
            </MDBView>
            </div>
          </MDBCol>
        )
    })
    return (
      <MDBContainer className="mt-5">
        <MDBRow className="mt-4">
        {cards}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default PicCards;