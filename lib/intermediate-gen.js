var fs = require('fs');
var StringBuilder = require('stringbuilder');
var execSync = require('exec-sync');

var IntermediateGen = {
  generate: function(tgnRoot, tmpFolder, projectFolder, sourceFolder, componentFolder, component) {
    var intermediateDestination = tmpFolder + "/" + componentFolder + "/" + component;

    //transpile components
    execSync(tgnRoot + '/node_modules/babel-cli/bin/babel.js ' + projectFolder + '/' + sourceFolder + ' --out-dir '+ tmpFolder + ' --no-babelrc --presets react,es2015,stage-0 --plugins transform-decorators-legacy --ignore node_modules');

    //read transpiled code
    var data = fs.readFileSync(intermediateDestination + ".js");

    var sb = new StringBuilder( {newline:'\n'} );
    sb.append(data);
    sb.appendLine('');
    sb.appendLine("require('" + tgnRoot + "/thirdparty/jalangi/src/js/InputManager');");
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
