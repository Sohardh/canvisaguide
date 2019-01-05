import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import hs1 from '../../../Assets/city.jpg';
import nigara from '../../../Assets/nigara2.jpg'
import canada2 from '../../../Assets/hs4.jpg';
import canada1 from '../../../Assets/canada1.jpg';
import canada3 from '../../../Assets/canada3.jpg';
import Fade from 'react-reveal/Fade';
import './About.css'
class About extends Component {
 
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}

	render() {
   
		return (
			 <MDBCard className="my-10 px-10 pb-10">
        <p className="head"><strong>About Canada</strong></p>
      <MDBCardBody>
        <MDBRow>
        
          <MDBCol >
          <div className="w-responsive text-center mx-auto p-3 mt-2">
<Fade bottom appear>
            <MDBCard reverse>
            
              <MDBView hover cascade waves>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/canadas-history.html" target="_blank">
           <div className=" text-center mx-auto p-3 mt-2">
              <img
                  src={hs1}
                  alt=""
                  className="img-fluid" 
                />
            </div>
              </a>
                
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold best">
                  <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/canadas-history.html" target="_blank">About Canada</a>
                </h2>
               
                
                
              </MDBCardBody>

            </MDBCard>
            </Fade>
             </div>
         
            <MDBContainer className="text-justify">
               <Fade bottom appear><p>
              Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north. Major cities include massive Toronto, west coast film centre Vancouver, French-speaking Montréal and Québec City, and capital city Ottawa. Canada's vast swaths of wilderness include lake-filled Banff National Park in the Rocky Mountains. It's also home to Niagara Falls, a famous group of massive waterfalls.
              </p></Fade>
               <Fade bottom appear><p>
              Canada is a developed country and has the fifteenth-highest nominal per capita income globally as well as the twelfth-highest ranking in the Human Development Index. Its advanced economy is the tenth-largest in the world, relying chiefly upon its abundant natural resources and well-developed international trade networks. Canada is part of several major international and intergovernmental institutions or groupings including the United Nations, the North Atlantic Treaty Organization, the G7 (formerly G8), the Group of Ten, the G20, the North American Free Trade Agreement and the Asia-Pacific Economic Cooperation forum.
              </p></Fade>
            </MDBContainer>

          </MDBCol>
        </MDBRow>
        <hr className="mb-5 mt-4" />
        <br/>
        <br/>
        <MDBRow>
          <MDBCol>
          <div className="w-responsive text-center mx-auto p-3 mt-2">
           <Fade bottom appear>
            <MDBCard reverse>
              <MDBView hover cascade waves>
           <div className="=text-center mx-auto p-3 mt-2">
                <img
                  src={canada2}
                  alt=""
                  className="img-fluid"
                />
                </div>
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold best">
                  <a href="https://www.canada.ca/en/immigration-refugees-citizenship/news/archives/backgrounders-2011/facts-canada-immigration-history.html" target="_blank">  Canada history of immigration</a>
                </h2>
             
              </MDBCardBody>
            </MDBCard>
            </Fade>
            </div>
            <MDBContainer className="mt-5">
               <Fade bottom appear><p className="text-justify"> 
              Canada is often referred to as a land of immigrants because millions of newcomers have settled here and helped to build and defend our way of life, starting with settlers from France and England.
              </p></Fade>
              <h2 className="font-weight-bold">What does IRCC stand FOR ?</h2>
               <Fade bottom appear><p className="text-justify">Immigration, Refugees and Citizenship Canada facilitates the arrival of immigrants, provides protection to refugees, and offers programming to help newcomers settle in Canada. 
                <br/>
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank">For more Information.....</a>
              </p></Fade>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
	}
}
export default About;
//action="https://mailthis.to/sohardhchobera684@gmail.com" method="POST"