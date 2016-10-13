import { connect } from 'react-redux';
import ContextMenu from '../components/context-menu';
import { actions as contextMenuActions } from '../actions/context-menu';
import { actions as fileSystemActions } from '../actions/file-system';

const mapDispatchToProps = (dispatch, ownProps) => ({
	closeMenu: () => {
		dispatch(contextMenuActions.closeMenu());
	},
	createNewItem: (type) => {
		dispatch(contextMenuActions.closeMenu());
		if (type === 'folder') {
			dispatch(fileSystemActions.createFolder(ownProps.currentFolder));
		} else if (type === 'file') {
			dispatch(fileSystemActions.createFile(ownProps.currentFolder));
		}
	},
	copyItem: (id) => {
		dispatch(contextMenuActions.closeMenu());
		dispatch(fileSystemActions.copy(id));
	},
	cutItem: (id) => {
		dispatch(contextMenuActions.closeMenu());
		dispatch(fileSystemActions.cut(id, ownProps.currentFolder));
	},
	pasteItem: () => {
		dispatch(contextMenuActions.closeMenu());
		dispatch(fileSystemActions.paste(ownProps.currentFolder));
	},
	renameItem: (id) => {
		dispatch(contextMenuActions.closeMenu());
		dispatch(fileSystemActions.startEditing(id, ownProps.currentFolder));
	}
});

const mapStateToProps = state => ({
	currentFolder: state.fileSystem.currentFolder,
	open: state.contextMenu.open,
	position: state.contextMenu.position,
	context: state.contextMenu.context,
	itemId: state.contextMenu.itemId
});

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
