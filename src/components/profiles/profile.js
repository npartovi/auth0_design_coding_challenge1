import React from 'react';
import ProfileListItem from './profile_list_item';

class ProfileList extends React.Component {
	constructor(props){
		super(props)
	}

	renderProfiles(){
		return this.props.profiles.map((profiles, idx) => {
			return(
				<ProfileListItem 
					name={profiles.name}
					position={profiles.position}
					profileImg={profiles.profile_pic}
					backgroundImg={profiles.backgroundImg}
					key={idx}
				/>
			)
		})
	}

	render(){
		console.log(this.props.profiles)
		return (
			<ul className="profile-list">
				{this.renderProfiles()}
			</ul>
		)
	}
}

export default ProfileList

