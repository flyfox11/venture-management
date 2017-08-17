module.exports = function(router){

	// 首頁路由 (http://localhost:8080)
	router.get('/', function(req, res) {
	  res.send('home page!');
	});

	// 另一張網頁路由 (http://localhost:8080/about)
	router.get('/about', function(req, res) {
	  res.send('about page!');
	});
}