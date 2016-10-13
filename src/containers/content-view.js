import { connect } from 'react-redux';
import ContentView from '../components/content-view';

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
	currentFolder: state.fileSystem.currentFolder,
	contents: state.fileSystem.contents
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentView);
