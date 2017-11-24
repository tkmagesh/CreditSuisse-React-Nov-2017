import React, { Component } from 'react';

class BugEdit extends Component{
	onCreateClick(){
		let bugName = this.refs.txtBugName.value;
		this.props.addNew(bugName);
	}
	render(){
		return (
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref="txtBugName" />
				<input type="button" value="Create" onClick={this.onCreateClick.bind(this)}/>
			</section>
		);
	}
}
export default BugEdit;