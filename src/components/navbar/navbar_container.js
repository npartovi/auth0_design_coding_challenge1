import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFilter } from '../../actions/index';

import Navbar from './navbar';


const mapDispatchToProps = (dispatch) => {
	return(
		{
			selectFilter: (filter) => dispatch(selectFilter(filter))
		}

	)
};

export default connect(null, mapDispatchToProps)(Navbar);