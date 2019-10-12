import * as React from 'react';
import { render } from 'react-dom';
import { Router,Route } from 'react-router-dom';
import { Provider } from "mobx-react";
import App from '@/views/app';
import { createBrowserHistory } from 'history';

import 'reset-css';
render(
	<Provider >
		<Router  history={createBrowserHistory()}>
			<Route component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);