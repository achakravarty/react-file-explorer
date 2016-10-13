import storageManager from './storage';

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
}

export default FileSystemManager;
