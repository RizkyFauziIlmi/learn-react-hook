import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Usestate() {
    const [number, setNumber] = useState(0)
    const [type, setType] = useState("")

    const handleIncrement = () => {
        setNumber(number + 1)
    }

    const typeHandle = (event) => {
        let input = event.target.value
        setType(input)
    }

    const resetHandle = () => {
        window.location.reload()
    }

    return(
        <div className="Hook_template">
            <h2 className="header">Use State</h2>
            <div className="example_container">
                <h4>Example 1</h4>
                <div className="example">
                    <p>{number === 0 ? "zero" : number}</p>
                    <button onClick={handleIncrement}>Increment</button>
                </div>
            </div>
            <div className="example_container">
                <h4>Example 2</h4>
                <div className="example">
                    <input placeholder="enter something..." onChange={typeHandle} />
                    <p>{type === "" ? "nothing" : type}</p>
                </div>
            </div>
            <button onClick={resetHandle}>Reset</button>
            <p className="Detail">this hook use for change state and update it</p>
            <Link to="/">Home</Link>
        </div>
    )
}