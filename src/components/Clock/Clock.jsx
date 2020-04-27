import React, { useState, useEffect } from "react";
import './Clock.css'
const Clock = ({ greetCallBack }) => {
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [h, setHour] = useState(0);

  // Körs en gång, när komponenten blir renderad (mounted)
  useEffect(() => {
    // starta prenumeration: hämta aktuell tid varje sekund
    setInterval(() => {
      let newTime = getTime();
      
      setTime(newTime);
      
    }, 1000); // 1000 millisekunder
    let newDate = getDate();
    setDate(newDate)
  }, []);

  useEffect(() => {
    // Körs när komponenten har renderats första gången
    // och varje gång komponenten uppdateras
    let h = getH()
    setHour(h);
    console.log(h);
    greetCallBack(h);
  }, [greetCallBack, h])

  return (
    <div className="clockComponent">
        <h1>{date}</h1>
      <h1>{time}</h1>
    </div>
  );
};

// Oberoende av komponenten Clock, så den behöver inte ligga inuti Clock
function getTime() {
  let date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  // return '15:09:30';
}

function getDate(){
    let date = new Date();
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
}

function getH() {
    let data = new Date();
    return data.getHours();
    
}



export default Clock;
