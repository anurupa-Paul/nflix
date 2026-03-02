import React from 'react'
import './Home.css'

import nf5 from '../../assets/title_img.jpeg'
import title_img from '../../assets/back.webp'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Titlecards from '../../components/Titlecards/Titlecards'
import { Play, Info } from 'lucide-react';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={nf5} alt="" className='banner_image'/>
      </div>
      <div className="title">
        <p>Discovering new stories and movies and unimaginable twists</p>
        <div className="buttons">
          <button className='btn'><Play size={24} style={{marginRight: 8}}/>Play</button>
          <button className='btn dark-btn'><Info size={24} style={{marginRight: 8}}/>Info</button>
        </div>
        <Titlecards/>
      </div>
      <div className='more_cards'>
        <Titlecards title={"Blockbuster Movies"}/>
        <Titlecards title={"Only on Netflix"}/>
        <Titlecards title={"Trending Now"}/>
        <Titlecards title={"New Releases"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home