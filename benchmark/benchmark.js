/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var fromCodePoint = require( '@stdlib/string-from-code-point' );
var UNICODE_MAX = require( '@stdlib/constants-unicode-max' );
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var isArray = require( '@stdlib/assert-is-array' );
var pkg = require( './../package.json' ).name;
var splitGraphemeClusters = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var str;
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = fromCodePoint( floor( randu() * UNICODE_MAX ) ) + 'eep boop';
		out = splitGraphemeClusters( str );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});