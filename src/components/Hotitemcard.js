import React from 'react'
import '../styles/Hotitemcard.css'

export default function Hotitemcard({image,index,name,price}) {
    return (
        <div className="hotitem">
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}
