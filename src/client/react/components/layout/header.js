const React = require('react');
const ReactRouter = require('react-router-dom');


class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement(
      'nav',
      {className: 'navbar'},
      React.createElement(
        'div',
        {className: 'navbar-brand'},
        React.createElement(
          ReactRouter.Link,
          {to: '/', className: 'navbar-item'},
          'MyApp'
        )
      ),
      React.createElement(
        'div',
        {className: 'navbar-menu'},
        React.createElement(
          'div',
          {className: 'navbar-start'},
          React.createElement(
            ReactRouter.Link,
            {to: '/', className: 'navbar-item'},
            'Home'
          ),
          React.createElement(
            ReactRouter.Link,
            {to: '/lorem', className: 'navbar-item'},
            'Lorem'
          ),
          React.createElement(
            ReactRouter.Link,
            {to: '/ipsum', className: 'navbar-item'},
            'Ipsum'
          ),
          React.createElement(
            ReactRouter.Link,
            {to: '/item/1', className: 'navbar-item'},
            'Item 1'
          ),
          React.createElement(
            ReactRouter.Link,
            {to: '/item/2', className: 'navbar-item'},
            'Item 2'
          )
        ),
        React.createElement(
          'div',
          {className: 'navbar-end'},
          React.createElement(
            ReactRouter.Link,
            {to: '/login', className: 'navbar-item'},
            'Login'
          )
        )
      )
    );
  }
}

module.exports = Header;
