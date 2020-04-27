import React, { useState } from 'react';
import './App.css';
import Clock from './components/Clock/Clock'
import Weather from './components/Weather/Weather'
import ToDoList from './components/ToDoList/ToDoList'


function App() {

  const [greeting, setGreeting] = useState('');

  function greetings(hour){
    console.log('greetings fired  ------ ' + hour)
    if(hour > 5 && hour < 12){
      setGreeting('Good Morning')
      console.log('here1')
    }else if(hour > 12 && hour < 18){
      setGreeting('Good Afternoon')
      console.log('here2')
    }else if(hour > 18 && hour < 5){
      setGreeting('Good Evening')
      console.log('here3')
    }
  }

  return (
    <div className="App">

      <header className="App-header">
                <h1>{greeting}, SweetRoll</h1>
            </header>
            <main>
                <Clock greetCallBack = {h=>greetings(h)} />
               
            </main>
    </div>
  );
}

export default App;
