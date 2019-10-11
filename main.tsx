import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "mobx-react";
import App from '@/views/app';
render(
	<Provider>
		<BrowserRouter >
			<Route component={App} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);