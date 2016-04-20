var React = require('react');

var LightBulb = React.createClass({
  render: function() {
    if (this.props.isOn) {
      return React.createElement('div', null, 'Light is on');
    } else {
      return React.createElement('div', null, 'Light is off');
    }
  }
});

module.exports = LightBulb;
