if (typeof window === "undefined") {
    require('../../jalangi/src/js/InputManager2');
    require(process.cwd()+'/inputs');
}

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

var o = J$.readInput({});

console.log(new LightBulb(o).render());
