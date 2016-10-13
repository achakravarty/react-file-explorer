import React from 'react';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Dropzone from 'react-dropzone';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Clear from 'material-ui/svg-icons/content/clear';
import { cyan500 } from 'material-ui/styles/colors';

const FileUploader = ({ open, close, handleDrop }) => (
	<Dialog title='Upload File' open={ open } onRequestClose={ close }>
		<IconButton style={ { position: 'fixed', top: 20, right: 15 } } onTouchTap={ close }>
			<Clear color={ cyan500 } />
		</IconButton>
		<Dropzone style={ { border: '1px dashed #eee', padding: 23, textAlign: 'center' } } onDrop={ handleDrop }>
			<div>
				<div>Try dropping some files here, or click to select files to upload.</div>
				<NoteAdd style={ { width: '100%', height: 100, margin: '20 0', cursor: 'pointer' } } color={ cyan500 } />
			</div>
		</Dropzone>
	</Dialog>
);

FileUploader.propTypes = {
	open: React.PropTypes.bool.isRequired,
	close: React.PropTypes.func.isRequired,
	handleDrop: React.PropTypes.func.isRequired
};

export default FileUploader;
