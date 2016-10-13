import { connect } from 'react-redux';
import FilePreview from '../components/file-preview';
import { actions as fileSystemActions } from '../actions/file-system';
import { actions as dialogActions } from '../actions/dialog';

const mapDispatchToProps = dispatch => ({
	openFile: (fileId) => {
		dispatch(fileSystemActions.openFile(fileId));
	},
	close: () => {
		dispatch(dialogActions.close());
	}
});

const mapStateToProps = state => ({
	open: state.dialog.openPreview,
	fileId: state.dialog.id,
	file: state.fileSystem.file
});

export default connect(mapStateToProps, mapDispatchToProps)(FilePreview);
