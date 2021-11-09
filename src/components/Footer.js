import React from 'react'
import '../styles/Prefooter.css'
import '../styles/Mainfooter.css'

const youtube = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" /><path fill="#FFF" d="M20 31L20 17 32 24z" /></svg>
const twitter = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" /></svg>
const facebook = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" /><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" /></svg>
const instagram = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5" /><stop offset=".328" stop-color="#ff543f" /><stop offset=".348" stop-color="#fc5245" /><stop offset=".504" stop-color="#e64771" /><stop offset=".643" stop-color="#d53e91" /><stop offset=".761" stop-color="#cc39a4" /><stop offset=".841" stop-color="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9" /><stop offset=".999" stop-color="#4168c9" stop-opacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>

const mapicon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/></svg>
const shieldicon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.762 8.047l-4.381 4.475-2.215-2.123-1.236 1.239 3.451 3.362 5.619-5.715-1.238-1.238zm-3.762-5.503c2.5 1.805 4.555 2.292 7 2.416v9.575c0 3.042-1.686 3.827-7 7.107-5.309-3.278-7-4.065-7-7.107v-9.575c2.447-.124 4.5-.611 7-2.416zm0-2.544c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3z"/></svg>
const repeaticon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"/></svg>

export default function Footer({footer}) {
    return (
        <>
            <div className="prefooter1">
                <div>
                    {repeaticon}
                    <p><b>Hassle-free replacement</b> <br /> 10-day easy replacement policy on mi.com</p>
                </div>
                <div>
                    {shieldicon}
                    <p><b>100% secure payments</b> <br /> We support Cards, Wallets, EMI and COD</p>
                </div>
                <div>
                    {mapicon}
                    <p><b>Vast service network</b> <br /> 1000 Mi service-centers across 600 cities</p>
                </div>
            </div>
            <div className="prefooter2">
                <div>
                    <p>Let's Stay in Touch</p> <span>Get Updates on Sales Specials and more</span>
                </div>
                <div>
                    <div>
                        <input type="email" name="email" placeholder="Enter your E-mail" />
                        <button>›</button>
                    </div>
                    <span>Thanks. You are on our email list for special Offers</span>
                </div>
                <div>
                    <p>Follow Mi</p>
                    <span>We want to hear from You</span>
                </div>
                <div>
                    {facebook} {youtube} {instagram} {twitter}
                </div>
            </div>
            <div className="footer">
                <div>
                    <p>SUPPORT</p>
                    {
                        footer.support.map((item,index)=>(
                            <a href={item.url} key={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <p>SHOP AND LEARN</p>
                    {
                        footer.shopAndLearn.map((item,index)=>(
                            <a href={item.url} key={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <p>RETAIL STORE</p>
                    {
                        footer.retailStore.map((item,index)=>(
                            <a href={item.url} key={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <p>ABOUT US</p>
                    {
                        footer.aboutUs.map((item,index)=>(
                            <a href={item.url} key={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <p>CONTACT US</p>
                    {
                        footer.contactUs.map((item,index)=>(
                            <a href={item.url} key={item.url}>{item.name}</a>
                        ))
                    }
                </div>
                <div>
                    <div>Chat with our Virtual AI Bot <br/>
                        (24/7 Live Agent Support)</div>
                    <button>Chat Now</button>
                </div>

            </div>
            <div className="footerborder">
                <div>Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
            </div>
        </>
    )
}
