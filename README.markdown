# floatcompress.js

Simple functions for scaling a floating point number to fit into an int8, int16 or int32. The compression is lossy. If the number range is known, precision can be increased.
 
The method can be used to compress data into or from JavaScript TypedArrays or Node.js Buffers, in both server and client. Examples of applications are in real-time games where you really have to keep down the bandwidth and count the bits.

## Browser example
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="floatcompress.js"></script>
  </head>
  <body>
    <script>
      var num = Math.random(); // This number will be between 0 and 1
      var compressed = FCOMPRESS.compress(num,'int8',0,1);
      var uncompressed = FCOMPRESS.uncompress(compressed,'int8',0,1);
      document.write("Before compression: "+num+"<br>");
      document.write("Compressed: "+compressed+"<br>");
      document.write("Uncompressed: "+uncompressed+"<br>");
    </script>
  </body>
</html>
```
The above script gives an output similar to this:
```
Before compression: 0.3496961537748575
Compressed:         -39
Uncompressed:       0.34901960784313724
```
As you can see, a compress/uncompress roundtrip makes the number lose precision. Using compression level 'int16' or 'int32' would have given better results.

## Node.js example
This is the same example, but in Node.js.
```
var FCOMPRESS = require("floatcompress.js");
var num = Math.random(); // This number will be between 0 and 1
var compressed = FCOMPRESS.compress(num,'int8',0,1);
var uncompressed = FCOMPRESS.uncompress(compressed,'int8',0,1);
console.log("Before compression:\t"+num);
console.log("Compressed:\t"+compressed);
console.log("Uncompressed:\t"+uncompressed);
```