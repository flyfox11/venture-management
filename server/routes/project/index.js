var projectContoller=require('../../controllers/project')

module.exports = function(router){
	router.post('/projects', projectContoller.init);
	router.post('/project_status', projectContoller.getProjectStatus);
}
