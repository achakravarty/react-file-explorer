import React from 'react';
import GridList from 'material-ui/GridList';
import Item from '../containers/item';
import ContextMenu from '../containers/context-menu';

const ContentView = ({ contents, currentFolder, toggleContextMenu, closeMenu }) => {
	const items = contents.map((item, index) => (
		<Item
			key={ index }
			id={ item.id }
			type={ item.type }
			name={ item.name }
			preview={ item.preview }
			currentFolder={ currentFolder }
			isEditing={ item.isEditing }
		/>
	));
	return (
		<div className='contents'>
			<GridList
				cols={ 5 }
				onClick={ closeMenu }
				onContextMenu={ toggleContextMenu }
				style={ { padding: 20, height: '100%' } }>
				{ items }
			</GridList>
			<ContextMenu currentFolder={ currentFolder } />
		</div>
	);
};

ContentView.propTypes = {
	currentFolder: React.PropTypes.string.isRequired,
	contents: React.PropTypes.array.isRequired,
	toggleContextMenu: React.PropTypes.func.isRequired,
	closeMenu: React.PropTypes.func.isRequired
};

export default ContentView;
