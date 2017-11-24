import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

import BugTracker from './BugTracker/BugTracker';
import Spinner from './Spinner/Spinner';

ReactDOM.render(
	<Provider store={store}>
		<div>
			<BugTracker />
			<hr/>
			<Spinner />
		</div>
	</Provider>
, document.getElementById('root'));
