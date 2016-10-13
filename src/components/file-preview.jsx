import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import { cyan500 } from 'material-ui/styles/colors';

const renderPreview = (type, contents, name) => {
	if (type === 'image') {
		return <div style={ { padding: 20 } }><img src={ contents } alt={ name } style={ { height: '100%' } } /></div>;
	}
	return <div style={ { padding: 20 } }>{ contents }</div>;
};

class FilePreview extends Component {
	componentWillReceiveProps(props) {
		if (this.props.fileId !== props.fileId) {
			this.props.openFile(props.fileId);
		}
	}

	render() {
		const file = this.props.file;
		if (this.props.open && this.props.file) {
			return (
				<Dialog
					title={ file.name }
					open={ this.props.open }
					onRequestClose={ this.props.close } autoScrollBodyContent>
					<IconButton style={ { position: 'fixed', top: 20, right: 15 } } onTouchTap={ this.props.close }>
						<Clear color={ cyan500 } />
					</IconButton>
					{ renderPreview(file.type, file.contents, file.name) }
				</Dialog>
			);
		}
		return null;
	}
}

FilePreview.propTypes = {
	open: React.PropTypes.bool.isRequired,
	close: React.PropTypes.func.isRequired,
	fileId: React.PropTypes.string,
	file: React.PropTypes.object,
	openFile: React.PropTypes.func.isRequired
};

export default FilePreview;
