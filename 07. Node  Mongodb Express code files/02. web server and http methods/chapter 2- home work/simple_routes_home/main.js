var http = require('http');

// Create a server object
http.createServer(function (req, res) {
	
	// http header
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	var url = req.url;
	
	if(url ==='/aboutus') {
		res.write(' Welcome to about us page');
		res.end();
	}
	else if(url ==='/contactus') {
		res.write(' Welcome to contact us page');
		res.end();
	}
	else {
		res.write('hello everyone at upgrad!');
		res.end();
	}
}).listen(3000, function() {
	
	// The server object listens on port 3000
	console.log("server start at port 3000");
});
