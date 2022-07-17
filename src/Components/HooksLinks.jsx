import React from "react";
import { Link } from "react-router-dom";

export default function HooksLinks() {
    return(
        <div className="Hook_template">
            <h1>Learn Hooks</h1>
            <div className="Link">
                <ul>
                    <li>
                        <Link to="/use-state">Use State</Link>
                    </li>
                    <li>
                        <Link to="/use-reducer">Use Reducer</Link>
                    </li>
                    <li>
                        <Link to="use-effect">Use Effect</Link>
                    </li>
                    <li>
                        <Link to="use-ref">Use Ref</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}