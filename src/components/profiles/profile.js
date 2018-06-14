import React from 'react';
import ProfileListItem from './profile_list_item';
import orderBy from 'lodash';

class ProfileList extends React.Component {
	constructor(props){
		super(props)

		this.filterProfiles = this.filterProfiles.bind(this)
		this.renderProfiles = this.renderProfiles.bind(this)
	}

	filterProfiles(a,b){

		var key = this.props.filter
		const filterA = a[key].toUpperCase();
	    const filterB = b[key].toUpperCase();

	    let comparison = 0;

	  	if (filterA > filterB) {
	    	comparison = 1;
	  	} else if (filterA < filterB) {
	    	comparison = -1;
	  	}
	  	return comparison;
	}

	renderProfiles(){
		
		if(this.props.filter){
			this.props.profiles.sort(this.filterProfiles)
		}

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
		return (
			<ul className="profile-list">
				{this.renderProfiles()}
				}
			</ul>
		)
	}
}

export default ProfileList

