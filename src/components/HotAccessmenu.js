import React from 'react'
import { Link } from "react-router-dom";
import '../styles/HotAccessmenu.css'


export default function HotAccessmenu() {
    return (
        <div className="hotac">
            <Link className="hotlink" to="/music">Music Store</Link>
            <Link className="hotlink" to="/smartdevices">Smart Devices</Link>
            <Link className="hotlink" to="/home">Home</Link>
            <Link className="hotlink" to="/lifestyle">LifeStyle</Link>
            <Link className="hotlink" to="/mobileaccess">Mobile Accessories</Link>
        </div>
       
    )
}
