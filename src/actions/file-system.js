import FileSystemManager from '../file-system';

const CONTENTS_FETCHED = 'CONTENTS_FETCHED';
const FOLDER_CHANGED = 'FOLDER_CHANGED';
const NEW_ITEM_CREATED = 'NEW_ITEM_CREATED';
const ITEM_COPIED = 'ITEM_COPIED';
const ITEM_CUT = 'ITEM_CUT';
const ITEM_PASTED = 'ITEM_PASTED';
const ITEM_EDITING = 'ITEM_EDITING';

const contentsFetched = (contents, path) => ({
	type: CONTENTS_FETCHED,
	contents,
	path
});

const folderChanged = (folderId, contents, path) => ({
	type: FOLDER_CHANGED,
	folderId,
	contents,
	path
});

const itemCreated = (structure, contents) => ({
	type: NEW_ITEM_CREATED,
	structure,
	contents
});

const itemCopied = () => ({
	type: ITEM_COPIED
});

const itemCut = () => ({
	type: ITEM_CUT
});

const itemPasted = (structure, contents) => ({
	type: ITEM_PASTED,
	structure,
	contents
});

const startedEditing = contents => ({
	type: ITEM_EDITING,
	contents
});

const getDetails = (id) => {
	const contents = FileSystemManager.getContents(id);
	const path = FileSystemManager.getCurrentPath(id);
	return contentsFetched(contents, path);
};

const changeFolder = (id) => {
	const contents = FileSystemManager.getContents(id);
	const path = FileSystemManager.getCurrentPath(id);
	return folderChanged(id, contents, path);
};

const update = (itemIds, currentFolderId) => {
	FileSystemManager.update(currentFolderId, { contents: [...itemIds] });

	const folderStructure = FileSystemManager.getFolderStructure();
	const contents = FileSystemManager.getContents(currentFolderId);
	return itemCreated(folderStructure, contents);
};

const createFolder = (currentFolderId) => {
	const newFolderId = FileSystemManager.createFolder(currentFolderId);
	return update([newFolderId], currentFolderId);
};

const createFile = (currentFolderId) => {
	const newFileId = FileSystemManager.createFile(currentFolderId);
	return update([newFileId], currentFolderId);
};

const copy = (id) => {
	FileSystemManager.copy(id);
	return itemCopied();
};

const cut = (id, currentFolderId) => {
	FileSystemManager.cut(id, currentFolderId);
	return itemCut();
};

const paste = (currentFolderId) => {
	FileSystemManager.paste(currentFolderId);

	const folderStructure = FileSystemManager.getFolderStructure();
	const contents = FileSystemManager.getContents(currentFolderId);
	return itemPasted(folderStructure, contents);
};

const startEditing = (itemId, currentFolderId) => {
	const contents = FileSystemManager.getContents(currentFolderId);
	const itemToRename = contents.find(item => item.id === itemId);
	contents.splice(contents.indexOf(itemToRename), 1, { ...itemToRename, isEditing: true });
	return startedEditing(contents);
};

const doneEditing = (itemId, currentFolderId, newName) => {
	FileSystemManager.update(itemId, { name: newName });

	const folderStructure = FileSystemManager.getFolderStructure();
	const contents = FileSystemManager.getContents(currentFolderId);
	return itemCreated(folderStructure, contents);
};


export const constants = {
	CONTENTS_FETCHED,
	FOLDER_CHANGED,
	NEW_ITEM_CREATED,
	ITEM_COPIED,
	ITEM_CUT,
	ITEM_PASTED,
	ITEM_EDITING
};

export const actions = {
	getDetails,
	changeFolder,
	createFolder,
	createFile,
	copy,
	cut,
	paste,
	startEditing,
	doneEditing
};
