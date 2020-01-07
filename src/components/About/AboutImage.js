import React from 'react';

export const aboutImage = (props) => {
    return <img className="picture" src={props.picture} alt={props.caption} />
}

export default aboutImage;