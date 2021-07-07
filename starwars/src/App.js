import React, {useState, useEffect} from 'react';
import './App.css';
import CharacterCard from './components/Character';
import axios from 'axios';
import characterCard from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  

  

  const [data, setData] = useState('');

  useEffect(() => {
    
    axios
      .get("https://swapi.py4e.com/api/people")
      
      .then(res =>{
        console.log(res.data.results[1]) 
        setData(res.data)})
      
      .catch(err => console.log(err));
  }, []);


  
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterCard data={data}/>
      
    </div>
  );
}

export default App;
