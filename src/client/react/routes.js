const React = require('react');
const ReactRouter = require('react-router-dom');

const Index = require('./components/index');
const Lorem = require('./components/lorem');
const Ipsum = require('./components/ipsum');
const Item = require('./components/item');
const Login = require('./components/login');

const NotFound = require('./components/notFound');

const Header = require('./components/layout/header');


class Routes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement(
      ReactRouter.BrowserRouter,
      {},
      React.createElement(
        'div',
        {className: '--router-container'},
        React.createElement(
          Header
        ),
        React.createElement(
          ReactRouter.Switch,
          {},
          React.createElement(
            ReactRouter.Route,
            {path: '/', component: Index, exact: true}
          ),
          React.createElement(
            ReactRouter.Route,
            {path: '/lorem', component: Lorem}
          ),
          React.createElement(
            ReactRouter.Route,
            {path: '/ipsum', component: Ipsum}
          ),
          React.createElement(
            ReactRouter.Route,
            {path: '/item/:id', component: Item}
          ),
          React.createElement(
            ReactRouter.Route,
            {path: '/login', component: Login}
          ),
          React.createElement(
            ReactRouter.Route,
            {path: '*', component: NotFound}
          )
        )
      )
    );
  }
}

module.exports = Routes;
