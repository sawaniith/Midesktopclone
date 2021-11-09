import React,{useState,useEffect} from 'react'
import Navcard from './Navcard'
import '../styles/Navoptions.css'


export default function Navoptions({miphones,redmiphones,tv,laptop,fitness,home,audio,accessories}) {
   
   const [miphonestoggle, setmiphonetoggle] = useState(false);
   const [redmiphonestoggle, setredmiphonetoggle] = useState(false);
   const [tvtoggle, settvtoggle] = useState(false);
   const [laptoptoggle, setlaptoptoggle] = useState(false);
   const [fitnesstoggle, setfitnesstoggle] = useState(false);
   const [hometoggle, sethometoggle] = useState(false);
   const [audiotoggle, setaudiotoggle] = useState(false);
   const [accessoriestoggle, setaccessoriestoggle] = useState(false);
   
   useEffect(() => {
       if(window.location.pathname==="/miphones"){
           return setmiphonetoggle(true);
       }
       if(window.location.pathname==="/redmiphones"){
           return setredmiphonetoggle(true);
       }
       if(window.location.pathname==="/tv"){
           return settvtoggle(true);
       }
       if(window.location.pathname==="/laptop"){
           return setlaptoptoggle(true);
       }
       if(window.location.pathname==="/lifestyle"){
           return setfitnesstoggle(true);
       }
       if(window.location.pathname==="/home"){
           return sethometoggle(true);
       }
       if(window.location.pathname==="/audio"){
           return setaudiotoggle(true);
       }
       if(window.location.pathname==="/accessories"){
           return setaccessoriestoggle(true);
       }

   }, [])
   
    return (
        <div className="navoptions">
            {
                miphonestoggle? miphones.map((item,index)=>(
                    <Navcard index={index} name={item.name} price={item.price} image={item.image} key={item.image}/>
                )):null
            }
            {
                redmiphonestoggle? redmiphones.map((item,index)=>(
                    <Navcard index={index} name={item.name} price={item.price} image={item.image} key={item.image}/>
                )):null
            }
            {
                tvtoggle? tv.map((item,index)=>(
                    <Navcard index={index} name={item.name} price={item.price} image={item.image} key={item.image}/>
                )):null
            }
            {
                laptoptoggle? laptop.map((item,index)=>(
                    <Navcard index={index} name={item.name} price={item.price} image={item.image} key={item.image}/>
                )):null
            }
            {
                fitnesstoggle? fitness.map((item,index)=>(
                    <Navcard index={index} name={item.name} price={item.price} image={item.image} key={item.image}/>
                )):null
            }
            {
                hometoggle? home.map((item,index)=>(
                    <Navcard index={index} name={item.name} price={item.price} image={item.image} key={item.image}/>
                )):null
            }
            {
                audiotoggle? audio.map((item,index)=>(
                    <Navcard index={index} name={item.name} price={item.price} image={item.image} key={item.image}/>
                )):null
            }
            {
                accessoriestoggle? accessories.map((item,index)=>(
                    <Navcard index={index} name={item.name} price={item.price} image={item.image} key={item.image}/>
                )):null
            }
            
        </div>
    )
}
