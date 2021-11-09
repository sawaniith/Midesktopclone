import React from 'react'
import Productreviewcard from './Productreviewcard'
import '../styles/Productreviews.css'

export default function Productreviews({productreview}) {
    return (
        <div className="prodreview">
            {
                productreview.map((item,index)=>(
                    <Productreviewcard price={item.price} name={item.name} image={item.image} review={item.review} index={item.image} />
                ))
            }
        </div>
    )
}
