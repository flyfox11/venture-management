var limitContoller=require('../../controllers/limit')

module.exports = function(router){

	router.post('/limits', limitContoller.init);
    router.post('/limitDetail', limitContoller.detail);
    router.post('/limit_manager', limitContoller.limit_manager);
}
