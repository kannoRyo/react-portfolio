import React from 'react'
import '../assets/css/ProfileCard.css'
import Profile from '../assets/img/profile.png'

type ProfileCardProps = {
    profile: string
}

const ProfileCard = ()=>{

	return (
	<div className="profile-card" >
        <div className="p-left">
            <img src={Profile} alt=""/>
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
                    あああああああああああああああああああ<br/>
                    あああああああああああああああああああ<br/>
                    あああああああああああああああああああ<br/>
                    あああああああああああああああああああ<br/>
                    あああああああああああああああああああ<br/>
                </p>
            </div>
        </div>  
    </div>
)
}

export default ProfileCard
