const React = require('react');

const Routes = require('./routes')


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement(
      Routes
    );
  }
}

module.exports = App;
