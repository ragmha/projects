#!/usr/bin/env node
'use strict';

var meow = require('meow');
var mkCharacters = require('./');


var cli = meow([
  'Examples',
	'  $ mkCharacters',
	'  Scorpion',
	'',
	'  $ mkCharacters --all',
	'  ace',
	'  amazing',
	'  ...',
	'',
	'Options',
	'  --all  Get all the Mortal-Kombat characters'
]);

console.log(cli.flags.all ? mkCharacters.all.join('\n'): mkCharacters.random());
