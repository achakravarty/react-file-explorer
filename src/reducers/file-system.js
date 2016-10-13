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
	default: return state;
	}
}
