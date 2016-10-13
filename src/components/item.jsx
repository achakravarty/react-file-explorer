import React from 'react';
import { GridTile } from 'material-ui/GridList';

const typeToIconMap = {
	folder: 'Folder.png',
	text: 'doc.png',
	image: 'image.png'
};

const getItemIcon = (name, type) => {
	return <img src={ `/assets/images/${typeToIconMap[type]}` } alt={ name } style={ { height: '50%' } } />;
};

const Item = (
	{ id, type, name }
) => (
	<GridTile
		key={ `/assets/images/${typeToIconMap[type]}` }
		className='item'>
		<div style={ { textAlign: 'center', cursor: 'pointer' } }>
			<div style={ { margin: 10 } }>
				{ getItemIcon(name, type) }
			</div>
			<div>
				{ name }
			</div>
		</div>
	</GridTile>
);

Item.propTypes = {
	id: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired
};

export default Item;
