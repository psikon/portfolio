import React from 'react';

import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const anchor = {
    color: "white",
    backgroundColor: "#00bbff",
    fontStyle: "bold",
    textDecoration: "none",
    padding: "10px 10px", 
    borderRadius: "15%",
}
const header = (props) => {
    return (
        <section id="home">
            <div className="Header">
                <p className="welcome">Welcome to my portfolio</p>
                <h1 className="title">Philipp Hennersdorf</h1>
                <h2 className="subtitle">Dr. rer. nat.</h2>
                <AnchorLink style={anchor} href="#aboutme">Read more</AnchorLink>
                <div className="social-media">
                    <button />
                    <button />
                    <button></button>
                </div>
            </div>
        </section>
    )
}

export default header;