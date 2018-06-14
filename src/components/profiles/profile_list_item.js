import React from 'react'

class ProfileListItem extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<li className="profile-list-item">
				<img className="profile-background-img" src={this.props.backgroundImg}></img>

				<div className="profile-information-container">
					<h1>{this.props.name}</h1>
					<p>{this.props.position}</p>
				</div>
				<div className="profile-img-container">
					<img className="profile-img" src={this.props.profileImg}></img>
				</div>
				

				
			</li>
		)
	}
}

export default ProfileListItem