import React from 'react'


class Navbar extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			filter: "position"
		}
	}

	renderFilterDropdown(){
		return(
			<div>
				<select>
					<option value="position">Position</option>
					<option value="name">Name</option>
				</select>
			</div>
		)
	}

	render(){
		return(
			<nav>
				<img className="nav-bar-logo" src="https://i.imgur.com/qgkP0co.png"></img>
				{this.renderFilterDropdown()}
			</nav>
		)
	}
}

export default Navbar