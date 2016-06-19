var React = require('react'),
	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	hashHistory = ReactRouter.hashHistory,
	IndexRoute = ReactRouter.IndexRoute,
	Main = require('../containers/Main'),
	HomeContainer = require('../containers/HomeContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
    <IndexRoute component={HomeContainer}/>
    </Route>
  </Router>
);

module.exports = routes;