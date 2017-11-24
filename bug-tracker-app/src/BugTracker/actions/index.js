import axios  from 'axios';

let bugActionCreators = {
	load : function(){
		return function(dispatch){
			axios.get('http://localhost:3000/bugs')
				.then(response => dispatch({
					type : 'LOADED',
					payload : response.data
				}));
		}
	},
	addNew : function(bugName){
		return function(dispatch){
			let newBug = { id : 0, name : bugName, isClosed : false, createdAt : new Date()};
			axios.post('http://localhost:3000/bugs', newBug)
				.then(response => dispatch({
					type : 'ADDED',
					payload : response.data
				}));
		}
	},
	toggle : function(bugToToggle){
		return { type : 'TOGGLE', payload : bugToToggle}
	},
	removeClosed : function(){
		return { type : 'REMOVE_CLOSED'};
	},
	sort : function(sortPayload){
		return { type : 'SORT', payload : sortPayload }
	}

}
export default bugActionCreators;