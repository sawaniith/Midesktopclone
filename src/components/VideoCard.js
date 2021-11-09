import React from 'react'
import '../styles/VideoCard.css'

const play = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>

export default function VideoCard({index,image,name}) {
    return (
        <div className="videocard" style={{backgroundImage: `url(${image})`}}>
            <a href="#/">{play}</a>
            <p>{name}</p>
        </div>
    )
}
