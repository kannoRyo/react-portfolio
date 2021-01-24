import React from 'react'
import '../assets/css/Works.css'
import {Header} from './index'
import WorksCard from './WorksCard'
import Work from '../assets/img/work01.jpg'

const Works = ()=>{
	return (
	<div className="full-screen-train">
        <Header/>
        <h1 className="heading">Works</h1>
        <div className="works-board">
            <h3>制作物</h3>
            <div style={{display:'flex'}}>
                <WorksCard 
                    title={"ああああああああああああああ"}  
                    img={Work} 
                    description={"これはFirebaseでTodoを管理している、ログイン機能付きのTodoWebアプリです。"}
                    langs={[["Javascript","TypeScript"],["Javascript","TypeScript"],["Javascript","TypeScript"]]} 
                />
                <WorksCard 
                    title={"ああああああああああああああ"}  
                    img={Work} 
                    description={""}
                    langs={[["Javascript","TypeScript"]]} 
                />
                <WorksCard 
                    title={"ああああああああああああああ"}  
                    img={Work} 
                    description={""}
                    langs={[["Javascript","TypeScript"]]} 
                />
            </div>
        </div>
    </div>
)
}

export default Works