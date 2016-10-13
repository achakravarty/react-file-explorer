import { constants } from '../actions/context-menu';

export default function contextMenu(state = { open: false, position: { x: 0, y: 0 }, context: '', itemId: '' }, action) {
	switch (action.type) {
	case constants.TOGGLE_MENU: {
		const { position, context, itemId } = action;
		if (position.x === state.position.x &&
			position.y === state.position.y &&
			context !== state.context) {
			return { ...state };
		}
		return {
			...state,
			open: !state.open,
			position,
			context,
			itemId
		};
	}
	case constants.CLOSE_MENU: return {
		...state,
		open: false
	};
	default: return state;
	}
}
