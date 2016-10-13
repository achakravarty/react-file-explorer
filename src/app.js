import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import fileSystem from './reducers/file-system';
import FileSystemManager from './file-system';
import Explorer from './containers/explorer';

injectTapEventPlugin();
const folderStructure = FileSystemManager.getFolderStructure();

const rootReducer = combineReducers({
	fileSystem
});

const store = createStore(rootReducer,
	{ fileSystem: { currentFolder: 'root~', structure: folderStructure } },
	applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={ store }>
		<Explorer />
	</Provider>,
	document.getElementById('root')
);
