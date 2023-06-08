import React, { useState } from 'react';
import Bio from './Bio';
import Portfolio from './Portfolio';
import '../App.css';

function Navigator() {
    let [content, setContent] = useState(Bio);

    return(
        <div>
            <ul className="nav-btns">
                <button onClick={() => setContent(Bio)} className="nav-el">About Me</button>
                <button onClick={() => setContent(Portfolio)} className="nav-el">Portfolio</button>
            </ul>
            <main>{content}</main>
        </div>
    )
}

export default Navigator;