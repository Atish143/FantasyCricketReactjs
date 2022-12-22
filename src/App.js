import React from "react";
import { Route , Routes} from "react-router-dom"

import './App.css';
import Pickplayer from './components/Pickplayer/Pickplayer';
import Pickedplayer from "./components/Pickedplayer/Pickedplayer"
import Getstarted from "./components/Getstarted/Getstarted";

function App() {
  
  return (
    <div>
  
      <Routes>
      <Route path="/" element={ <Getstarted /> }/>
        <Route path="pickplayer" element={< Pickplayer /> }/>
        <Route path="pickedplayer" element={ < Pickedplayer />}/>
</Routes>
  
    

    </div>
  );
}


export default App;
