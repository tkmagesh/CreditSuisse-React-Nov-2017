function spinnerReducer(currentState = 0, action){
	if (action.type === 'INCREMENT')
		return ++currentState;
	if (action.type === 'DECREMENT')
		return --currentState;
	return currentState;
}
export default spinnerReducer;