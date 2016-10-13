import { connect } from 'react-redux';
import Breadcrumb from '../components/breadcrumb';

const mapStateToProps = state => ({
	path: state.fileSystem.path,
	currentFolder: state.fileSystem.currentFolder
});

export default connect(mapStateToProps, null)(Breadcrumb);
