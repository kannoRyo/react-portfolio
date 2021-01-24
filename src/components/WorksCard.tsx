import React from 'react'
import '../assets/css/WorksCard.css'
import Work from '../assets/img/work01.jpg'

type WorksCard = {
	title: string,
	img: string,
	description: string,
	langs: any,
}

const WorksCard = (props: WorksCard)=>{

	return (
	<div className="works-card">
		<div className="c-title">
			<h2>{props.title}</h2>
		</div>
		<img src={props.img} alt=""/>
		<h4>説明</h4>
			<p>{props.description}</p>
		<h4>使用言語</h4>
		<ul>
			{/* <div className="c-lang-row">
				<li>aaaaaa</li>
				<li>aaaaaaaa</li>
			</div> */}
			{
				props.langs.map((lang: any)=>(
					<div className="c-lang-row">
						<li>{lang[0]}</li>
						<li>{lang[1]}</li>
					</div>
				))
			}
		</ul>
	</div>
)
}

export default WorksCard
