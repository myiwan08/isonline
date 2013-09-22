/**
 * See LICENSE
 * Check if internet connectivity is available
 * 
 */

(function(W, D, undefined){
	var isOnline = function() {

		/**
		 * Function to decide method to check internet connection
		 */
		this.detect = function(callback) {
			setInterval(function() { // Check every 5 seconds
				if(typeof W.navigator.onLine === "boolean") { // if HTML 5 browser
					callback(W.navigator.onLine);
				} else { // Check internet connection using an ajax request
					_ajaxRequest(function(o){
						callback(o);
					});
				}
			}, 5000);
		};

		/**
		 * Function to check if host is reachable in case if window.navigator.onLine is not present
		 */
		var _ajaxRequest = function(callback) {
			var xhr = new ( W.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
			xhr.open( "HEAD", "//" + W.location.hostname + "/?_=" + Math.random() + "_" + (new Date()).getTime(), false );
			try {
				xhr.send();
				var xhrStatus = (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
				callback(xhrStatus);
			} catch (error) {
				callback(0);
			}
		};

	};

	window['isOnline'] = isOnline;
})(window, document);