import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Useref() {
    const inputRef = useRef(null)

    const keyboardHandle = (event) => {
        if (event.key === 'Enter') {
            inputRef.current.focus();
        }
    }

    useEffect(() => {
        window.addEventListener('keypress', keyboardHandle)
        return () => window.removeEventListener('keypress', keyboardHandle)
    }, []);

    return(
        <div className="Hook_template">
            <input type="text" placeholder="exmpl" ref={inputRef}/>
            <p className="Detail">Hook that allow to interact with React DOM</p>
            <p className="Detail">1. Click enter to focus input</p>
            <Link to="/">Home</Link>
        </div>
    )
}