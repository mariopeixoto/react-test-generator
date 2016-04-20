var argv = require('yargs')
    .usage('Usage: $0 [target]')
    .demand(1)
    .argv;

require('../../jalangi/src/js/InputManager');
require(argv._[0]);

console.log(JSON.stringify(J$.readInput()));
