var limitContoller=require('../../controllers/limit')

module.exports = function(router){

	router.post('/limits', limitContoller.init);
    router.post('/limit_detail', limitContoller.detail);
    router.post('/limit_manager', limitContoller.limit_manager);
}
