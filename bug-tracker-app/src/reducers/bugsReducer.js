


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
	console.log(action);
	if (action.type === 'LOADED'){
		return { 
			bugs : action.payload, 
			by : currentState.by, 
			isDecending : currentState.isDecending 
		};
	}
	if (action.type === 'ADDED'){
		let newBug = action.payload;
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
		let result = [...currentState.bugs.sort(comparer)];
		console.table(result);
		return { 
			bugs : result, 
			by : action.payload.by, 
			isDecending : action.payload.isDecending 
		};
	}
	return currentState;
}
export default bugsReducer;
