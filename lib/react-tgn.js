var rimraf = require('rimraf');
var fs = require('fs');
var glob = require("glob");
var execSync = require('exec-sync');

var intermediateGen = require('./intermediate-gen.js');
var testGen = require('./test-gen.js');


var argv = require('yargs')
    .usage('Usage: $0 [folder] [target]')
    .demand(2)
    .argv;

//Create intermediate file
var folder = argv._[0];
var target = argv._[1];

var tmpFolder = './' + target + '_tmp';

if (fs.existsSync(tmpFolder)) {
  rimraf.sync(tmpFolder)
}
fs.mkdirSync(tmpFolder);
var intermediateFile = intermediateGen.generate(tmpFolder, folder, target);

var exec = require('child_process').exec;
var execConcolicTesting = 'python ../thirdparty/jalangi/scripts/jalangi.py concolic_tgn ' + intermediateFile;

console.log('Generating input data');
rimraf.sync('./jalangi_tmp/');
exec(execConcolicTesting, function(error, stdout, stderr) {

  glob('./jalangi_tmp/jalangi_inputs*.js', function (er, files) {
    var regex = /^\.\/jalangi_tmp\/jalangi_inputs([0-9]+)\.js$/
    var io = files.map(function(f) {
      var i = f.match(regex)[1];
      return {
        input: JSON.parse( execSync('node ./get_input.js ' + f) ),
        output: execSync('node ./get_output.js ./jalangi_tmp/jalangi_outputs' + i + '.js'),
      };
    });

    console.log('Generating test cases');
    var testCount = testGen.generate(io, target, folder);
    console.log(testCount + ' test-cases generated for component ' + target);

    //cleanup
    console.log('Removing instrumented code');
    rimraf.sync(tmpFolder, fs);
    rimraf.sync('./jalangi_tmp', fs);
  });

});
