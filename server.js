let http = require('http')
http.createServer( (req, res) => {
	res.write('Hello World, welcome to WeJapa Internships');
	res.end()
}).listen(8080)