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
		this.setState({filter: e.currentTarget.getAttribute("value")});
	}

	componentDidUpdate(){
		this.props.selectFilter(this.state.filter);
	}


	renderFilterDropdown(){
		return(
			<div className="dropdown">
			  <button className="dropbtn">Select...</button><i class="fas fa-caret-down"></i>
			  <div className="dropdown-content">
			  	<ul>
			    	<li onClick={this.updateFilterState} value="">Default</li>
			    	<li onClick={this.updateFilterState} value="position">Position</li>
			    	<li onClick={this.updateFilterState} value="name">Name</li>
			    </ul>
			  </div>
			</div>
		)
	}

	render(){
		return(
			<nav>
				<img className="nav-bar-logo" src="https://i.imgur.com/qgkP0co.png"></img>
				<div className="filter-container">
					<h1>Order by</h1>
					{this.renderFilterDropdown()}
				</div>
			</nav>
		)
	}
}

export default Navbar

