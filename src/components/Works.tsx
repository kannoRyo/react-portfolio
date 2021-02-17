import React from 'react'
import '../assets/css/Works.css'
import {Header} from './index'
import WorksCard from './WorksCard'
import Calendar from '../assets/img/calendar.png'
import todoApp from '../assets/img/todoApp.png'
import toshinChatbot from '../assets/img/toshinChatbot.png' 

const Works = ()=>{
	return (
	<div className="full-screen-train">
        <Header/>
        <h1 className="works-heading">Works</h1>
        <div className="works-board">
            <h3>制作物(画像クリックでページに遷移します。)</h3>
            <div style={{display:'flex'}}>
                <WorksCard 
                    title={"Googleカレンダー風アプリ"}  
                    img={Calendar}
                    product="https://calendar-app-8f225.web.app/" 
                    description={"Googleカレンダー風のWebアプリ。イベントの作成、削除ができます。データはfirestoreにあります。"}
                    langs={[["React","TypeScript"],["firebase","redux-toolkit"]]}
                    github="https://github.com/kannoRyo/calendar-app-typescript" 
                />
                <WorksCard 
                    title={"Firebaseを使ったTodoアプリ"}  
                    img={todoApp}
                    product="https://todoapp-14b5c.web.app/mytodos" 
                    description={"FirestoreでTodoを管理している、ログイン機能付きのTodoWebアプリ。スマートフォンでの利用を想定。"}
                    langs={[["React","Redux"],["react-router","Firebase"]]}
                    github="https://github.com/kannoRyo/todoApp" 
                />
                <WorksCard 
                    title={"chatbot(模試の申込みフォーム有)"}  
                    img={toshinChatbot}
                    product="https://chatbot-toshin-typescript.web.app/" 
                    description={"自分がアルバイトをしている塾のお問い合わせチャットボットを想定しております。slackのIncoming Webhookを活用し模試の申込みが出来ます。"}
                    langs={[["React","TypeScript"],["Firestore","slackAPI"]]}
                    github="https://github.com/kannoRyo/chatbot-toshin-typescript" 
                />
            </div>
        </div>
    </div>
)
}

export default Works