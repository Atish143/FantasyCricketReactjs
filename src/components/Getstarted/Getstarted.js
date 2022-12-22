import { Button } from "@mui/material"
import React from "react"
 
import { Link } from "react-router-dom"


export default function Getstarted(){
    return(
        <>
        <div>
            <Link to="/pickplayer" >
            <Button> Get Started </Button>
            </Link>
        </div>
        </>
    )
}