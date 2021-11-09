import React from 'react'
import '../styles/Navcard.css'

export default function Navcard({name,price,image,index}) {
    return (
        <div className="navcard">
            <img src={image} alt={`${index} phone`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}
