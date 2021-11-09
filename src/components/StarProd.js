import React from 'react'
import '../styles/StarProd.css'

export default function StarProd({ starprod }) {
    return (
        <div className="starprod">
            <div><a href={starprod[0].url}> <img src={starprod[0].image} alt="1st Product" /></a></div>
            <div>
                <a href={starprod[1].url}> <img src={starprod[1].image} alt="2nd Product" /></a>
                <a href={starprod[2].url}> <img src={starprod[2].image} alt="3rd Product" /></a>
                <a href={starprod[3].url}> <img src={starprod[3].image} alt="4th Product" /></a>
            </div>
        </div>
    )
}
