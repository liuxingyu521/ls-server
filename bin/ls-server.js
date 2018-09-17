#!/usr/bin/env node

// var chalk = require('chalk');
var yargs = require('yargs');
// var program = require('commander');

var default_config = require('../config');

// 配置 yargs.argv
var argv = yargs
            .array('dirs')
            .argv;

var server_config = {
  port: argv.p || default_config.port,
  useHttps: argv.https || default_config.useHttps,
  staticDirs: argv.dirs || default_config.staticDirs
}
console.log(argv);

require('../server')(server_config);


