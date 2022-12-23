import React from "react";
import Batsman from "../../components/Batsman/Batsman";
import Allrounder from "../../components/Allrounder/Allrounder";
import WicketKeeper from "../../components/Wicketkeeper/Wicketkeeper";
import Bowler from "../../components/Bowler/Bowler";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pickedplayer from "../Pickedplayer/Pickedplayer";

export default function Pickplayer({}) {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [countPlayer, setCountPlayer] = useState(11);
  const [countCredit, setCountCredit] = useState(100);
  const [error, setError] = useState(true);
  const [showplayerlist, setShowplayerlist] = useState(false);
  console.log("checking ", showplayerlist);
  useEffect(() => {
    console.log("wfwuhfuwhfuwhufw selectedPlayer", selectedPlayer.length);
    if (selectedPlayer.length === 11) {
      console.log("cajkakjajkanckjanckjancjancank");
      setError(false);
    } else {
      setError(true);
      console.log("habhsbjchbsjhbscjhbshcbsjbsjcbsjcbsbcsbcj",error);
    }
  }, [selectedPlayer]);

  useEffect(() => {
    if (selectedPlayer.length > 0) {
      const asd = selectedPlayer.reduce(
        (sum, curr) => sum + curr.event_player_credit,
        0
      );
      setCountCredit(100 - asd);
    } 

  }, [selectedPlayer]);


 useEffect(()=>{
  if(countCredit<=0){
    setError(true)
  }
  else{
    setError(false)
  }
 },[countCredit])

  return (
    <>
      <div style={{ width: "100%", display: showplayerlist ? "none" : null }}>
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
          {/* {
          showplayerlist ? 
        
        : null
         }  */}
        </div>
      </div>

      <div style={{width:"100%"}}>
      {showplayerlist ? <Pickedplayer selectedPlayer={selectedPlayer} /> : null}
        <Button disabled={error} style={{width:"100%" , marginTop:"5%" , marginBottom:"5%", display:"flex"  , justifyContent:"center"}} onClick={() => setShowplayerlist(!showplayerlist)}>
        Proceed to see player list
      </Button>
      </div>
    </>
  );
}
