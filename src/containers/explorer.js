import { connect } from 'react-redux';
import Explorer from '../components/explorer';
import { actions as fileSystemActions } from '../actions/file-system';
import { actions as dialogActions } from '../actions/dialog';

const mapDispatchToProps = dispatch => ({
	getContents: (id) => {
		dispatch(fileSystemActions.getDetails(id));
	},
	openUploader: (action) => {
		dispatch(dialogActions.open(action));
	}
});

const mapStateToProps = state => ({
	currentFolder: state.fileSystem.currentFolder
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
