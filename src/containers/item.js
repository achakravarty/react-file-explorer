import { connect } from 'react-redux';
import Item from '../components/item';
import { actions as fileSystemActions } from '../actions/file-system';

const mapDispatchToProps = (dispatch, ownProps) => ({
	changeFolder: (id, type) => {
		if (type === 'folder') {
			dispatch(fileSystemActions.changeFolder(id));
		} else {
			// Open File
		}
	}
});

export default connect(null, mapDispatchToProps)(Item);
