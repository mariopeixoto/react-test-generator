var rimraf = require('rimraf');
var fs = require('fs');
var glob = require("glob");
var execSync = require('exec-sync');
var path = require('path');

var intermediateGen = require('./intermediate-gen.js');
var testGen = require('./test-gen.js');

var argv = require('yargs')
    .usage('Usage: $0 [project_folder] [source_folder] [component_folder] [target]')
    .demand(4)
    .argv;

//Create intermediate file
var projectFolder = argv._[0];
var sourceFolder = argv._[1];
var componentFolder = argv._[2];
var target = argv._[3];

var tgnRoot = path.resolve(__dirname +"/..");
var libRoot = __dirname;

var tmpFolder = path.resolve(projectFolder + '/react_tgn_tmp');

if (fs.existsSync(tmpFolder)) {
  rimraf.sync(tmpFolder)
}
fs.mkdirSync(tmpFolder);

var intermediateFile = intermediateGen.generate(tgnRoot, tmpFolder, projectFolder, sourceFolder, componentFolder, target);

var exec = require('child_process').exec;
var execConcolicTesting = 'cd ' + libRoot + '; python ../thirdparty/jalangi/scripts/jalangi.py concolic_tgn ' + intermediateFile;

console.log('Generating input data');
rimraf.sync('./jalangi_tmp/');
exec(execConcolicTesting, function(error, stdout, stderr) {

  glob(libRoot + '/jalangi_tmp/jalangi_outputs*.js', function (er, files) {
    var libRootRegex = libRoot.replace(/\//g, "\\/");
    var regex = new RegExp(libRootRegex + '\/jalangi_tmp\/jalangi_outputs([0-9]+)\.js$');
    var io = files.map(function(f) {
      var i = f.match(regex)[1];
      if (i == 0) {
        return {
          input: "{}",
          output: execSync('node ' + libRoot + '/get_output.js ' + f),
        };
      } else {
        return {
          input: JSON.parse( execSync('node ' + libRoot + '/get_input.js ' + libRoot + '/jalangi_tmp/jalangi_inputs' + i + '.js') ),
          output: execSync('node ' + libRoot + '/get_output.js ' + f),
        };
      }
    });

    console.log('Generating test cases');
    var testCount = testGen.generate(io, target, projectFolder + '/' + sourceFolder);
    console.log(testCount + ' test-cases generated for component ' + target);

    //cleanup
    console.log('Removing instrumented code');
    rimraf.sync(tmpFolder, fs);
    rimraf.sync(libRoot + '/jalangi_tmp', fs);
  });

});
