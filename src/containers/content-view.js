import { connect } from 'react-redux';
import ContentView from '../components/content-view';
import { actions as contextMenuActions } from '../actions/context-menu';

const mapDispatchToProps = dispatch => ({
	toggleContextMenu: (e) => {
		dispatch(contextMenuActions.toggleMenu(e, 'contentView'));
	},
	closeMenu: (e) => {
		dispatch(contextMenuActions.closeMenu(e));
	}
});

const mapStateToProps = state => ({
	currentFolder: state.fileSystem.currentFolder,
	contents: state.fileSystem.contents
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentView);
