import { connect } from 'react-redux';
import Sidebar from '../components/sidebar';

const mapStateToProps = state => ({
	folderStructure: state.fileSystem.structure,
	currentFolder: state.fileSystem.currentFolder
});

export default connect(mapStateToProps, null)(Sidebar);
