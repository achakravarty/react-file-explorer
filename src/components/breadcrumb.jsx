import React from 'react';
import { ToolbarTitle } from 'material-ui/Toolbar';

const Breadcrumb = ({ path }) => <ToolbarTitle text={ path } style={ { fontFamily: 'roboto' } } />;

Breadcrumb.propTypes = {
	path: React.PropTypes.string.isRequired,
};

export default Breadcrumb;
