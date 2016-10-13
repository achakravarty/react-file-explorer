import { constants } from '../actions/file-system';

export default function fileSystem(state = {}, action) {
	switch (action.type) {
	case constants.CONTENTS_FETCHED: {
		const { contents } = action;
		return {
			...state,
			contents
		};
	}
	case constants.FOLDER_CHANGED: {
		const { contents, folderId } = action;
		return {
			...state,
			currentFolder: folderId,
			contents
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
		return {
			...state,
			contents: action.contents
		};
	}
	default: return state;
	}
}
