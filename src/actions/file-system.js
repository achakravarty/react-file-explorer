import FileSystemManager from '../file-system';

const CONTENTS_FETCHED = 'CONTENTS_FETCHED';

const contentsFetched = (contents) => ({
	type: CONTENTS_FETCHED,
	contents
});

const getDetails = (id) => {
	const contents = FileSystemManager.getContents(id);
	return contentsFetched(contents);
};

export const constants = {
	CONTENTS_FETCHED
};

export const actions = {
	getDetails
};
