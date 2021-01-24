import React from 'react'
import '../assets/css/Works.css'
import {Header} from './index'
import WorksCard from './WorksCard'
import Work from '../assets/img/work01.jpg'
import todoApp from '../assets/img/todoApp.png'

const Works = ()=>{
	return (
	<div className="full-screen-train">
        <Header/>
        <h1 className="heading">Works</h1>
        <div className="works-board">
            <h3>制作物(画像クリックでページに遷移します。)</h3>
            <div style={{display:'flex'}}>
                <WorksCard 
                    title={"Firbaseを使ったTodoアプリ"}  
                    img={todoApp}
                    product="https://todoapp-14b5c.web.app/mytodos" 
                    description={"FirebaseでTodoを管理している、ログイン機能付きのTodoWebアプリ。スマートフォンでの利用を想定。"}
                    langs={[["React","Redux"],["react-router","Firebase"]]}
                    github="https://github.com/kannoRyo/todoApp" 
                />
                <WorksCard 
                    title={"ああああああああああああああ"}  
                    img={Work}
                    product="" 
                    description={""}
                    langs={[["Javascript","TypeScript"]]}
                    github="" 
                />
                <WorksCard 
                    title={"ああああああああああああああ"}  
                    img={Work}
                    product="" 
                    description={""}
                    langs={[["Javascript","TypeScript"]]}
                    github="" 
                />
            </div>
        </div>
    </div>
)
}

export default Works