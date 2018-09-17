#!/usr/bin/env node

// var chalk = require('chalk');
// var argv = require('yargs').argv;
// var program = require('commander');

var default_config = require('../config');

require('../server')(default_config);


