function getComparer(attrName){
	return function(item1, item2){
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

function getDescending(comparer){
	return function(){
		return comparer.apply(undefined, arguments) * -1;
	}
}

let defaultBugState = {
	bugs : [],
	by : 'name',
	isDecending : false
};

function bugsReducer(currentState = defaultBugState, action){
	if (action.type === 'ADD_NEW'){
		let newBug = { name : action.payload, isClosed : false };
		let bugs = [...currentState.bugs, newBug];
		let comparer = getComparer(currentState.by);
		if (currentState.isDecending)
			comparer = getDescending(comparer);
		return { 
			bugs : bugs.sort(comparer), 
			by : currentState.by, 
			isDecending : currentState.isDecending 
		};
	}
	if (action.type === 'TOGGLE'){
		let bugToToggle = action.payload,
			toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		let bugs = currentState.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
		return { 
			bugs : bugs, 
			by : currentState.by, 
			isDecending : currentState.isDecending 
		};
	}
	if (action.type === 'REMOVE_CLOSED'){
		let bugs = currentState.bugs.filter(bug => !bug.isClosed);
		return { 
			bugs : bugs, 
			by : currentState.by, 
			isDecending : currentState.isDecending 
		};
	}
	if (action.type === 'SORT'){
		let comparer = getComparer(action.payload.by);
		if (action.payload.isDecending)
			comparer = getDescending(comparer);
		return { 
			bugs : currentState.bugs.sort(comparer), 
			by : action.payload.by, 
			isDecending : action.payload.isDecending 
		};
	}
	return currentState;
}
export default bugsReducer;
