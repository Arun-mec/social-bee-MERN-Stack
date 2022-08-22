import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Leftbar from '../../Components/Leftbar/Leftbar'
import Navbar from '../../Components/Navbar/Navbar'
import Rightbar from '../../Components/Rightbar/Rightbar'
import './home.css'
function Home() {
  return (
    <div>
      <Navbar/>
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  )
}

export default Home
