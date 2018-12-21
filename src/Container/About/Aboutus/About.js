import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";


class About extends Component {
	render() {
		return (
			 <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a href="#!">About Canada</a>
                </h2>
                <p>
                  Written by
                  <a href="#!">
                    <strong>Abby Madison</strong>
                  </a>
                  , 26/08/2018
                </p>
                
                
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa nemo enim ipsam voluptatem
                quia voluptas sit qui officia deserunt mollitia animi, id est
                laborum et dolorum fuga quidem rerum facilis est distinctio.
              </p>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est, omnis dolor
                repellendus. Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae itaque earum rerum.
              </p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <hr className="mb-5 mt-4" />
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg"
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a href="#!">  Canada history of immigration</a>
                </h2>
             
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam
                quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur.
              </p>
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