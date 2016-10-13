class StorageManager {
	constructor(storage) {
		this.storage = storage;
	}

	getItem(id) {
		const item = this.storage.getItem(id);
		return { id, ...JSON.parse(item) };
	}

	getFullTree() {
		if (!this.tree) {
			this.updateTree();
		}
		return { ...this.tree };
	}

	updateTree() {
		this.tree = this.getSubTree('root~', this.getItem('root~'));
	}

	getSubTree(id, node) {
		const current = { ...node };
		if (current.type === 'folder') {
			current.children = current.contents.map(child => this.getSubTree(child, this.getItem(child)));
		}
		return { ...current };
	}

	getDescendants(itemId) {
		const current = this.findItemInTree(itemId, null, item => item.type === 'folder');
		const descendants = current.children
			.map(({ id, name, type, preview }) => ({ id, name, type, preview }));
		return descendants;
	}

	findItemInTree(id, node, predicate) {
		const current = node || this.tree;
		const condition = predicate || (() => true);
		if (current.id === id) {
			return { ...current };
		}
		let result;
		current.children.filter(condition).forEach((child) => {
			result = result || this.findItemInTree(id, child, predicate);
		});
		return result;
	}

	createItem(contents) {
		const id = btoa(Date.now());
		this.storage.setItem(id, JSON.stringify(contents));
		return id;
	}

	updateItem(id, newContents) {
		const item = this.getItem(id);
		const updatedItem = Object.assign(item, newContents);
		this.storage.setItem(id, JSON.stringify(updatedItem));
	}

	copyToClipboard(...args) {
		this.clipboard = { ...args[0] };
	}

	paste(currentFolderId) {
		if (this.clipboard) {
			const clipboard = this.clipboard;
			if (clipboard.operation === 'copy') {
				const { id } = clipboard;
				this.duplicateItems(currentFolderId, id);
			} else if (clipboard.operation === 'cut') {
				const { id, currentFolderId: oldFolder } = clipboard;
				this.moveItems(id, oldFolder, currentFolderId);
			}
		}
	}

	duplicateItems(currentFolderId, id) {
		const item = this.getItem(id);
		if (item.type === 'folder') {
			item.contents.forEach(child => this.pasteItems(item.id, child));
		}
		const newItemId = this.createItem(item);
		this.updateItem(currentFolderId, { contents: [newItemId] });
	}

	moveItems(id, oldFolder, newFolder) {
		const newFolderContents = this.getItem(newFolder);
		const mergedContents = newFolderContents.contents.concat([id]);
		this.updateItem(newFolder, { ...newFolderContents, contents: mergedContents });

		const oldFolderContents = this.getItem(oldFolder);
		const indexToRemove = oldFolderContents.contents.indexOf(id);
		oldFolderContents.contents.splice(indexToRemove, 1);
		this.updateItem(oldFolder, { ...oldFolderContents });
	}

	getCurrentPath(id, node, path) {
		const current = node || this.tree;
		const result = path || '';
		if (current.id === id) {
			return `${result} / ${current.name}`;
		}
		if (current.type === 'folder') {
			for (const child of current.children) {
				const currentPath = this.getCurrentPath(id, child, current.name);
				if (currentPath) {
					return `${result} / ${currentPath}`;
				}
			}
		}
		return null;
	}
}

const storageManager = new StorageManager(localStorage);
export default storageManager;
