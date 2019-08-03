#!/usr/bin/env node
const program = require('commander');
const figlet = require('figlet');

const config = require('./config');
const actions = require('./actions');

/** banner */
console.log(
  figlet.textSync('Global-Express-CLI', {
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
    kerning: 'fitted',
  })
);

/** version */
program
  .version(config.version)
  .alias('ge')
  .description(config.description);

/** init */
program
  .command('init')
  .alias('i')
  .description('Initializes the global express')
  .action(() => {
    actions.init();
  });

/** help */
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);
