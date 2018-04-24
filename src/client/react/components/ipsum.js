const React = require('react');


class Ipsum extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement(
      'div',
      {className: 'container'},
      'Ipsum'
    );
  }
}

module.exports = Ipsum;
