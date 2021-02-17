import React from 'react'
import '../assets/css/ProfileCard.css'
import Profile from '../assets/img/profile.png'
import Profile2 from '../assets/img/profile2.png'

type ProfileCardProps = {
    profile: string
}

const ProfileCard = ()=>{

	return (
	<div className="profile-card" >
        <div className="p-left">
            <img src={Profile2} alt=""/>
        </div>
        <div className="p-right">
            <table>
                <tbody>
                    <tr>
                        <td>氏名:</td>
                        <th>菅野陵</th>
                    </tr>
                    <tr>
                        <td>大学:</td>
                        <th>北海道教育大学 札幌校</th>
                    </tr>
                    <tr>
                        <td>生年月日:</td>
                        <th>2000/09/26</th>
                    </tr>
                </tbody>
            </table>
            <div className="p-right-intro">
                <p>
                    こんにちは。現在、大学2年生の菅野陵です。<br/>
                    何かのサービスを通じて自分の想いが伝わり<br/>
                    人の生活がより豊かになるようなサービスを<br/>
                    開発したいです。長所は自走する力や、様々<br/>
                    な人と適切なコミュニケーションを行うこと<br/>
                    ができることです。
                </p>
            </div>
        </div>  
    </div>
)
}

export default ProfileCard
