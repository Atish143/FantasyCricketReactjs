import React from "react";
import Batsman from "../../components/Batsman/Batsman";
import Allrounder from "../../components/Allrounder/Allrounder";
import WicketKeeper from "../../components/Wicketkeeper/Wicketkeeper";
import Bowler from "../../components/Bowler/Bowler";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pickplayer({}) {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [countPlayer, setCountPlayer] = useState(11);
  const [countCredit, setCountCredit] = useState(100);
  const [error, setError] = useState(true);

  useEffect(() => {
    console.log("wfwuhfuwhfuwhufw selectedPlayer", selectedPlayer.length);
    if (selectedPlayer.length > 11 || selectedPlayer.length < 11) {
      console.log("cajkakjajkanckjanckjancjancank");
      setError(false);
    } else {
      setError(true);
    }
  }, [selectedPlayer]);

  useEffect(() => {
    if (selectedPlayer.length > 0) {
      const asd = selectedPlayer.reduce(
        (sum, curr) => sum + curr.event_player_credit,
        0
      );
      setCountCredit(100 - asd);
      setError(true);
    } else if (countCredit < 0) {
      console.log("iyersfgil", countCredit);
      setError(false);
    } else {
      setError(true);
    }
  }, [selectedPlayer]);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "70%",
            display: "grid",
            gridTemplateColumns: "repeat(4,.2fr)",
            margin: "2%",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              textAlign: "center",
              padding: "5%",
            }}
          >
            Players = {selectedPlayer.length}
          </div>
          <div
            style={{
              border: "1px solid black",
              textAlign: "center",
              padding: "5%",
            }}
          >
            Melbourne Stars ={" "}
            {
              selectedPlayer.filter(
                (data) => data?.team_name === "Melbourne Stars"
              ).length
            }
          </div>
          <div
            style={{
              border: "1px solid black",
              textAlign: "center",
              padding: "5%",
            }}
          >
            Perth Scorchers ={" "}
            {
              selectedPlayer.filter(
                (data) => data?.team_name === "Perth Scorchers"
              ).length
            }
          </div>
          <div
            style={{
              border: "1px solid black",
              textAlign: "center",
              padding: "5%",
            }}
          >
            Credit {countCredit} left
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2,.2fr)",
            marginTop: "5%",
            gap: "5%",
            justifyContent: "center",
          }}
        >
          <Batsman
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            countPlayer={countPlayer}
            setCountPlayer={setCountPlayer}
            countCredit={countCredit}
            setCountCredit={setCountCredit}
            error={error}
            setError={setError}
          />
          <Allrounder
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            countPlayer={countPlayer}
            setCountPlayer={setCountPlayer}
            countCredit={countCredit}
            setCountCredit={setCountCredit}
            error={error}
            setError={setError}
          />
          <WicketKeeper
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            countPlayer={countPlayer}
            setCountPlayer={setCountPlayer}
            countCredit={countCredit}
            setCountCredit={setCountCredit}
            error={error}
            setError={setError}
          />
          <Bowler
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            countPlayer={countPlayer}
            setCountPlayer={setCountPlayer}
            countCredit={countCredit}
            setCountCredit={setCountCredit}
            error={error}
            setError={setError}
          />
        </div>

        <div style={{ width: "100%", textAlign: "center" }}>
          {error ? (
            <Link to="/pickedplayer"  OnClick={(e) => e.preventDefault()}>
              <Button variant="outlined" style={{ width: "30%", margin: "5%" }}>
                Proceed
              </Button>
            </Link>
          ) : (
            <Link to="/pickedplayer">
              <Button variant="outlined" style={{ width: "30%", margin: "5%" }}>
                Proceed
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
