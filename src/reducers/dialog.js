import { constants } from '../actions/dialog';

export default function dialog(state = { openUploader: false }, action) {
	switch (action.type) {
	case constants.OPEN_UPLOADER: {
		return {
			...state,
			openUploader: true
		};
	}
	case constants.CLOSE_DIALOG: {
		return {
			...state,
			openUploader: false
		};
	}
	default: return state;
	}
}
