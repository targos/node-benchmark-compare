/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/node-benchmark-compare.test.js TAP path-dirname-posix > must match snapshot 1`] = `
                                                             confidence improvement accuracy (*)    (**)   (***)
path/dirname-posix.js n=100000 path=''                                       3.19 %      ±13.59% ±18.96% ±26.61%
path/dirname-posix.js n=100000 path='/'                                      2.41 %       ±4.61%  ±6.40%  ±8.89%
path/dirname-posix.js n=100000 path='/foo'                                   1.69 %       ±3.23%  ±4.44%  ±6.06%
path/dirname-posix.js n=100000 path='/foo/bar'                               1.60 %       ±3.71%  ±5.13%  ±7.09%
path/dirname-posix.js n=100000 path='/foo/bar/baz/asdf/quux'                 0.10 %       ±3.70%  ±5.09%  ±6.97%
path/dirname-posix.js n=100000 path='foo'                                   -1.01 %       ±5.42%  ±7.43% ±10.13%
path/dirname-posix.js n=100000 path='foo/bar'                                1.71 %       ±6.85%  ±9.45% ±13.02%

Be aware that when doing many comparisons the risk of a false-positive result increases.
In this case, there are 7 comparisons, you can thus expect the following amount of false-positive results:
  0.35 false positives, when considering a   5% risk acceptance (*, **, ***),
  0.07 false positives, when considering a   1% risk acceptance (**, ***),
  0.01 false positives, when considering a 0.1% risk acceptance (***)
`
