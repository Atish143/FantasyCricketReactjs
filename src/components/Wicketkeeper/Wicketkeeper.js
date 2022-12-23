import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

export default function WicketKeeper({
  selectedPlayer,
  setSelectedPlayer,
  countPlayer,
  setCountPlayer,
  countCredit,
  setCountCredit,
  error,
  setError,
}) {
  const [player, setPlayer] = useState([]);

  const fetchData = () => {
    return fetch(
      " https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json"
    )
      .then((response) => response.json())
      .then((data) =>
        setPlayer(
          data ? data.filter((info) => info?.role === "Wicket-Keeper") : []
        )
      );
  };

  useEffect(() => {
    fetchData();
    console.log(
      "---------Wicket-Keeper------->",
      player ? player.filter((data) => data?.role === "Wicket-Keeper") : []
    );
  }, []);

  useEffect(() => {
    
  }, [selectedPlayer]);

  console.log("playerdata", player);
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <div>
        <p>Pick 1-5 Wicket Keeper</p>
        <Autocomplete
          multiple
          id="tags-outlined"
          value={selectedPlayer.filter((data) => data?.role === "Wicket-Keeper")}
          options={player}
          getOptionLabel={(option) =>
            option.name + "\t(" + option.event_player_credit + ")"
          }
          onChange={(event, newValue) => {
            console.log("asd", event, newValue);
            // const temp = [...newValue.filter(singleValue => !(singleValue in selectedPlayer))]

            setSelectedPlayer([
              ...selectedPlayer.filter((sp) => sp.role !== "Wicket-Keeper"),
              ...newValue,
            ]);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Wicket Keeper"
              placeholder="Select Wicket Keeper Example :- PlayName(Player Credit)"
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
              <th colSpan="3">Wicket Keeper's Table</th>
            </tr>
            <tr>
              <th>Sr No</th>
              <th>Player Name</th>
              <th>Player Credit Score</th>
            </tr>

            {/* <td></td> */}
            {selectedPlayer
              .filter((data) => data?.role === "Wicket-Keeper")
              .map((item, index) => {
                return (
                  <tr>
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
