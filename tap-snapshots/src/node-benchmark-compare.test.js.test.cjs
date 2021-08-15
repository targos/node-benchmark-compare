/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/node-benchmark-compare.test.js TAP confidence > must match snapshot 1`] = `
                                                        confidence improvement accuracy (*)    (**)   (***)
util/format.js type='string-2' n=100000                          *      7.40 %       ±7.22%  ±9.61% ±12.51%
util/format.js type='string' n=100000                          ***     14.47 %       ±7.27%  ±9.68% ±12.63%
util/inspect.js option='colors' method='Number' n=20000         **     17.97 %      ±12.02% ±17.25% ±25.33%

Be aware that when doing many comparisons the risk of a false-positive result increases.
In this case, there are 3 comparisons, you can thus expect the following amount of false-positive results:
  0.15 false positives, when considering a   5% risk acceptance (*, **, ***),
  0.03 false positives, when considering a   1% risk acceptance (**, ***),
  0.00 false positives, when considering a 0.1% risk acceptance (***)
`

exports[`src/node-benchmark-compare.test.js TAP http > must match snapshot 1`] = `
                                                                                                              confidence improvement accuracy (*)      (**)      (***)
http/client-request-body.js method='end' len=1024 type='asc' dur=5                                                            2.72 %      ±39.08%  ±129.37%   ±708.99%
http/client-request-body.js method='end' len=1024 type='buf' dur=5                                                           -7.35 %      ±63.34%  ±249.25%  ±1758.36%
http/client-request-body.js method='end' len=1024 type='utf' dur=5                                                     *     -2.73 %       ±0.91%    ±3.33%    ±21.33%
http/client-request-body.js method='end' len=256 type='asc' dur=5                                                            -0.38 %      ±93.95%  ±470.54%  ±4703.65%
http/client-request-body.js method='end' len=256 type='buf' dur=5                                                      *     -7.92 %       ±5.49%   ±12.73%    ±40.79%
http/client-request-body.js method='end' len=256 type='utf' dur=5                                                            -1.48 %      ±12.59%   ±29.80%    ±98.73%
http/client-request-body.js method='end' len=32 type='asc' dur=5                                                              5.09 %      ±36.24%  ±105.95%   ±483.25%
http/client-request-body.js method='end' len=32 type='buf' dur=5                                                             -3.92 %      ±20.25%   ±59.49%   ±273.28%
http/client-request-body.js method='end' len=32 type='utf' dur=5                                                             -1.04 %      ±46.25%  ±181.31%  ±1271.81%
http/client-request-body.js method='write' len=1024 type='asc' dur=5                                                          5.57 %      ±14.79%   ±40.55%   ±168.09%
http/client-request-body.js method='write' len=1024 type='buf' dur=5                                                        -16.58 %      ±36.56%  ±122.46%   ±682.80%
http/client-request-body.js method='write' len=1024 type='utf' dur=5                                                         -1.60 %       ±3.34%    ±9.31%    ±39.46%
http/client-request-body.js method='write' len=256 type='asc' dur=5                                                           2.73 %      ±22.97%   ±90.94%   ±647.39%
http/client-request-body.js method='write' len=256 type='buf' dur=5                                                          -2.46 %      ±41.06%  ±158.16%  ±1081.52%
http/client-request-body.js method='write' len=256 type='utf' dur=5                                                           3.08 %      ±50.33%  ±252.07%  ±2519.57%
http/client-request-body.js method='write' len=32 type='asc' dur=5                                                            1.80 %      ±21.45%   ±67.69%   ±345.53%
http/client-request-body.js method='write' len=32 type='buf' dur=5                                                           -1.91 %       ±8.41%   ±22.72%    ±92.08%
http/client-request-body.js method='write' len=32 type='utf' dur=5                                                            3.07 %      ±12.79%   ±39.64%   ±197.03%
http/cluster.js duration=5 c=50 len=1024 type='buffer' benchmarker='test-double-http'                                        -5.44 %      ±25.65%   ±68.01%   ±267.90%
http/cluster.js duration=5 c=50 len=1024 type='bytes' benchmarker='test-double-http'                                         -3.93 %      ±42.17%  ±133.00%   ±678.65%
http/cluster.js duration=5 c=50 len=102400 type='buffer' benchmarker='test-double-http'                                      -6.63 %      ±16.48%   ±49.27%   ±232.16%
http/cluster.js duration=5 c=50 len=102400 type='bytes' benchmarker='test-double-http'                                       -8.45 %      ±21.72%   ±50.57%   ±163.41%
http/cluster.js duration=5 c=50 len=4 type='buffer' benchmarker='test-double-http'                                           -8.79 %      ±70.66%  ±353.77%  ±3534.73%
http/cluster.js duration=5 c=50 len=4 type='bytes' benchmarker='test-double-http'                                            -6.20 %      ±16.34%   ±42.96%   ±167.08%
http/cluster.js duration=5 c=500 len=1024 type='buffer' benchmarker='test-double-http'                                       -4.50 %      ±31.07%   ±94.92%   ±462.04%
http/cluster.js duration=5 c=500 len=1024 type='bytes' benchmarker='test-double-http'                                        -2.07 %      ±48.82%  ±193.10%  ±1372.05%
http/cluster.js duration=5 c=500 len=102400 type='buffer' benchmarker='test-double-http'                                     -9.87 %      ±48.58%  ±169.10%   ±997.34%
http/cluster.js duration=5 c=500 len=102400 type='bytes' benchmarker='test-double-http'                                      -8.94 %      ±46.16%  ±176.67%  ±1197.07%
http/cluster.js duration=5 c=500 len=4 type='buffer' benchmarker='test-double-http'                                          -4.44 %      ±22.99%   ±55.53%   ±189.86%
http/cluster.js duration=5 c=500 len=4 type='bytes' benchmarker='test-double-http'                                           -3.69 %      ±31.11%  ±111.08%   ±680.02%
http/http_server_for_chunky_client.js type='send' n=2000 len=1                                                                1.51 %      ±26.61%   ±67.13%   ±245.31%
http/http_server_for_chunky_client.js type='send' n=2000 len=128                                                             -8.64 %     ±117.66%  ±420.07%  ±2571.19%
http/http_server_for_chunky_client.js type='send' n=2000 len=16                                                               6.90 %      ±98.70%  ±461.93%  ±4187.68%
http/http_server_for_chunky_client.js type='send' n=2000 len=32                                                               5.86 %      ±65.98%  ±159.39%   ±544.95%
http/http_server_for_chunky_client.js type='send' n=2000 len=4                                                               14.01 %      ±86.86%  ±432.57%  ±4289.17%
http/http_server_for_chunky_client.js type='send' n=2000 len=64                                                              -8.84 %      ±64.44%  ±154.31%   ±520.47%
http/http_server_for_chunky_client.js type='send' n=2000 len=8                                                               10.02 %      ±78.22%  ±274.42%  ±1637.57%
http/http_server_for_chunky_client.js type='send' n=5 len=1                                                                   9.37 %      ±20.15%   ±71.66%   ±435.96%
http/http_server_for_chunky_client.js type='send' n=5 len=128                                                               -25.53 %      ±53.26%  ±148.57%   ±631.63%
http/http_server_for_chunky_client.js type='send' n=5 len=16                                                                 12.41 %      ±96.55%  ±352.26%  ±2225.64%
http/http_server_for_chunky_client.js type='send' n=5 len=32                                                                -17.50 %     ±118.33%  ±308.38%  ±1183.44%
http/http_server_for_chunky_client.js type='send' n=5 len=4                                                                   3.53 %     ±268.32% ±1141.10%  ±9008.03%
http/http_server_for_chunky_client.js type='send' n=5 len=64                                                                  1.83 %      ±44.66%  ±106.42%   ±356.21%
http/http_server_for_chunky_client.js type='send' n=5 len=8                                                                  17.52 %      ±54.70%  ±243.34%  ±2049.95%
http/http_server_for_chunky_client.js type='send' n=50 len=1                                                                 -5.93 %      ±64.46%  ±212.61%  ±1158.84%
http/http_server_for_chunky_client.js type='send' n=50 len=128                                                               -0.24 %     ±322.01% ±1493.20% ±13357.64%
http/http_server_for_chunky_client.js type='send' n=50 len=16                                                                -4.50 %      ±85.48%  ±223.64%   ±863.40%
http/http_server_for_chunky_client.js type='send' n=50 len=32                                                                 2.93 %     ±110.46%  ±265.99%   ±904.94%
http/http_server_for_chunky_client.js type='send' n=50 len=4                                                                 15.10 %     ±146.01%  ±484.00%  ±2657.53%
http/http_server_for_chunky_client.js type='send' n=50 len=64                                                                 3.33 %      ±63.15%  ±255.58%  ±1877.80%
http/http_server_for_chunky_client.js type='send' n=50 len=8                                                                 -7.75 %      ±33.71%  ±168.55%  ±1680.89%
http/http_server_for_chunky_client.js type='send' n=500 len=1                                                                 1.70 %     ±100.51%  ±501.76%  ±4992.29%
http/http_server_for_chunky_client.js type='send' n=500 len=128                                                             -10.52 %     ±112.77%  ±357.45%  ±1837.42%
http/http_server_for_chunky_client.js type='send' n=500 len=16                                                                6.72 %     ±121.62%  ±609.17%  ±6090.20%
http/http_server_for_chunky_client.js type='send' n=500 len=32                                                               20.10 %     ±107.01%  ±518.10%  ±4932.25%
http/http_server_for_chunky_client.js type='send' n=500 len=4                                                                -2.68 %      ±86.80%  ±433.26%  ±4310.18%
http/http_server_for_chunky_client.js type='send' n=500 len=64                                                               -3.97 %      ±43.25%   ±99.83%   ±318.22%
http/http_server_for_chunky_client.js type='send' n=500 len=8                                                                13.72 %      ±95.34%  ±436.95%  ±3843.27%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=1 len=1024 type='buffer' benchmarker='test-double-http'                    1.36 %      ±10.31%   ±32.71%   ±168.53%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=1 len=1024 type='bytes' benchmarker='test-double-http'                     2.10 %      ±54.83%  ±223.60%  ±1660.98%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=1 len=102400 type='buffer' benchmarker='test-double-http'                 -6.86 %      ±10.07%   ±23.38%    ±75.23%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=1 len=102400 type='bytes' benchmarker='test-double-http'                  11.27 %      ±68.23%  ±341.01%  ±3398.61%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=1 len=4 type='buffer' benchmarker='test-double-http'                      -1.31 %      ±12.06%   ±31.91%   ±125.19%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=1 len=4 type='bytes' benchmarker='test-double-http'                       -9.32 %      ±36.15%  ±125.85%   ±742.53%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=4 len=1024 type='buffer' benchmarker='test-double-http'                    0.07 %      ±15.52%   ±73.79%   ±684.67%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=4 len=1024 type='bytes' benchmarker='test-double-http'                     2.95 %       ±3.65%   ±10.53%    ±46.99%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=4 len=102400 type='buffer' benchmarker='test-double-http'                  1.18 %      ±64.28%  ±207.20%  ±1091.75%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=4 len=102400 type='bytes' benchmarker='test-double-http'                  25.30 %     ±220.60% ±1088.94% ±10660.22%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=4 len=4 type='buffer' benchmarker='test-double-http'                       0.17 %      ±13.21%   ±38.81%   ±178.32%
http/simple.js duration=5 chunkedEnc=0 c=50 chunks=4 len=4 type='bytes' benchmarker='test-double-http'                       -1.40 %      ±89.17%  ±211.07%   ±699.33%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=1 len=1024 type='buffer' benchmarker='test-double-http'                   0.10 %      ±19.83%   ±70.75%   ±432.66%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=1 len=1024 type='bytes' benchmarker='test-double-http'                    4.09 %      ±16.85%   ±38.91%   ±124.14%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=1 len=102400 type='buffer' benchmarker='test-double-http'                -5.25 %      ±76.53%  ±369.13%  ±3495.07%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=1 len=102400 type='bytes' benchmarker='test-double-http'                  5.38 %      ±46.81%  ±121.20%   ±460.60%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=1 len=4 type='buffer' benchmarker='test-double-http'                     -0.70 %      ±64.61%  ±321.33%  ±3180.10%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=1 len=4 type='bytes' benchmarker='test-double-http'                     -13.56 %      ±52.15%  ±120.88%   ±387.76%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=4 len=1024 type='buffer' benchmarker='test-double-http'                  17.50 %      ±36.23%  ±163.59%  ±1408.31%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=4 len=1024 type='bytes' benchmarker='test-double-http'                    8.37 %      ±31.60%  ±157.30%  ±1558.98%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=4 len=102400 type='buffer' benchmarker='test-double-http'                -2.65 %      ±29.79%  ±130.28%  ±1071.05%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=4 len=102400 type='bytes' benchmarker='test-double-http'                 17.02 %      ±24.85%   ±72.68%   ±331.66%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=4 len=4 type='buffer' benchmarker='test-double-http'                     -0.41 %      ±18.56%   ±53.97%   ±244.16%
http/simple.js duration=5 chunkedEnc=0 c=500 chunks=4 len=4 type='bytes' benchmarker='test-double-http'                      14.63 %     ±194.03%  ±972.05%  ±9721.33%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=1 len=1024 type='buffer' benchmarker='test-double-http'                    2.22 %      ±10.04%   ±25.45%    ±93.58%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=1 len=1024 type='bytes' benchmarker='test-double-http'                     5.09 %      ±28.21%   ±76.28%   ±309.41%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=1 len=102400 type='buffer' benchmarker='test-double-http'                  4.14 %      ±25.25%   ±58.25%   ±185.48%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=1 len=102400 type='bytes' benchmarker='test-double-http'                  -3.68 %      ±18.80%   ±55.66%   ±258.67%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=1 len=4 type='buffer' benchmarker='test-double-http'                       3.91 %      ±50.04%  ±248.90%  ±2463.85%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=1 len=4 type='bytes' benchmarker='test-double-http'                        4.14 %      ±77.89%  ±390.04%  ±3898.43%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=4 len=1024 type='buffer' benchmarker='test-double-http'                    0.50 %       ±5.85%   ±13.61%    ±43.99%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=4 len=1024 type='bytes' benchmarker='test-double-http'                     7.46 %      ±11.43%   ±40.17%   ±240.35%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=4 len=102400 type='buffer' benchmarker='test-double-http'                 -0.68 %      ±35.35%   ±83.20%   ±273.32%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=4 len=102400 type='bytes' benchmarker='test-double-http'                   1.25 %      ±55.55%  ±214.38%  ±1470.04%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=4 len=4 type='buffer' benchmarker='test-double-http'                       1.13 %      ±18.82%   ±58.04%   ±286.42%
http/simple.js duration=5 chunkedEnc=1 c=50 chunks=4 len=4 type='bytes' benchmarker='test-double-http'                        8.40 %      ±83.52%  ±270.98%  ±1441.63%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=1 len=1024 type='buffer' benchmarker='test-double-http'                  -2.32 %      ±32.84%  ±119.70%   ±755.27%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=1 len=1024 type='bytes' benchmarker='test-double-http'                    1.22 %      ±10.68%   ±24.63%    ±78.42%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=1 len=102400 type='buffer' benchmarker='test-double-http'                -3.36 %      ±52.83%  ±194.37%  ±1243.26%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=1 len=102400 type='bytes' benchmarker='test-double-http'                  9.63 %      ±26.37%   ±93.53%   ±567.06%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=1 len=4 type='buffer' benchmarker='test-double-http'                      0.24 %      ±24.02%   ±86.46%   ±535.51%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=1 len=4 type='bytes' benchmarker='test-double-http'                     -10.48 %      ±47.24%  ±134.69%   ±591.52%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=4 len=1024 type='buffer' benchmarker='test-double-http'                  -3.21 %      ±31.64%  ±100.37%   ±516.51%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=4 len=1024 type='bytes' benchmarker='test-double-http'                    4.24 %      ±22.13%  ±108.20%  ±1044.69%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=4 len=102400 type='buffer' benchmarker='test-double-http'                -1.40 %      ±73.53%  ±214.91%   ±979.50%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=4 len=102400 type='bytes' benchmarker='test-double-http'                  4.02 %      ±10.59%   ±42.21%   ±303.18%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=4 len=4 type='buffer' benchmarker='test-double-http'                      3.58 %      ±15.38%   ±40.50%   ±157.92%
http/simple.js duration=5 chunkedEnc=1 c=500 chunks=4 len=4 type='bytes' benchmarker='test-double-http'                      12.68 %     ±112.44%  ±484.62%  ±3900.46%
http/upgrade.js n=1000                                                                                                       -2.72 %      ±19.90%   ±50.66%   ±187.60%
http/upgrade.js n=5                                                                                                           8.49 %      ±88.20%  ±436.43%  ±4287.21%

Be aware that when doing many comparisons the risk of a false-positive result increases.
In this case, there are 108 comparisons, you can thus expect the following amount of false-positive results:
  5.40 false positives, when considering a   5% risk acceptance (*, **, ***),
  1.08 false positives, when considering a   1% risk acceptance (**, ***),
  0.11 false positives, when considering a 0.1% risk acceptance (***)
`

exports[`src/node-benchmark-compare.test.js TAP insufficient > must match snapshot 1`] = `
                                                                   confidence improvement accuracy (*) (**) (***)
http/client-request-body.js method='write' len=32 type='asc' dur=5         NA  Infinity %           NA   NA    NA
http/something.js method='write' len=32 type='asc' dur=5                   NA       NaN %           NA   NA    NA

Be aware that when doing many comparisons the risk of a false-positive result increases.
In this case, there are 2 comparisons, you can thus expect the following amount of false-positive results:
  0.10 false positives, when considering a   5% risk acceptance (*, **, ***),
  0.02 false positives, when considering a   1% risk acceptance (**, ***),
  0.00 false positives, when considering a 0.1% risk acceptance (***)
`

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
