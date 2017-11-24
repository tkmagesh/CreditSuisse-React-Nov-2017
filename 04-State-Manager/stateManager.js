var SM = (function(){
	var _reducer = null,
		_currentState = undefined,
		_init_action = { type : '@@INIT'},
		_subscribers = [];

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		

		function getState(){
			return _currentState
		}
		function subscribe(subscriptionFn){
			if (typeof subscriptionFn === 'function')
				_subscribers.push(subscriptionFn);
		}
		function trigger(){
			_subscribers.forEach(subscriptionFn => subscriptionFn());
		}

		function dispatch(action){
			var _newState = _reducer(_currentState, action);
			if (_newState !== _currentState){
				_currentState = _newState;
				trigger();
			}
		}
		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		}
	}

	return {
		createStore : createStore
	}
})();