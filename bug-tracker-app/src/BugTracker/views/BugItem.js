import React, { Component } from 'react';

class BugItem extends React.Component{
	render(){
		let { bug, toggle } = this.props,
			bugNameItem = bug.isClosed ? 
				(<span className="bugname closed" onClick={() => toggle(bug)}>{bug.name}</span>) 
				: (<span className="bugname" onClick={() => toggle(bug)}>{bug.name}</span>) 
		return(
			<li>
				{bugNameItem}
				<div>[{bug.isClosed.toString()}]</div>
			</li>
		)
	}
}
export default BugItem;
