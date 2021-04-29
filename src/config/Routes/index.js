import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Detail, List } from '../../pages'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<List />
				</Route>
				<Route path="/detail">
					<Detail />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes
