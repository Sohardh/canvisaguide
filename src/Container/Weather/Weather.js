import React , { Component }  from 'react';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';

class Weather extends Component {
    componentWillMount = function() {
        if(window.location.href.indexOf('?reloaded') === -1) window.location.href = window.location.href + "?reloaded=true";
    }
    
  
    render(){
        
        return(
            <div>
                <p className="head"><strong>Weather In Canada</strong></p>
                 <ReactWeather
    		forecast="today"
    		apikey="47a0a4f1cc10405b9f2173230182912"
    		type="city"
    		forecast="5days"
    		city="ottawa"/>	<br/>
            <ReactWeather
    		forecast="today"
    		apikey="47a0a4f1cc10405b9f2173230182912"
    		type="city"
    		forecast="5days"
    		city="toronto"/>	<br/>

<ReactWeather
    		forecast="today"
    		apikey="47a0a4f1cc10405b9f2173230182912"
    		type="city"
    		forecast="5days"
    		city="vancouver"/><br/>
            <ReactWeather
    		forecast="today"
    		apikey="47a0a4f1cc10405b9f2173230182912"
    		type="city"
    		forecast="5days"
    		city="montreal"/>	<br/>

<ReactWeather
    		forecast="today"
    		apikey="47a0a4f1cc10405b9f2173230182912"
    		type="city"
    		forecast="5days"
    		city="calgary"/>
            	

            </div>
        );
    }
}
export default Weather;