var fs = require('fs');
var StringBuilder = require('stringbuilder');
var execSync = require('exec-sync');

var IntermediateGen = {
  generate: function(tmpFolder, componentFolder, component) {
    var file = componentFolder + "/" + component + ".js";
    var intermediateDestination = tmpFolder + "/" + component;

    var data = execSync('../node_modules/babel-cli/bin/babel.js ' + file);

    // var data = fs.readFileSync(file, 'utf8');
    var sb = new StringBuilder( {newline:'\n'} );
    sb.append(data);
    sb.appendLine('');
    sb.appendLine("require('../../thirdparty/jalangi/src/js/InputManager');");
    sb.appendLine("require(process.cwd()+'/inputs');");
    sb.appendLine("var React = require('react');")
    sb.appendLine("var ReactDOMServer = require('react-dom/server');")

    sb.appendLine('');

    sb.appendLine("var o = J$.readInput({});");
    sb.appendLine("new "+ component + "(o).render();");
    sb.appendLine("console.log( ReactDOMServer.renderToStaticMarkup( React.createElement(" + component + ", o) ) );");

    var stream = fs.createWriteStream( intermediateDestination + ".js" , 'utf-8' );
    sb.pipe(stream);
    sb.flush();

    return intermediateDestination;
  }
};

module.exports = IntermediateGen;
