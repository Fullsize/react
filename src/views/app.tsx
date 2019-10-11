import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import routers from '@/router/index'
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
class App extends Component{
	render(){
		return(
			<div>
				<Switch>
					{routers.map((route,i)=>{
						const LoadableComponent = Loadable({
							loader: route.component,
							loading: () => null
						});
						return (<Route key={i} {...route} component={LoadableComponent} />)
					})}
				</Switch>
			</div>
		)
	}
}
export default App;