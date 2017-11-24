import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './actions';

let Spinner = ({value, increment, decrement}) =>(
	<div>
		<input type="button" value="DECREMENT" onClick={decrement}/>
		<span> [ {value} ] </span>
		<input type="button" value="INCREMENT" onClick={increment}/>
	</div>
);

export default connect(
	(state) => ({value : state.spinnerState}),
	(dispatch) => bindActionCreators(spinnerActionCreators, dispatch)
)(Spinner);
