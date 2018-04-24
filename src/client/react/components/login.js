const React = require('react');


class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement(
      'div',
      {className: 'container'},
      'Login'
    );
  }
}

module.exports = Login;
