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
            <p className="head"><strong>Language Test Equivalency Charts</strong></p>
           
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
 
          <br/>
                 
            
            </div>
        );
    }
}
export default Immigration;