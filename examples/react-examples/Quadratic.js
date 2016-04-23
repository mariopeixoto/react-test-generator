var React = require('react');

var Quadratic = React.createClass({
  render: function() {
    var a = this.props.a;
    var b = this.props.b;
    var c = this.props.c;
    var root = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    var denominator = 2 * a;
    var x1 = (-b + root) / denominator;
    var x2 = (-b - root) / denominator;
    return (
      <div>
        <strong>
          <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0
        </strong>
        <h4>Solve for <em>x</em>:</h4>
        <p>
          <label>
            a: {a}
          </label>
          <br />
          <label>
            b: {b}
          </label>
          <br />
          <label>
            c: {c}
          </label>
          <br />
          x: <strong>{x1}, {x2}</strong>
        </p>
      </div>
    );
  }
});

module.exports = Quadratic;
