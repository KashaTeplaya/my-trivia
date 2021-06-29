import React from 'react'

function Cards(props) {
    return (
        <div className="cards">
            <p className="cardtext" dangerouslySetInnerHTML={{__html:props.question}}></p>
        </div>)
}

export default Cards