import React from 'react';



class Navbar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			filter: ""
		};

		this.updateFilterState = this.updateFilterState.bind(this);
	}

	updateFilterState(e){
		e.preventDefault();
		this.setState({filter: e.target.value});
	}

	componentDidUpdate(){
		this.props.selectFilter(this.state.filter);
	}


	renderFilterDropdown(){
		return(
			<div>
				<select onChange={this.updateFilterState}>
					<option selected="true" disabled="disabled">Select</option>
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

