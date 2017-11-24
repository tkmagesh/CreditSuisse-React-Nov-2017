import React, { Component } from 'react';
import BugItem from './BugItem';

let BugList = ({bugs, toggle, removeClosed}) => {
	let bugItems = bugs.map((bug, index) => (
		<BugItem bug={bug} key={index} toggle={toggle}/>
	));
	return (
		<section className="list">
			<ol>
				{bugItems}
			</ol>
			<input type="button" value="Remove Closed" onClick={removeClosed}/>
		</section>
	)
}
export default BugList;