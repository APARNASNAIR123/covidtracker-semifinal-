import React from "react"
//import "./homepage.css"
import "./post.css"
import { useState } from "react"
//import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Post from "./post"


const Homepage1 = ({ updateUser }) => {
    return (
        <div className="homepage">
            <h1 className="heading1">COVID-19 COMMUNICATION BOARD</h1>
            <button className="logout" onClick={() => updateUser({})} >LOGOUT</button>
            <Post/ >
        </div>
    )
}

export default Homepage1;
