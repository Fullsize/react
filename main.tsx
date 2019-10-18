import * as React from 'react';
import { render } from 'react-dom';
import { Router,Route } from 'react-router-dom';
import { Provider } from "mobx-react";
import App from '@/views/app';
import { createBrowserHistory } from 'history';

import Stores from '@/stores/index';
import Actions from '@/actions/index';
import 'reset-css';

render(
	<Provider {...Stores} { ...new Actions(Stores)}>
		<Router  history={createBrowserHistory()}>
			<Route component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);