import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const contextMenuItems = {
	contentView: handlers => ([
		<MenuItem primaryText='Create Folder' onClick={ () => handlers.createNewItem('folder') } key='create_folder' />,
		<MenuItem primaryText='Create File' onClick={ () => handlers.createNewItem('file') } key='create_file' />,
		<Divider key='divider' />,
		<MenuItem primaryText='Paste' onClick={ () => handlers.pasteItem() } key='paste' />
	]),
	item: (handlers, itemId) => ([
		<MenuItem
			primaryText='Rename'
			onClick={ () => handlers.renameItem(itemId) }
			key='rename'
		/>,
		<Divider key='divider' />,
		<MenuItem primaryText='Cut' onClick={ () => handlers.cutItem(itemId) } key='cut' />,
		<MenuItem primaryText='Copy' onClick={ () => handlers.copyItem(itemId) } key='copy' />
	])
};

const getContextMenuItems =
	(context, handlers, itemId) => contextMenuItems[context](handlers, itemId);

const ContextMenu = (
	{ open, position, context, createNewItem, itemId, copyItem, cutItem, pasteItem, renameItem }
) => {
	if (open) {
		return (
			<div style={ { position: 'absolute', top: position.y, left: position.x } }>
				<div>
					<Paper zDepth={ 2 }>
						<Menu desktop style={ { border: '1px solid #eee' } }>
							{ getContextMenuItems(context,
									{ createNewItem, copyItem, cutItem, pasteItem, renameItem },
									itemId)
							}
						</Menu>
					</Paper>
				</div>
			</div>
		);
	}
	return null;
};

ContextMenu.propTypes = {
	open: React.PropTypes.bool.isRequired,
	position: React.PropTypes.object.isRequired,
	context: React.PropTypes.string.isRequired,
	createNewItem: React.PropTypes.func.isRequired,
	copyItem: React.PropTypes.func.isRequired,
	cutItem: React.PropTypes.func.isRequired,
	pasteItem: React.PropTypes.func.isRequired,
	renameItem: React.PropTypes.func.isRequired,
	itemId: React.PropTypes.string,
};

export default ContextMenu;
