import React from 'react';
import { GridTile } from 'material-ui/GridList';
import TextField from 'material-ui/TextField';

const typeToIconMap = {
	folder: 'Folder.png',
	text: 'doc.png',
	image: 'image.png'
};

const handleKeyUp = (e, isEditing, handler) => {
	if (isEditing) {
		if (e.key === 'Enter') {
			handler(e.target.value);
		}
	}
};

const getTextField = name => (
	<TextField id='rename' defaultValue={ name } className='rename' style={ { width: '90%' } } />
);

const handleDoubleClick = (id, isEditing, type, handler) => {
	if (!isEditing) {
		handler(id, type);
	}
};

const getItemIcon = (preview, name, type) => {
	if (preview) {
		return <img src={ preview } alt={ name } style={ { height: '50%' } } />;
	}
	return <img src={ `./assets/images/${typeToIconMap[type]}` } alt={ name } style={ { height: '50%' } } />;
};

const Item = (
	{ id, type, name, preview, changeFolder, isEditing, doneEditing, openContextMenu }
) => (
	<GridTile
		key={ `./assets/images/${typeToIconMap[type]}` }
		onDoubleClick={ () => { handleDoubleClick(id, isEditing, type, changeFolder); } }
		onContextMenu={ (e) => { openContextMenu(e, id); } }
		onKeyUp={ (e) => { handleKeyUp(e, isEditing, doneEditing); } }
		className='item'>
		<div style={ { textAlign: 'center', cursor: 'pointer' } }>
			<div style={ { margin: 10 } }>
				{ getItemIcon(preview, name, type) }
			</div>
			<div>
				{ isEditing ? getTextField(name) : name }
			</div>
		</div>
	</GridTile>
);

Item.propTypes = {
	id: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	preview: React.PropTypes.string,
	isEditing: React.PropTypes.bool,
	doneEditing: React.PropTypes.func.isRequired,
	changeFolder: React.PropTypes.func.isRequired,
	openContextMenu: React.PropTypes.func
};

export default Item;
