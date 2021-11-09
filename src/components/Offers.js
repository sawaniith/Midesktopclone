import React from 'react'
import Offer from './Offer.js'
import '../styles/Offers.css'

export default function Offers({offer}) {
    return (
        <div className="offers">
            {
                 offer.map((item,index)=>(
                     <Offer key={item.image} index={index} src={item.image} link={item.url}/>
                 ))
            }
        </div>
    )
}
