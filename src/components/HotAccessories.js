import React from 'react'
import Hotitemcard from './Hotitemcard'
import '../styles/HotAccessories.css'

export default function HotAccessories({ music, musiccover, smartdevices, smartdevcover, home, homecover, lifestyle, lifecover, mobile, mobilecover }) {
    return (
        <div className="hotaces">
            <div>
                <img src={musiccover || smartdevcover || homecover || lifecover || mobilecover} alt="Cover" />
            </div>
            <div>
                {
                    music && music.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
                {
                    smartdevices && smartdevices.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
                {
                    home && home.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
                {
                    lifestyle && lifestyle.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
                {
                    mobile && mobile.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
                <Hotitemcard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" alt="..." />

            </div>
        </div>
    )
}
