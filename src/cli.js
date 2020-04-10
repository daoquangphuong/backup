const { program } = require('commander');
const remove = require('./commands/remove');

module.exports = function cli(input) {
  program
    .command('rm <dir>')
    .option('-r, --recursive', 'Remove recursively')
    .action(remove);

  program.parse(input);
};
