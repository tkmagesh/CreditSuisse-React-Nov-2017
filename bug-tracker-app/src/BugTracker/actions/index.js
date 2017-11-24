let bugActionCreators = {
	addNew : function(bugName){
		return { type : 'ADD_NEW', payload : bugName};
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