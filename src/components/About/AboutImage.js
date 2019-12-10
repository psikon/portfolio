import React from 'react';

export const aboutImage = (props) => {
    return <img className="picture" width={props.width} src={props.picture} alt={props.caption} />
}

export default aboutImage;