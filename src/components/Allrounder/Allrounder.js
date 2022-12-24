import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

export default function Allrounder({
    selectedPlayer,
    setSelectedPlayer,
}) {
  const [player, setPlayer] = useState([]);


  const fetchData = () => {
    return fetch(
      " https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json"
    )
      .then((response) => response.json())
      .then((data) => 
      setPlayer(data ? data.filter((info) => info?.role === "All-Rounder") : [])
      );
  };

  useEffect(() => {
    fetchData();
    console.log(
      "---------All-Rounder------->",
      player ? player.filter((data) => data?.role === "All-Rounder") : []
    );

  }, []);


  

 

  console.log("playerdata", selectedPlayer);
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <div>
        <p>Pick 0-4 All Rounder</p>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={player}

          value={selectedPlayer.filter((data)=> data?.role === "All-Rounder") }

          getOptionLabel={(option) =>
            option.name + "\t(" + option.event_player_credit + ")"
          }
          
          onChange={(event, newValue) => {
            // const temp = [...newValue.filter(singleValue => !(singleValue in selectedPlayer))]

            setSelectedPlayer([...selectedPlayer.filter(sp => sp.role !== "All-Rounder"),...newValue])
        
          }}

          renderInput={(params) => (
            <TextField
              {...params}
              label="All Rounder"
              placeholder="Select All rounder Example :- PlayName(Player Credit)"
            />
          )}
        />

        <table>
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
              <th colSpan="3">All Rounder's Table</th>
            </tr>
            <tr>
              <th>Sr No</th>
              <th>Player Name</th>
              <th>Player Credit Score</th>
            </tr>

            {/* <td></td> */}
            {selectedPlayer.filter((data) => data?.role === "All-Rounder").map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.event_player_credit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


    </Stack>
  );
}
