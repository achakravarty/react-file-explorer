import React from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { IconStyle, HighlightItemStyle } from '../style';

const typeToIconMap = {
	folder: 'Folder.png',
	text: 'doc.png',
	image: 'image.png'
};

const getIcon = type => <Avatar src={ `/assets/images/${typeToIconMap[type]}` } style={ IconStyle } />;

const SidebarItem = ({ id, name, type, nestedItems, nestedLevel, open, changeFolder }) =>
	<ListItem
		primaryText={ name }
		nestedItems={ nestedItems }
		nestedLevel={ nestedLevel }
		open={ open }
		leftIcon={ getIcon(type) }
		onTouchTap={ () => { changeFolder(id, type); } }
		style={ open ? HighlightItemStyle : {} }
	/>;

SidebarItem.propTypes = {
	id: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	nestedLevel: React.PropTypes.number,
	nestedItems: React.PropTypes.arrayOf(React.PropTypes.element),
	open: React.PropTypes.bool,
	changeFolder: React.PropTypes.func
};

export default SidebarItem;
