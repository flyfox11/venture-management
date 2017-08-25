var limitContoller=require('../../controllers/limit')

module.exports = function(router){

	router.post('/limits', limitContoller.init);
}
