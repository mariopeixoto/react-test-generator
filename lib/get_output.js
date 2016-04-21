var argv = require('yargs')
    .usage('Usage: $0 [target]')
    .demand(1)
    .argv;

var fs = require('fs');

var output = fs.readFileSync(argv._[0], 'utf-8');
console.log(output.replace(/\n$/, ''));
