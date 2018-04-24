const React = require('react');


class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement(
      'div',
      {className: 'container'},
      'Welcome!'
    );
  }
}

module.exports = Index;
