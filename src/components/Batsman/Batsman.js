import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
export default function Batsman({
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
        setPlayer(data ? data.filter((info) => info?.role === "Batsman") : [])
      );
  };

  useEffect(() => {
    fetchData();
    console.log(
      "---------Batsman------->",
      player ? player.filter((data) => data?.role === "Batsman") : []
    );
  }, []);

  useEffect(() => {
    if (
      selectedPlayer.filter((data) => data?.role === "Batsman").length >= 3 &&
      selectedPlayer.filter((data) => data?.role === "Batsman").length <= 7
    ) {
      console.log("hajcb-Batsman");
      setError(false);
    } else {
      console.log("hajcb-Batsman error");
      setError(true);
    }
  }, [selectedPlayer]);

  console.log("playerdata", selectedPlayer);

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <div>
        <p>Pick 3-7 Batsman</p>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={player}
          value={selectedPlayer.filter((data) => data?.role === "Batsman")}
          getOptionLabel={(option) =>
            option.name + "\t(" + option.event_player_credit + ")"
          }
          onInputChange={(event, newInputValue) => {}}
          onChange={(event, newValue) => {
            // const temp = [...newValue.filter(singleValue => !(singleValue in selectedPlayer))]

            setSelectedPlayer([
              ...selectedPlayer.filter((sp) => sp.role !== "Batsman"),
              ...newValue,
            ]);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Batsman"
              placeholder="Select Batsman Example :- PlayName(Player Credit)"
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
              <th colSpan="3">Batsman's Table</th>
            </tr>
            <tr>
              <th>Sr No</th>
              <th>Player Name</th>
              <th>Player Credit Score</th>
            </tr>

            {/* <td></td> */}
            {selectedPlayer
              .filter((data) => data?.role === "Batsman")
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
