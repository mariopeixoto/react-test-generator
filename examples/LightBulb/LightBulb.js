'use strict';

var React = require('react');

var LightBulb = React.createClass({
  render: function() {
    if (this.props.isOn) {
      return <div>Light is on</div>;
    } else {
      return <div>Light is off</div>
    }
  }
});

module.exports = LightBulb;
