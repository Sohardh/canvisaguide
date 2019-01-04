import React , { Component }  from 'react';
import Fade from 'react-reveal/Fade';
import './immigration.css';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import resident from '../../Assets/resident.jpg';
import flags from '../../Assets/image21.jpeg';
import business from '../../Assets/business.jpg';
import caregivers from '../../Assets/caregivers2.jpg'
class Immigration extends Component {
  componentWillMount = function() {
    if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
}


    render(){
      
        return(
            <div>
            <p className="head"><strong>Immigration</strong></p>
            <h2 className="text-center mx-auto p-1 mt-1 best">
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/standard-requirements/language-requirements/test-equivalency-charts.html
                " target="_blank" ><strong>Language Test Equivalency Charts</strong></a>

            </h2>
            <div className="service">
                <ul className="w-responsive  mx-auto p-1 mt-1 text-justify" >
                <Fade bottom appear><p className="responsive "> Part of the immigration process is taking a Language Proficiency Test.  Scores are converted to the Canadian Language Benchmarks and points can be awarded depending on the immigration stream.  
            <br/> <br/>
            Approved Language Proficiency Tests  are as follows:  IELTS, CELPIP, TEF, TCF 
They are required for immigration to Canada under the following streams:
Express Entry, Skilled worker and Provincial Nominee Programs MPNP.
Each test evaluates and gives scores for 4 abilities: reading, writing, listening and speaking.


                         </p></Fade>
               
                </ul>
                </div>


                 {/* All Tables start from here*/}
<br/>
                 <h2 className="text-center mx-auto p-1 mt-1 tabhead gradient-card-header blue-gradient">
           <strong>Canadian English Language Proficiency Index Program (CELPIP) – General Test score equivalency chart</strong>
            </h2>
<div class='table-responsive'>
<table id="tablePreview" class="table">

  <thead>
    <tr>
      <th>CLB Level</th>
      <th>Reading</th>
      <th>Writing</th>
      <th>Listening</th>
      <th>Speaking</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">10</th>
      <td>10.0</td>
      <td>10.0</td>
      <td>10.0</td>
      <td>10.0</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>9.0</td>
      <td>9.0</td>
      <td>9.0</td>
      <td>9.0</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>8.0</td>
      <td>8.0</td>
      <td>8.0</td>
      <td>8.0</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>7.0</td>
      <td>7.0</td>
      <td>7.0</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>6.0</td>
      <td>6.0</td>
      <td>6.0</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>5.0</td>
      <td>5.0</td>
      <td>5.0</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>4.0</td>
      <td>4.0</td>
      <td>4.0</td>
      <td>4.0</td>
    </tr>
  </tbody>

</table>
<br/>
<h2 className="text-center mx-auto p-1 mt-1 tabhead gradient-card-header blue-gradient">
           <strong>International English Language Testing System (IELTS) – General Training – Test score equivalency chart</strong>
            </h2>

<table id="tablePreview" class="table">

  <thead>
    <tr>
      <th>CLB Level</th>
      <th>Reading</th>
      <th>Writing</th>
      <th>Listening</th>
      <th>Speaking</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">10</th>
      <td>8.0</td>
      <td>7.5</td>
      <td>8.5</td>
      <td>7.5</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>7.0</td>
      <td>7.0</td>
      <td>8.0</td>
      <td>7.0</td>
    </tr>
    
  </tbody>

</table>




<br/>

<h2 className=" text-center mx-auto p-1 mt-1 tabhead gradient-card-header blue-gradient">
           <strong>Canadian English Language Proficiency Index Program (CELPIP) – General Test score equivalency chart</strong>
            </h2>

<table id="tablePreview" class="table">

  <thead>
    <tr>
      <th>CLB Level</th>
      <th>Reading</th>
      <th>Writing</th>
      <th>Listening</th>
      <th>Speaking</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">8</th>
      <td>6.5</td>
      <td>6.5</td>
      <td>7.5</td>
      <td>6.5</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>6.0</td>
      <td>6.0</td>
      <td>6.0</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>5.0</td>
      <td>5.5</td>
      <td>5.5</td>
      <td>5.5</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>4.0</td>
      <td>5.0</td>
      <td>5.0</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>3.5</td>
      <td>4.0</td>
      <td>4.5</td>
      <td>4.0</td>
    </tr>
    
  </tbody>

</table>
<br/>
<h2 className="text-center mx-auto p-1 mt-1 tabhead gradient-card-header blue-gradient">
           <strong>Test d’évaluation de français pour le Canada (TEF Canada) Test score equivalency chart</strong>
            </h2>

<table id="tablePreview" class="table">

  <thead>
    <tr>
      <th>CLB Level</th>
      <th>Reading</th>
      <th>Writing</th>
      <th>Listening</th>
      <th>Speaking</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">10</th>
      <td>263-277</td>
      <td>393-415</td>
      <td>316-333</td>
      <td>393-415</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>248-262</td>
      <td>371-392</td>
      <td>298-315</td>
      <td>371-392</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>233-247</td>
      <td>349-370</td>
      <td>280-297</td>
      <td>349-370</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>207-232</td>
      <td>310-348</td>
      <td>249-279</td>
      <td>310-348</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>181-206</td>
      <td>271-309</td>
      <td>217-248</td>
      <td>271-309</td>
    </tr> 
    <tr>
      <th scope="row">5</th>
      <td>151-180</td>
      <td>226-270</td>
      <td>181-216</td>
      <td>226-270</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>121-150</td>
      <td>181-225</td>
      <td>145-180</td>
      <td>181-225</td>
    </tr>
    
  </tbody>

</table>
<br/>





<h2 className=" text-center mx-auto p-1 mt-1 tabhead gradient-card-header blue-gradient">
           <strong>Test de connaissance du français pour le Canada (TCF Canada) Test score equivalency chart</strong>
            </h2>

<table id="tablePreview" class="table">

  <thead>
    <tr>
      <th>CLB Level</th>
      <th>Reading</th>
      <th>Writing</th>
      <th>Listening</th>
      <th>Speaking</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">10 and above</th>
      <td>549-699</td>
      <td>16-20</td>
      <td>549-699</td>
      <td>16-20</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>524-548</td>
      <td>14-15</td>
      <td>523-548</td>
      <td>14-15</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>499-523</td>
      <td>12-13</td>
      <td>503-522</td>
      <td>12-13</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>453-498</td>
      <td>10-11</td>
      <td>458-502</td>
      <td>10-11</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>406-452</td>
      <td>7-9</td>
      <td>398-457</td>
      <td>7-9</td>
    </tr> 
    <tr>
      <th scope="row">5</th>
      <td>406-452</td>
      <td>6</td>
      <td>369-307</td>
      <td>6</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>342-374</td>
      <td>4-5</td>
      <td>331-368</td>
      <td>4-5</td>
    </tr>
    
  </tbody>

</table>
<br/>



<h2 className=" head text-center mx-auto p-1 mt-1 best">
        <strong>Language Test Equivalency Charts</strong>
            </h2>
            <div className="service">
                <ul className="responsive text-center mx-auto p-1 mt-1 text-justify" >
                <Fade bottom appear><p className="responsive "> Up to 22 points are awarded under the Language Proficiency factor of the Quebec Skilled Worker Program  on the following basis.       </p></Fade>
               
                </ul>
                </div>



<h2 className=" text-center mx-auto p-1 mt-1 tabhead gradient-card-header blue-gradient">
           <strong>French Language proficiency </strong>
            </h2>


<table id="tablePreview " class="table">

  <thead>
    <tr>
      <th>Skill</th>
      <th>Low Beginner (A1)</th>
      <th>High Beginner (A2)</th>
      <th>Low sIntermediate s(B1)</th>
      <th>Highs Intermediate s(B2)</th>
      <th>Advanced s(C1)</th>
      <th>Advanced s(C2)</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Listening</th>
      <td>0 points</td>
      <td>0 points</td>
      <td>0 points</td>
      <td>5 points</td>
      <td>6 points</td>
      <td>7 points</td>
    </tr>
    <tr>
      <th scope="row">Speaking</th>
      <td>0 points</td>
      <td>0 points</td>
      <td>0 points</td>
      <td>5 points</td>
      <td>6 points</td>
      <td>7 points</td>
    </tr>
    
    <tr>
      <th scope="row">Reading</th>
      <td>0 points</td>
      <td>0 points</td>
      <td>0 points</td>
      <td>1 points</td>
      <td>1 points</td>
      <td>1 points</td>
    </tr>
    <tr>
      <th scope="row">Writing</th>
      <td>0 points</td>
      <td>0 points</td>
      <td>0 points</td>
      <td>1 points</td>
      <td>1 points</td>
      <td>1 points</td>
    </tr>
    
  </tbody>


</table>

<br/>
<h2 className="text-center mx-auto p-1 mt-1 tabhead gradient-card-header blue-gradient">
           <strong>English Language proficiency </strong>
            </h2>


<table id="tablePreview " class="table">

  <thead>
    <tr>
      <th>Skill</th>
      <th>Beginner (CLB 1-4)</th>
      <th>Intermediate (CLB 5-8)</th>
      <th>Advanced (CLB 9-12)</th>
     
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Listening</th>
      <td>0 points</td>
      <td>1 points</td>
      <td>2 points</td>
     
    </tr>
    <tr>
      <th scope="row">Speaking</th>
      <td>0 points</td>
      <td>1 points</td>
      <td>2 points</td>
     
    </tr>
    
    <tr>
      <th scope="row">Reading</th>
      <td>0 points</td>
      <td>1 points</td>
      <td>1 points</td>
     
    </tr>
    <tr>
      <th scope="row">Writing</th>
      <td>0 points</td>
      <td>1 points</td>
      <td>1 points</td>
      
    </tr>
    
  </tbody>


</table>
</div>
 <MDBCard className="my-1 px-1 pb-1">
            <br/>
            <p className="head"><strong> Pathway to Permanent Resident Canada</strong></p>
            <MDBCardBody>
              <MDBRow>
              
                <MDBCol >
                <div className="w-responsive text-center mx-auto p-3 mt-2">
      <Fade bottom appear>
                  <MDBCard reverse>
                  
                    <MDBView hover cascade waves>
                   
                 <div className="text-center mx-auto p-3 mt-2">
                    <img
                        src={resident}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                      <h2 className="head w-responsive text-center mx-auto p-1 mt-1 best ">
                      “You can easily be a permanent resident of Canada”

                      </h2>
                      
                     
                      
                      
                    </MDBCardBody>
      
                  </MDBCard>
                  </Fade>
                   </div>
                   <br/>
                  
                   <h3 className="w-responsive text-center mx-auto p-3 mt-2 ">
                  
                      </h3>

                      <MDBContainer className="mt-1">
                      <div className="service">
                <ul className="list-group list-group-flush">
                <Fade bottom appear><h3>  Under: </h3></Fade>
                <ul className="list-group">
                <MDBRow>
                <MDBCol md="4">
                  <Fade bottom appear><li className="list-group-item para"> FSW
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">FTC
</li></Fade>
<Fade bottom appear><li className="list-group-item para">FSE
</li></Fade>
</MDBCol>
 <MDBCol md="4">
                  <Fade bottom appear><li className="list-group-item para">Business
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">Investor 
</li></Fade>
<Fade bottom appear><li className="list-group-item para">Live-in caregiver
</li></Fade>
</MDBCol>
 <MDBCol md="4">
                  <Fade bottom appear><li className="list-group-item para"> PNP 
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">Canadian experience class
</li></Fade>
<Fade bottom appear><li className="list-group-item para">International graduate students 
</li></Fade>
</MDBCol>
</MDBRow>
                </ul>
                </ul>
                </div><br/>
           <Fade bottom appear><p className="mx-auto p-1 mt-1 text-justify para" md="auto">Every category consists of various requirements. We will help you to provide a solution to your needs:</p>
            <br/>
         <div className="service">
                <ul className="list-group list-group-flush">
                <p className=" y para" md="auto">We would assess your application based on:</p>
                <ul className="list-group">
                <MDBRow>
                <MDBCol md="4">
                  <Fade bottom appear><li className="list-group-item para"> • Age
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">•  Education
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">• Work experience
</li></Fade>

                  <Fade bottom appear><li className="list-group-item para">• Whether you have a valid job offer
</li></Fade>
                  <Fade bottom appear><li className="list-group-item para">• English and/or French language skills
</li></Fade>
<Fade bottom appear><li className="list-group-item para">• Adaptability (how well you’re likely to settle here)
</li></Fade>
</MDBCol>

</MDBRow>
                </ul>
                </ul> 
                </div>         
              </Fade>
           
            </MDBContainer>
            <br/>
            <Fade bottom appear><p className="mx-auto p-1 mt-1 text-justify para" md="auto">These factors are part of a 100-point grid used to assess eligibility. For the Federal Skilled Worker Program. You earn points for how well you do in each of the 6 factors.<br/>
            The current pass mark is 67 points.<br/>
            For more details or for an assessment: contact our office or email us. </p>
            </Fade>
      
                </MDBCol>
              </MDBRow> 
            </MDBCardBody>
          </MDBCard>
          <br/>
<p className="head">Business</p>
<MDBContainer>
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
              <br/>
              <h3>Entrepreneurs </h3>
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
              <br/>
              <p className="mx-auto p-1 mt-1 text-justify para" md="auto">Those with a government approval language exam showing advanced intermediate French are exempt from the quota and time frame.</p>
           <h3>Self Employed</h3>
              <div className="service">
                <ul className="list-group list-group-flush">
                <ul className="list-group">
                <li className="list-group-item para">(new criteria takes effect August 2 2018)
                </li>
                <li className="list-group-item para"> August 15 2018 to March 31 2019 = 50 applications
                <br/>&nbsp;&nbsp; -Minimum net worth of $100,000 Cdn
                <br/>&nbsp;&nbsp; -If destined to Montreal start up deposit of $50,0000 or more at local financial institute
                <br/>&nbsp;&nbsp; -If destined outside of Montreal start up deposit of $25,000 at a local financial institute
             
                </li>
                </ul>
                </ul>
                </div>
                <br/>
            

</MDBContainer>

            <MDBCard className="my-1 px-1 pb-1">
            <br/>
            <p className="head">Permanent residence for caregivers</p>
            <MDBCardBody>
           
                <div className="w-responsive text-center mx-auto p-3 mt-2">
      <Fade bottom appear>
                  <MDBCard reverse>
                  
                    <MDBView hover cascade waves>
                   
                 <div className=" text-center mx-auto p-3 mt-2">
                    <img
                        src={caregivers}
                        alt=""
                        className="img-fluid" 
                      />
                  </div>
                   
                      
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                    
                    <MDBCardBody cascade className="text-center">
                      <h2 className=" head text-center mx-auto p-1 mt-1 best">
                      “Live-in caregivers”
                      </h2>
                    </MDBCardBody>
      
                  </MDBCard>
                  </Fade>
                   </div>
                   <br/>
                 
                   <Fade bottom appear><p className=" one">We are in a transitional time wherein we have an old program as well as new pathways which will be applicable to those caregivers who may be eligible to apply for permanent residence under the economic class.
Old criteria for ‘Live-in-caregivers’:
Must work for 24 months FT as a live in caregiver OR acquire 3900 hours of FT experience in a live in capacity. Hours may be acquired within a maximum of 4 years or a minimum of 22 months.
New pathways for Caregivers:
-Caring for children
-Caring for those with high medical needs
Under these streams they do not have to live in and must prove 24 months of FT employment in the specified occupations. Added language level and education requirements were also introduced under these two new streams.
Since there is a provision to allow those that have worked as Live-In Caregivers (under the older criteria) to apply for permanent residence in Canada once they have attained the pre-requisite amount of experience, there was still a need to address transitional policies to cover the processing of these types of cases under the Economic Class. 

</p></Fade><br/>
          
              
        
             
            </MDBCardBody>
          </MDBCard>
            
            </div>
        );
    }
}
export default Immigration;