//card that takes in props for each project

import React from 'react' 
function Card(props) {

    return (
        <>
            <h4>{props.name}</h4>
            <h2>{props.description}</h2>
            <h2>{props.link}</h2>
            <h2>{props.repo}</h2>
        </>
    )
}

export default Card;