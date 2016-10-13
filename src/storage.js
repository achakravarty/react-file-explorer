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
}

const storageManager = new StorageManager(localStorage);
export default storageManager;
