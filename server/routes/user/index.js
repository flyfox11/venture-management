var userContoller=require('../../controllers/user')

module.exports = function(router){

	router.post('/users', userContoller.init);
  router.post('/login', userContoller.login);
  router.post('/register', userContoller.register);
  router.post('/withdraw', userContoller.withdraw);
}
