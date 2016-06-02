#!/usr/bin/env node
'use strict';
require( 'coffee-script/register' );
process.title = 'hog';
// var findup = require( 'findup-sync' );
// var resolve = require( 'resolve' ).sync;
// var basedir = process.cwd();
// var hogpath;
//
// try {
//   hogpath = resolve( 'hog', {basedir : basedir} );
// } catch ( ex ) {
//   hogpath = findup( 'lib/hog.coffee');
//
//   No hog install found!
// if ( !hogpath ) {
//   console.log( 'Unable to find local hog.' );
//   process.exit( 99 )
// }
// }

//noinspection JSUnresolvedFunction
var Hog = require( '../' );
new Hog().cli();
