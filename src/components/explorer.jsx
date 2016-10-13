import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import Sidebar from '../containers/sidebar';
import ContentView from '../containers/content-view';
import Breadcrumb from '../containers/breadcrumb';
import FileUploader from '../containers/file-uploader';

class FileExplorer extends Component {
	componentWillMount() {
		this.props.getContents(this.props.currentFolder);
	}

	shouldComponentUpdate(nextProps) {
		return this.props.currentFolder !== nextProps.currentFolder;
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<AppBar title='React File Explorer' />
					<Toolbar>
						<ToolbarGroup>
							<Breadcrumb />
						</ToolbarGroup>
						<ToolbarGroup>
							<RaisedButton label='Upload File' primary onTouchTap={ this.props.openUploader } />
						</ToolbarGroup>
					</Toolbar>
					<Sidebar />
					<ContentView />
					<FileUploader currentFolder={ this.props.currentFolder } />
				</div>
			</MuiThemeProvider>
		);
	}
}

FileExplorer.propTypes = {
	getContents: React.PropTypes.func.isRequired,
	currentFolder: React.PropTypes.string.isRequired,
	openUploader: React.PropTypes.func.isRequired
};

export default FileExplorer;
