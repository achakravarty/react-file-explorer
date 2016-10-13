import { constants } from '../actions/file-system';

export default function fileSystem(state = {}, action) {
	switch (action.type) {
	case constants.CONTENTS_FETCHED: {
		const { contents, path } = action;
		return {
			...state,
			contents,
			path
		};
	}
	case constants.FOLDER_CHANGED: {
		const { contents, folderId, path } = action;
		return {
			...state,
			currentFolder: folderId,
			contents,
			path
		};
	}
	case constants.NEW_ITEM_CREATED:
	case constants.ITEM_PASTED:	{
		const { contents, structure } = action;
		return {
			...state,
			contents,
			structure
		};
	}
	case constants.ITEM_EDITING: {
		return { ...state, contents: action.contents };
	}
	case constants.FILE_OPENED: {
		const { file } = action;
		return {
			...state,
			file
		}
	}
	default: return state;
	}
}
