var fs = require('fs');
var StringBuilder = require('stringbuilder');

var IntermediateGen = {
  generate: function(tmpFolder, componentFolder, component) {
    var file = componentFolder + "/" + component + ".js";
    var intermediateDestination = tmpFolder + "/" + component;

    var data = fs.readFileSync(file, 'utf8');
    var sb = new StringBuilder( {newline:'\n'} );
    sb.appendLine("require('../../thirdparty/jalangi/src/js/InputManager');");
    sb.appendLine("require(process.cwd()+'/inputs');");

    sb.appendLine('');
    sb.append(data);
    sb.appendLine('');

    sb.appendLine("var o = J$.readInput({});");
    sb.appendLine("new LightBulb(o).render();");

    var stream = fs.createWriteStream( intermediateDestination + ".js" , 'utf-8' );
    sb.pipe(stream);
    sb.flush();

    return intermediateDestination;
  }
};

module.exports = IntermediateGen;
