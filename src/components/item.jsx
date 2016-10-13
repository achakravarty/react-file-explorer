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

const getItemIcon = (name, type) => {
	return <img src={ `/assets/images/${typeToIconMap[type]}` } alt={ name } style={ { height: '50%' } } />;
};

const Item = (
	{ id, type, name, changeFolder, isEditing, doneEditing, openContextMenu }
) => (
	<GridTile
		key={ `/assets/images/${typeToIconMap[type]}` }
		onDoubleClick={ () => { handleDoubleClick(id, type, changeFolder); } }
		onContextMenu={ (e) => { openContextMenu(e, id); } }
		onKeyUp={ (e) => { handleKeyUp(e, isEditing, doneEditing); } }
		className='item'>
		<div style={ { textAlign: 'center', cursor: 'pointer' } }>
			<div style={ { margin: 10 } }>
				{ getItemIcon(name, type) }
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
	isEditing: React.PropTypes.bool,
	doneEditing: React.PropTypes.func.isRequired,
	changeFolder: React.PropTypes.func.isRequired,
	openContextMenu: React.PropTypes.func
};

export default Item;
