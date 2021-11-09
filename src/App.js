import './App.css';
import Prenavbar from './components/Prenavbar'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Slider from './components/Slider'
import data from './data/data.json'
import Offers from "./components/Offers"
import Head from './components/Head'
import StarProd from './components/StarProd'
import HotAccessmenu from './components/HotAccessmenu'
import HotAccessories from './components/HotAccessories'
import Productreviews from './components/Productreviews'
import Videos from './components/Videos'
import Press from './components/Press'
import Footer from './components/Footer'
import Navoptions from './components/Navoptions'


function App() {

  return (
    <>
      <Router>
        <Prenavbar />
        <Navbar />
        <Navoptions miphones={data.miPhones} redmiphones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitness={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
        <Slider />
        <Offers offer={data.offer} />
        <Head text={"STAR PRODUCTS"} />
        <StarProd starprod={data.starProduct} />
        <Head text={"HOT ACCESSORIES"} />
        <HotAccessmenu />
        <Route exact path="/">
          <HotAccessories music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music} />
        </Route>
        <Route exact path="/music">
          <HotAccessories music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music} />
        </Route>
        <Route exact path="/smartdevices">
          <HotAccessories smartdevices={data.hotAccessories.smartDevice} smartdevcover={data.hotAccessoriesCover.smartDevice} />
        </Route>
        <Route exact path="/home">
          <HotAccessories home={data.hotAccessories.home} homecover={data.hotAccessoriesCover.home} />
        </Route>
        <Route exact path="/lifestyle">
          <HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifecover={data.hotAccessoriesCover.lifeStyle} />
        </Route>
        <Route exact path="/mobileaccess">
          <HotAccessories mobile={data.hotAccessories.mobileAccessories} mobilecover={data.hotAccessoriesCover.mobileAccessories} />
        </Route>
        <Head text={"PRODUCT REVIEWS"} />
        <Productreviews productreview={data.productReviews} />
        <Head text={"VIDEOS"} />
        <Videos videos={data.videos} />
        <Head text={"IN THE PRESS"} />
        <Press />
        <Footer footer={data.footer} />
      </Router>
    </>
  );
}

export default App;
