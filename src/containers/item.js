import { connect } from 'react-redux';
import Item from '../components/item';
import { actions as fileSystemActions } from '../actions/file-system';
import { actions as contextMenuActions } from '../actions/context-menu';

const mapDispatchToProps = (dispatch, ownProps) => ({
	changeFolder: (id, type) => {
		if (type === 'folder') {
			dispatch(fileSystemActions.changeFolder(id));
		} else {
			// Open File
		}
	},
	doneEditing: (newName) => {
		dispatch(fileSystemActions.doneEditing(ownProps.id, ownProps.currentFolder, newName));
	},
	openContextMenu: (e, id) => {
		dispatch(contextMenuActions.toggleMenu(e, 'item', id));
	}
});

export default connect(null, mapDispatchToProps)(Item);
