import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";

export default function Usereducer() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment" :
                return { count: state.count + 1, showText: state.showText };
            case "toggleShowText" :
                return { count: state.count, showText: !state.showText };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: false})

    return(
        <div className="Hook_template">
            {state.count}
            <button onClick={() => {
                dispatch({type: "increment"})
                dispatch({type: "toggleShowText"})
            }}>Increment and Toggle show text</button>
            {state.showText ? "This is the text" : ""}
            <p className="Detail">this hook use for double action in one hook</p>
           <Link to="/">Home</Link> 
        </div>
    )
}