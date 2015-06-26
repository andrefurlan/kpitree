/* eslint-env node */

'use strict';

var bg = require('gulp-bg');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var harmonize = require('harmonize');
var makeWebpackConfig = require('./webpack.config');
var runSequence = require('run-sequence');
var webpackBuild = require('./build');
var webpackDevServer = require('./devserver');
var yargs = require('yargs');

// Enables node's --harmony flag programmatically for jest.
harmonize();

var args = yargs
  .alias('p', 'production')
  .argv;

gulp.task('env', function() {
  process.env.NODE_ENV = args.production ? 'production' : 'development';
});

gulp.task('build-webpack-production', webpackBuild(makeWebpackConfig(false)));
gulp.task('build-webpack-dev', webpackDevServer(makeWebpackConfig(true)));
gulp.task('build-webpack', [args.production ? 'build-webpack-production' : 'build-webpack-dev']);
gulp.task('build', ['build-webpack']);

gulp.task('server', ['env', 'build'], bg('node', 'src/server'));

gulp.task('default', ['server']);
