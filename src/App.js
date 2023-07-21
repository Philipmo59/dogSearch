import React, { useEffect, useState } from 'react';
import {Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About'
import Contact from './components/Contact'
import DogContainer from './components/DogContainer';
import SearchDog from './components/SearchDog';



function App() {
  const [letDogs,setDogs] = useState([]) //grabs Data
  const [letUrl,setUrl] = useState(["samoyed"]) //changes breed pictures
  const API = `https://dog.ceo/api/breed/${letUrl}/images/random/3`
  
  useEffect(()=>{
    fetch(API)
    .then(response => response.json())
    .then(data => setDogs(data))
    .catch(err=>console.log(err))
    },letUrl)

  
  return(
    <div>
      <NavBar/>
      <Switch>
        <Route exact path ="/About">
           <About />
        </Route>
        <Route exact path ="/Contact">
          <Contact />
        </Route>
        <Route exact path ="/Home">
          <DogContainer letDogs={letDogs}/>
          <SearchDog setUrl={setUrl}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
