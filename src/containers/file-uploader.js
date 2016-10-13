import { connect } from 'react-redux';
import FileUploader from '../components/file-uploader';
import { actions as fileSystemActions } from '../actions/file-system';
import { actions as dialogActions } from '../actions/dialog';

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleDrop: (acceptedFiles) => {
		dispatch(dialogActions.close());
		dispatch(fileSystemActions.uploadFiles(acceptedFiles, ownProps.currentFolder));
	},
	close: () => {
		dispatch(dialogActions.close());
	}
});

const mapStateToProps = state => ({
	open: state.dialog.openUploader
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUploader);
