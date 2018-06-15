import { connect } from 'react-redux';
import ProfileList from './profile';

const mapStateToProps = (state) => ({
	profiles: state.profiles,
	filter: state.filter
});

export default connect(mapStateToProps, null)(ProfileList);