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
			<div className="filter-dropdown-container">
				<select className="filter-dropdown" onChange={this.updateFilterState}>
					<option selected="selected" value="">Default</option>
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
				<div className="filter-container">
					<h1>Order By</h1>
					{this.renderFilterDropdown()}
				</div>
			</nav>
		)
	}
}

export default Navbar

