import { PromiseProvider } from 'mongoose';
import App from './App.js';
import React, { useState, useEffect} from 'react'

function Button(props) {

    return(
    <button onClick={() => 
        console.log(`${props.username}, ${props.password}, ${props.db}`)}>
        Connect
    </button>
    )
}


export default Button;