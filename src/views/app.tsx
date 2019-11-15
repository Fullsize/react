import React, { Component, Suspense } from "react";
import { hot } from "react-hot-loader/root";
import Loadable from "react-loadable";
import { inject, observer } from "mobx-react";
import { Route, Switch } from "react-router-dom";
import routers from "@/router/index";

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					{routers.map((route, i) => {
						const LoadableComponent = Loadable({
							loader: route.component,
							loading: () => null,
						});
						return <Route key={i} {...route} component={LoadableComponent} />
					})}
				</Switch>
			</div>
		)
	}
}
export default hot(App);