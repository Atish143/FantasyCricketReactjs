import React from "react";
import { Link } from "react-router-dom";

export default function Pickedplayer({selectedPlayer}){
  console.log(selectedPlayer,"lkjhgfdsaASDFG")
    return(
        <>
        <div style={{width:"100%"}}>
      
                <table >
          <tbody>
            <style>
              {`table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  
}
tr:nth-child(even) {
  background-color: #dddddd;
  
}`}
            </style>

            <tr>
              <th colSpan="4">PLayer List Table</th>
            </tr>
            <tr>
              <th>Sr No</th>
              <th>Player Name</th>
              <th>player Team Name</th>
              <th>Player Role</th>
              <th>Player Credit Score</th>
            </tr>

            {/* <td></td> */}
            {
          selectedPlayer.map((item , index) =>{
            return(
              
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.team_name}</td>
                    <td>{item.role}</td>
                    <td>{item.event_player_credit}</td>
                  </tr>
              
            )
          })
        }
          </tbody>
        </table>
        </div>
       
        </>
    )
}