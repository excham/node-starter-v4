const React = require('react');


class Lorem extends React.Component {
  constructor() {
    super();
  } 

  render() {
    return React.createElement(
      'div',
      {className: 'container'},
      'Lorem'
    );
  }
}

module.exports = Lorem;
