'use strict';

function projectsController($log, $scope, $http) {
	'ngInject';

	$log.debug('¡projects!');

	$http
	.get("projects.json")
	.then(function(projects){
      $scope.projects = projects.data;
    });
}

export default projectsController;
