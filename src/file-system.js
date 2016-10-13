import _ from 'lodash';
import storageManager from './storage';

const newFolderTemplate = {
	name: 'New Folder',
	type: 'folder',
	contents: []
};

const newFileTemplate = {
	name: 'New Text Doc',
	type: 'text',
	contents: ''
};

const getUpdatedName = (name, existingNames) => {
	if (existingNames.some(existing => existing === name)) {
		let newName;
		if (name.match(/\((\d+)\)$/)) {
			newName = name.replace(/\((\d+)\)$/, (match, capture) => {
				const postFix = parseInt(capture, 10) + 1;
				return `(${postFix})`;
			});
		} else {
			newName = `${name} (1)`;
		}
		return getUpdatedName(newName, existingNames);
	}
	return name;
};

class FileSystemManager {
	static getFolder(id) {
		return storageManager.getItem(id);
	}

	static getFolderStructure() {
		return storageManager.getFullTree();
	}

	static getContents(id) {
		return storageManager.getDescendants(id);
	}

	static createFolder(parentId) {
		let { name, ...contents } = { ...newFolderTemplate };
		const children = storageManager.getDescendants(parentId);
		if (children) {
			name = getUpdatedName(name, children.map(child => child.name));
		}
		const newFolderId = storageManager.createItem({ name, ...contents });
		return newFolderId;
	}

	static update(id, updatedItem) {
		const item = storageManager.getItem(id);
		const mergedItem = Object.assign({}, item, updatedItem);
		let mergedContents;
		if (item.type === 'text') {
			mergedContents = updatedItem.contents;
		} else if (item.type === 'folder') {
			mergedContents = _.union(item.contents, updatedItem.contents);
		}
		storageManager.updateItem(id, { ...mergedItem, contents: mergedContents });
		storageManager.updateTree();
	}

	static createFile(parentId) {
		let { name, ...contents } = { ...newFileTemplate };
		const children = storageManager.getDescendants(parentId);
		if (children && children.some(child => child.name === name)) {
			name = getUpdatedName(name, children.map(child => child.name));
		}
		const fileId = storageManager.createItem({ name, ...contents });
		return fileId;
	}

	static copy(id) {
		storageManager.copyToClipboard({ id, operation: 'copy' });
	}

	static cut(id, currentFolderId) {
		storageManager.copyToClipboard({ id, currentFolderId, operation: 'cut' });
	}

	static paste(currentFolderId) {
		storageManager.paste(currentFolderId);
		storageManager.updateTree();
	}
}

export default FileSystemManager;
