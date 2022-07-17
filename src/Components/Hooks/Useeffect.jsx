import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

export default function Useeffect() {
    const [data, setData] = useState("")

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[0].email)
            console.log("THE API WAS CALLED")
        })
    }, []);

    return(
        <div className="Hook_template">
            <h4>{data}</h4>
            <p className="Detail">This hook will call function when the component is rendered</p>
            <p className="Detail">1. open console to</p>
            <p className="Detail">2. go home and comeback to this page again while console open</p>
            <p className="Detail">3. see differences</p>
            <Link to="/">Home</Link>
        </div>
    )
}
