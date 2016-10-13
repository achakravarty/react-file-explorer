import { connect } from 'react-redux';
import SidebarItem from '../components/sidebar-item';
import { actions as fileSystemActions } from '../actions/file-system';

const mapDispatchToProps = dispatch => ({
	changeFolder: (id, type) => {
		if (type === 'folder') {
			dispatch(fileSystemActions.changeFolder(id));
		}
	}
});

export default connect(null, mapDispatchToProps)(SidebarItem);
