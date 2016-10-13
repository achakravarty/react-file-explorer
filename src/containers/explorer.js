import { connect } from 'react-redux';
import Explorer from '../components/explorer';
import { actions as fileSystemActions } from '../actions/file-system';

const mapDispatchToProps = dispatch => ({
	getContents: (id) => {
		dispatch(fileSystemActions.getDetails(id));
	}
});

const mapStateToProps = state => ({
	currentFolder: state.fileSystem.currentFolder
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
