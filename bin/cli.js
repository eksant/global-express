#!/usr/bin/env node
const program = require('commander');
const figlet = require('figlet');

const config = require('./config');
const actions = require('./actions');

/** title */
console.log(
  figlet.textSync('Global-Express-CLI', {
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
    kerning: 'fitted',
  })
);
console.log(config.description);

/** version */
program.version(config.version);

/** init */
program
  .command('init [directory]')
  .alias('i')
  .description('Initializes the global express with current or new directory')
  .action(path => actions.init(path));

/** clean */
program
  .command('clean [directory]')
  .alias('c')
  .description('Delete directory the global express')
  .action(path => actions.clean(path));

/** help */
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);
