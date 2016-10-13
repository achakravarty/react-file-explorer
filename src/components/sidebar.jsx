import React, { Component } from 'react';
import List from 'material-ui/List';
import SidebarItem from '../containers/sidebar-item';

class Sidebar extends Component {
	constructor() {
		super();
		this.getIsOpen = this.getIsOpen.bind(this);
	}

	getFolderList(contents, key, level) {
		const { children, ...details } = contents;
		if (children) {
			const nested = children.map((child, index) => this.getFolderList(child, index, level + 1));
			if (nested.length > 0) {
				return (
					<SidebarItem
						{ ...details }
						open={ this.getIsOpen(details.id, children) }
						nestedItems={ nested }
						key={ key }
						nestedLevel={ level }
					/>);
			}
		}
		return <SidebarItem { ...details } key={ key } nestedLevel={ level } />;
	}

	getIsOpen(id, children) {
		return this.props.currentFolder === id ||
			(children && children.some(child => this.getIsOpen(child.id, child.children)));
	}

	render() {
		const list = this.getFolderList(this.props.folderStructure, 0, 0);
		return (
			<div style={ { float: 'left', width: '20%', boxShadow: '2px 2px 5px #eee', border: '1px solid #eee' } }>
				<List>
					{ list }
				</List>
			</div>
		);
	}
}

Sidebar.propTypes = {
	folderStructure: React.PropTypes.object.isRequired,
	currentFolder: React.PropTypes.string.isRequired
};

export default Sidebar;
