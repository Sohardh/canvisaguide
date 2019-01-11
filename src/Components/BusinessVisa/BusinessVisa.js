import React , { Component }  from 'react';
import Fade from 'react-reveal/Fade';
import {  MDBContainer, MDBRow, MDBCol } from "mdbreact";
import business from '../../Assets/business.jpg';
import './BusinessVisa.css'
class BusinessVisa extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
      return(
<MDBContainer>
<p className="head heading">Business Visa</p>
            <MDBRow>
              <MDBCol md="6" >
                <Fade left appear><img className="serviceimage" src={business} alt="services"/></Fade>
              </MDBCol>
              <MDBCol md="6" >
                <h3>OINP Entrepreneur Program</h3>
               <p className="mx-auto p-1 mt-1 text-justify para" md="auto">The purpose of this nominee stream is to attract business owners or senior managers of businesses to the province who have the desire to either purchase an existing business or to establish their own business. Similar to many of the current business nominee streams the process is a staged process, commencing with an Expression of Interest. Applicants must wait for an official invitation before they may formally apply.</p>
                </MDBCol>
                </MDBRow>
                <p className="mx-auto p-1 mt-1 text-justify para" md="auto">Once they apply, and if approved, applicants will first be nominated for a business work permit to allow them to come to the Province, meet the terms of the Performance agreement, and only once those terms have been met are they nominated for permanent residence in Canada; at which point they must still apply to the Federal Government for PR visa issuance</p>
               <br/>
               <h3>MPNP business  PNP </h3>               
               <p className="mx-auto p-1 mt-1 text-justify para" md="auto">MPNP-B Manitoba Provincial Nominee Program Business Immigration is for representatives, senior directors and financial specialists hoping to move to the area of Manitoba, Canada. The base qualified speculation by the MPNP-B is $150,000 CAD in another business or in a current business in or outside Winnipeg Manitoba. Movement attorneys specialists prompt candidates with commonplace selection by the Manitoba Business Immigration and Investment Branch MPNP-B to apply for Canadian changeless inhabitant PR alongside their companion and qualified wards.</p>
               <br/>
               <h3>Quebec Business Class </h3>
               <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                <li className="list-group-item para">Immigrant Investors (new criteria takes effect August 2 2018)
                </li>
                <li className="list-group-item para">September 10 2018 to March 15 2019 = 1500 applications
                (limit of 1235 from China)
                </li>
                <li className="list-group-item para">Those with a government approval language exam showing advanced intermediate French are exempt from the quota and time frame
                </li>
                <li className="list-group-item para">Revised net worth of 2 million Canadian
Revised investment level 1.2 million Canadian
</li>
            </ul>
            </ul>
            </div>
            <p className="head heading">Entrepreneurs</p>
              <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                <li className="list-group-item para">(new criteria takes effect August 2 2018)
                </li>
                <li className="list-group-item para"> August 15 2018 to March 31 2019 = 25 applications through Component One
                <br/>&nbsp;&nbsp; -meet or exceed passing score
                <br/>&nbsp;&nbsp; -intent to settle and operate a business in Quebec
                <br/>&nbsp;&nbsp; -received offer of service from enterprise accelerator,enterprise incubator or university entrepreneurship center
             
                </li>
                <li className="list-group-item para">August 15 2018 to March 31 2019 = 35 applications through Component Two
                <br/>&nbsp;&nbsp; -meet or exceed passing score
                <br/>&nbsp;&nbsp; -net worth of at least $900,000 Cdn
                <br/>&nbsp;&nbsp; -hold alone or with spouse 25% minimum equity in business in Quebec
               <br/>&nbsp;&nbsp; -active management
               <br/>&nbsp;&nbsp; -investment $300,000 in Montreal or $200,000 if outside of Montreal
                 <br/>&nbsp;&nbsp; -pay performance deposit of $200,000 Cdn (returned if conditions met)
                 </li>
              </ul>
              </ul>
              </div>
            </MDBContainer>
            );
  }
}
export default BusinessVisa;