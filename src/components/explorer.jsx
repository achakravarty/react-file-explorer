import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

import Sidebar from '../containers/sidebar';
import ContentView from '../containers/content-view';

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
							<ToolbarTitle text='breadbrumb' />
						</ToolbarGroup>
					</Toolbar>
					<Sidebar />
					<ContentView />
				</div>
			</MuiThemeProvider>
		);
	}
}

FileExplorer.propTypes = {
	getContents: React.PropTypes.func.isRequired,
	currentFolder: React.PropTypes.string.isRequired
};

export default FileExplorer;
