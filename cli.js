#!/usr/bin/env node
'use strict';
const meow = require('meow');
const bibleMaleNames = require('bible-male-names');

const cli = meow(`
	Usage
    $ bible-male-names <options>

	Examples
    $ bible-male-names
	  Abraham
	  
	  $ bible-male-names --all
	  Aaron
		Abagtha
		Abda
	  ...
	  
	Options
	  --all  Get a list of all male names from The Bible
`);

console.log(cli.flags.all ? bibleMaleNames.all.join('\n') : bibleMaleNames.random());
