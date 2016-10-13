const OPEN_UPLOADER = 'OPEN_UPLOADER';
const OPEN_PREVIEW = 'OPEN_PREVIEW';
const CLOSE_DIALOG = 'CLOSE_DIALOG';

const open = () => ({
	type: OPEN_UPLOADER
});

const openPreview = id => ({
	type: OPEN_PREVIEW,
	id
});

const close = () => ({
	type: CLOSE_DIALOG
});

export const constants = {
	OPEN_UPLOADER,
	OPEN_PREVIEW,
	CLOSE_DIALOG
};

export const actions = {
	open,
	openPreview,
	close
};
