const TOGGLE_MENU = 'TOGGLE_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

const closeMenu = () => ({
	type: CLOSE_MENU,
	open: false
});

const toggleMenu = (e, context, itemId) => {
	e.preventDefault();
	const position = { x: e.clientX, y: e.clientY };
	return {
		type: TOGGLE_MENU,
		position,
		context,
		itemId
	};
};

export const actions = {
	toggleMenu,
	closeMenu
};

export const constants = {
	TOGGLE_MENU,
	CLOSE_MENU
};
