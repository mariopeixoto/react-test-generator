import React from 'react';

class LightBulb extends React.Component {
  render() {
    if (this.props.isOn) {
      return <div>Light is on</div>;
    } else {
      return <div>Light is off</div>;
    }
  }
}

export default LightBulb;
