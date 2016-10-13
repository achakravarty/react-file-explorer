const OPEN_UPLOADER = 'OPEN_UPLOADER';
const CLOSE_DIALOG = 'CLOSE_DIALOG';

const open = () => ({
	type: OPEN_UPLOADER
});

const close = () => ({
	type: CLOSE_DIALOG
});

export const constants = {
	OPEN_UPLOADER,
	CLOSE_DIALOG
};

export const actions = {
	open,
	close
};
