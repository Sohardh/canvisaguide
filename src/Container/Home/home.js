//Home page of the website
//Components used in homepage: Corousel, PicCards, SpouseSponsor, ProvincialProgram, Family Sponsor

import React, { Component } from 'react';
import Corousel from '../../Components/Corousel/Corousel';
import PicCards from '../../Components/PicCards/PicCards';
import {Image} from 'react-bootstrap';
import Form from '../../Components/Form/Form';
import './Home.css'
import Fade from 'react-reveal/Fade';
import { Route,Redirect } from 'react-router-dom';
import About from '../About/Aboutus/About';
import SpouseSponsor from '../../Components/SpouseSponsor/SpouseSponsor';
class Home extends Component {

	ContinuedHandler = () => {
    this.props.history.replace('/spousesponsor');   //on clicking image path becomes....prev+'/parentSponsership' and hence according to the Route below it routes to that component
    }

  render() {
let routePicCards = <Redirect to='/' /> //to enable directing to home page after reloading(refreshing) 
		{			
			routePicCards=(
			<div>
			<PicCards Clicked={this.ContinuedHandler}/>
			<Route path={this.props.match.path + '/spousesponsor'} 
			component={SpouseSponsor}/> 

			</div>);

		}
//Above route takes you to the Sponsorships page on clicking any of the cards.
    return (
      <div >     
        <Corousel/>
        <br/>
        <br/>
        
        <p className='capt'><Fade bottom delay={500}>Want to come to Canada to study, work, visit or live ?</Fade><Fade bottom delay={700}>You are at the right place</Fade> 
        <Fade bottom delay={900}>We will help you with all your immigration needs.</Fade></p>
		<br/>
    {routePicCards}
    <p className='capt'><Fade bottom delay={500}>Can Visa Guide (CVG) is a company with offices both in India and Canada that will help people with their various immigration needs. </Fade>
    <Fade bottom delay={700}>If you want to come to Canada- to study, work, visit or live- our company can help you.</Fade> 
        <Fade bottom delay={900}>We will also answer all your immigration questions and help you start your journey.
</Fade></p>
 
        
      </div>
    );
  }
}

export default Home;
