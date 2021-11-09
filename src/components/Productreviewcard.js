import React from 'react'
import '../styles/Productreviewcard.css'

export default function Productreviewcard({image,index,review,name,price}) {
    return (
        <div className="prodrevcard">
            <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}
