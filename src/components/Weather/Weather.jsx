import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Weather.css'
const Weather = () => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/'
    const apiKey = '66c843fd45897ba875adcc6f5efe377a'
    const [temp , setTemp] = useState('')
    let responseWeather = {}
    useEffect(() => {
        axios.post(`${baseUrl}weather?q=Gothenburg&units=metric&APPID=${apiKey}`)
            .then(res => {
                responseWeather = res
                setTemp(Math.round(responseWeather.data.main.temp).toString())
            })
            .catch(err => console.log(err))    
    }, [])
  
    return (
      <div className="weatherComponent">
          <h1>Göteborg</h1>
    <h2>Today: {temp} °c</h2>

      </div>
    );
  };
  

  export default Weather;