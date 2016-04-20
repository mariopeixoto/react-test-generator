var fs = require('fs');
var StringBuilder = require('stringbuilder');
var camelCase = require('camelcase');

var TestGen = {
  generate: function(inputs, target, targetFolder) {
    var file = '../' + target + '.js';
    var outputFolder = targetFolder + '/__tests__';

    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    }

    var sb = new StringBuilder( {newline:'\n'} );
    var camelTarget = camelCase(target);

    sb.appendLine("jest.unmock('" + file + "');");
    sb.appendLine('');
    sb.appendLine("import React from 'react';");
    sb.appendLine("import ReactDOM from 'react-dom';");
    sb.appendLine("import TestUtils from 'react-addons-test-utils';");
    sb.appendLine("import "+ target + " from '" + file + "';");
    sb.appendLine('');

    sb.appendLine("describe('" + target + "', () => {");
    sb.appendLine('');
    for(var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      sb.appendLine("\tit('input " + i + "', () => {");
      sb.appendLine('');
      sb.appendLine("\t\tconst input = JSON.parse(\"" + JSON.stringify(input).replace(/"/g, '\\"') + "\");");
      sb.appendLine("\t\tconst "+ camelTarget + " = TestUtils.renderIntoDocument(");
      sb.appendLine("\t\t\t<" + target + " {...input} />");
      sb.appendLine("\t\t);");

      sb.appendLine("\t\tconsole.log("+ camelTarget + ");");
      sb.appendLine('');
      sb.appendLine("\t});");
      sb.appendLine('');
    }
    sb.appendLine('');
    sb.appendLine("});");

    var stream = fs.createWriteStream( outputFolder + '/' + target + '-test.js', 'utf-8' );
    sb.pipe(stream);
    sb.flush();

  }
};

module.exports = TestGen;
