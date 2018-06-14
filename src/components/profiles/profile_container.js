import React from 'react';
import { connect } from 'react-redux';
import ProfileList from './profile';

const mapStateToProps = (state) => ({
	profiles: state.profiles,
	filter: state.filter


});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, null)(ProfileList);