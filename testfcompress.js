/**
 * For testing the precision of the compress functions.
 * Run like this:
 * node testcompress.js
 */

var FCOMPRESS = require("./fcompress");

var numtests = 1000;

var types = ['uint8','int8','uint16','int16','int32','uint32'];
var mini = 0;
var maxi = 1;

console.log("Type\tMax error\t\tRange specified");
for(var maxi_on = 0; maxi_on < 2; maxi_on++){
    for(var j=0; j<types.length; j++){
	var type = types[j];
	var maxerr = 0;
	for(var i=0; i<numtests; i++){
	    var n = Math.random()*(maxi-mini) + mini;
	    var err = 0;
	    var compressed, uncompressed;
	    if(maxi_on){
		compressed = FCOMPRESS.compress(n,type,mini,maxi);
		uncompressed = FCOMPRESS.uncompress(compressed,type,mini,maxi);
	    } else {
		compressed = FCOMPRESS.compress(n,type);
		uncompressed = FCOMPRESS.uncompress(compressed,type);
	    }
	    var err = Math.abs(n-uncompressed);
	    if(err > maxerr)
		maxerr = err;
	}
	console.log(type+"\t"+maxerr+"\t"+(maxi_on ? "["+mini+","+maxi+"]" : "[-1e6,1e6]"));
    }
}