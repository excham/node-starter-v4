const React = require('react');


class Item extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement(
      'div',
      {className: 'container'},
      'Item #',
      this.props.match.params.id
    );
  }
}

module.exports = Item;
