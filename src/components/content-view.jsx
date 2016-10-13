import React from 'react';
import GridList from 'material-ui/GridList';
import Item from '../containers/item';

const ContentView = ({ contents }) => {
	const items = contents.map((item, index) => (
		<Item
			key={ index }
			id={ item.id }
			type={ item.type }
			name={ item.name }
		/>
	));
	return (
		<div className='contents'>
			<GridList
				cols={ 5 }
				style={ { padding: 20, height: '100%' } }>
				{ items }
			</GridList>
		</div>
	);
};

ContentView.propTypes = {
	contents: React.PropTypes.array.isRequired
};

export default ContentView;
