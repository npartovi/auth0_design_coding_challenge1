import { connect } from 'react-redux';
import { selectFilter } from '../../actions/index';
import Navbar from './navbar';

const mapDispatchToProps = (dispatch) => ({
	selectFilter: (filter) => dispatch(selectFilter(filter))
});

export default connect(null, mapDispatchToProps)(Navbar);