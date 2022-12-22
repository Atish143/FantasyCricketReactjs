import React from "react";
import { Link } from "react-router-dom";

export default function Pickedplayer({selectedPlayer}){
  console.log("selected plahyer list" , selectedPlayer)
    return(
        <>
        <div>hello players list </div>
        
        <Link to="/pickplayer"> go back</Link>
        </>
    )
}