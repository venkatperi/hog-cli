#!/usr/bin/env node
'use strict';
require( 'coffee-script/register' );
process.title = 'hog';
var findup = require( 'findup-sync' );
var resolve = require( 'resolve' ).sync;
var basedir = process.cwd();
var hogpath;

try {
  hogpath = resolve( 'lean-hog', {basedir : basedir} );
} catch ( ex ) {
  hogpath = findup( 'lib/hog.coffee' );

  // No hog install found!
  if ( !hogpath ) {
    console.log( 'Unable to find local hog. To install: npm i --save lean-hog' );
    process.exit( 99 )
  }
}

//noinspection JSUnresolvedFunction
try {
  var Hog = require( hogpath );
  new Hog().cli();
}
catch ( err ) {
  console.log( err.message );
  process.exit( 98 );
}
