var projectContoller=require('../../controllers/project')

module.exports = function(router){
	router.post('/projects', projectContoller.init);
	router.post('/project_status', projectContoller.getProjectStatus);
	router.post('/channel_status', projectContoller.getChannelStatus);
	router.post('/add_project', projectContoller.add);
	router.post('/update_project', projectContoller.update);
	router.post('/get_project', projectContoller.getProject);
}
