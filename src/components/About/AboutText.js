import React from 'react';

const aboutMeText = ( props) => {
    return (
    <div>
        <h2 className="section-heading text-uppercase">{props.heading}</h2>
        <p className="text-left">{props.paragraph_1}</p>
        <p className="text-left">{props.paragraph_2}</p>
        <p className="text-left">{props.paragraph_3}</p>
        <p className="text-left">{props.paragraph_4}</p>
        <p className="text-right">{props.signature}</p>
    </div>);
}

export default aboutMeText;