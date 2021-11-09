import React from 'react'
import '../styles/Head.css'

export default function Head({text}) {
    return (
        <div className="head">
            <div></div>
            <p>{text}</p>
            <div></div>
        </div>
    )
}
