import React, { Component } from 'react';

class BugSort extends Component{
	onSortChange(){
		let sortPayload  = {
			by : this.refs.sortBy.value,
			isDecending : this.refs.isDecending.checked
		};
		this.props.sort(sortPayload);
	}
	render(){
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select ref="sortBy" onChange={this.onSortChange.bind(this)}>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" ref="isDecending" onChange={this.onSortChange.bind(this)}/>
			</section>
		)
	}
}

export default BugSort;