import React from 'react'
import '../assets/css/WorksCard.css'
import Work from '../assets/img/work01.jpg'

type WorksCard = {
	title: string,
	img: string,
	product: string,
	description: string,
	langs: any,
	github: string
}

const WorksCard = (props: WorksCard)=>{

	return (
	<div className="works-card">
		<div className="c-title">
			<h2>{props.title}</h2>
		</div>
		<a href={props.product} target="_blank" ><img src={props.img} alt="TodoApp" /></a>
		<h4>説明</h4>
			<p>{props.description}</p>
		<h4>使用言語</h4>
		<ul>
			{
				props.langs.map((lang: any)=>(
					<div className="c-lang-row">
						<li>{lang[0]}</li>
						<li>{lang[1]}</li>
					</div>
				))
			}
		</ul>
		<a href={props.github}　target="_blank">GitHub</a>
	</div>
)
}

export default WorksCard
