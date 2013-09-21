isOnline
==========
isOnline is a javascript plugin to check if Internet connectivity is available.

How to use
----------
```
var isOnline = new isOnline();
isOnline.detect(function(o){
    if (o == true) {
		console.log("Internet connectivity is available.");
	} else {
		console.log("Internet connectivity is unavailable.");
	}
});
```