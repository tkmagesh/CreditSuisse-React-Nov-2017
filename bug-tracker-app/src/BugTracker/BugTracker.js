import React, { Component } from 'react';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugList from './views/BugList';
import BugEdit from './views/BugEdit';

import bugActionCreators from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let BugTracker = ({ bugs, toggle, removeClosed, addNew, sort }) => {
	return (
		<div>
			<BugStats bugs={bugs} />
			<BugSort sort={sort} />
			<BugEdit addNew={addNew} />
			<BugList {...{bugs, toggle, removeClosed}} />
		</div>
	);
};

export default connect(
	({bugState}) => ({bugs : bugState.bugs}),
	(dispatch) => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);



