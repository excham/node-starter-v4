const React = require('react');


class NotFound extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement(
      'div',
      {className: 'container'},
      'Not Found'
    );
  }
}

module.exports = NotFound;
