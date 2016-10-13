import FileSystemManager from '../file-system';

const CONTENTS_FETCHED = 'CONTENTS_FETCHED';
const FOLDER_CHANGED = 'FOLDER_CHANGED';

const contentsFetched = (contents) => ({
	type: CONTENTS_FETCHED,
	contents
});

const folderChanged = (folderId, contents) => ({
	type: FOLDER_CHANGED,
	folderId,
	contents
});

const getDetails = (id) => {
	const contents = FileSystemManager.getContents(id);
	return contentsFetched(contents);
};

const changeFolder = (id) => {
	const contents = FileSystemManager.getContents(id);
	return folderChanged(id, contents);
};

export const constants = {
	CONTENTS_FETCHED,
	FOLDER_CHANGED
};

export const actions = {
	getDetails,
	changeFolder
};
