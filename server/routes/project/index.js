var projectContoller=require('../../controllers/project')

module.exports = function(router){

	router.post('/project_status', projectContoller.getProjectStatus);
}
