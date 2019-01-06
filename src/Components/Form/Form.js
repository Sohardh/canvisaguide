import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption, Input } from 'mdbreact';
  import ReCAPTCHA from "react-google-recaptcha";
  import './Form.css';

class FormPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  
  
  
  render(){
    function onChange(value) {
      console.log("Captcha value:", value);
    }

    



  return (
    <MDBContainer>
      
<div className="whole " >
      <MDBRow>
        <MDBCol md="12">
          <form action="https://formspree.io/canvisaguideinfo@gmail.com?subject=New Mail from a Client" method="POST" target="_blank" className="border border p-10">
            
            <div className="grey-text">
            <MDBContainer>
              <MDBRow>
              <MDBCol>
              <MDBInput
                label="First name"
                icon="user"
                group
                type="text"
                validate
                class="form-control"
                id="validationDefault01"                error="wrong"
                success="right"
                name = "First Name"
              />
              </MDBCol>
              <MDBCol>
              <MDBInput
                label="Last name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name = "Last Name"
              />
              </MDBCol>
              </MDBRow>
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                class="form-control"
                success="right"
                name="reply_to"
                value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}
              />
                 
        
             
              <MDBInput
                label="Telephone Number"
                icon="phone" 
                group
                type="tel"
                validate
                error="wrong"
                class="form-control"
                success="right"
                name="Phone number"
              />

              </MDBContainer>
              <MDBContainer>
                <MDBRow>
                <MDBCol>
                  <MDBInput
                label="Age"
                icon="child" 
                group
                type="number"
                validate
                error="wrong"
                class="form-control"
                success="right"
                name="Age"
              />
                  </MDBCol>
                  <MDBCol sm ='6'>
                  <select className="browser-default custom-select form-control mar " name='Marital Status' label='Marital Status'>
                <option>Marital Status</option>
                <option value="Married">Married</option>
                <option value="Single">Single</option>
                <option value="Common Law">Common Law</option>
              </select>
                  </MDBCol>
                  
                </MDBRow>
               <div class="blockquote bq-primary didyou">
    
               <p >Did you take the IELTS English Test? </p>
               <div class="custom-control custom-radio" >
              <input type="radio" class="custom-control-input form-control" id="defaultUnchecked" name="Did you take the IELTS English Test?" value="Yes"/>
              <label class="custom-control-label" for="defaultUnchecked">Yes</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input form-control" id="defaultChecked" name="Did you take the IELTS English Test?" value="No"/>
              <label class="custom-control-label" for="defaultChecked">No</label>
            </div>
                </div>
                <div class="blockquote bq-primary didyou">
                <p  name="English Skills">Your English Language Skills -</p>
                <MDBInput
                label="Listening"
                group
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="Listening"
              />
              <MDBInput
                label="Reading"
                group
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="Reading"
              />
              <MDBInput
                label="Writing"
                group
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="Writing"
              />
               <MDBInput
                label="Speaking"
                group
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="Speaking"
              />
              </div>
                <div class="blockquote bq-primary">
    
    <p >Did you take the TEF French Test? </p>
    <div class="custom-control custom-radio" >
   <input type="radio" class="custom-control-input form-control"  id="tffdefaultUnchecked" name="Did you take the TEF French Test?" value="Yes"/>
   <label class="custom-control-label" for="tffdefaultUnchecked">Yes</label>
 </div>
 <div class="custom-control custom-radio">
   <input type="radio" class="custom-control-input form-control" id="tffdefaultChecked" name="Did you take the TEF French Test?" value="No"/>
   <label class="custom-control-label" for="tffdefaultChecked">No</label>
 </div>
     </div>
     <MDBInput
                label="Your French Language Skills"
                group
                icon="graduation-cap" 
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="French-Skill"
              />

<MDBInput
                label="Country of Citizenship"
                group
                icon="flag" 
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="Country of Citizenship"
              />
              <MDBInput
                label="Country of Residence"
                group
                icon="flag" 
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="Country of Residence"
              />
              <MDBInput
                label="Highest Level of Education"
                group
                icon="graduation-cap" 
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="Highest Level of Education"
              />
              <MDBInput
                label="Work Experience"
                group
                icon="laptop" 
                type="text"
                validate
                class="form-control"
                error="wrong"
                success="right"
                name="Work Experience"
              />
              

           
                

              </MDBContainer>


              
            </div>
            
            <div className="text-center">

            <ReCAPTCHA
    sitekey="6LeHwIMUAAAAAFMBRk6blWmfvsVQCPjTJq2e8jRG"
    onChange={onChange}
  />

              <MDBBtn color="primary" type = 'submit' className="form-control" >Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      </div>
    </MDBContainer>
  );
  
  }updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  


};


export default FormPage;