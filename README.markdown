# floatcompress.js

Simple functions for scaling a floating point number to fit into an int8, int16 or int32. The compression is lossy. If the number range is known, precision can be increased.
 
The method can be used to compress data into or from JavaScript TypedArrays or Node.js Buffers, in both server and client. Examples of applications are in real-time games where you really have to keep down the bandwidth and count the bits.

## Example
```
var num = Math.random(); // This number will be between 0 and 1
var compressed = FCOMPRESS.compress(num,'int8',0,1);
var uncompressed = FCOMPRESS.uncompress(compressed,'int8',0,1);
console.log("Before compression:\t"+num);
console.log("Compressed:\t"+compressed);
console.log("Uncompressed:\t"+uncompressed);
```