import { constants } from '../actions/dialog';

export default function dialog(state = { openPreview: false, openUploader: false }, action) {
	switch (action.type) {
	case constants.OPEN_UPLOADER: {
		return {
			...state,
			openUploader: true
		};
	}
	case constants.OPEN_PREVIEW: {
		return {
			...state,
			openPreview: true,
			id: action.id
		};
	}
	case constants.CLOSE_DIALOG: {
		return {
			...state,
			openPreview: false,
			openUploader: false
		};
	}
	default: return state;
	}
}
