let http = require('http')
http.createServer( (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World, welcome to WeJapa Internship')
}).listen(8081, 'localhost')
console.log('server running at http://localhost:8081')