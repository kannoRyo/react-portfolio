import React from 'react'
import '../assets/css/home.css'
import {ProfileCard,Header} from './index'

const Home = ()=>{

	return (
	<div className="full-screen-train">
        <Header/>
        <h1 className="heading">KannoRyo PortFolio</h1>
        <ProfileCard/>
    </div>
)
}

export default Home